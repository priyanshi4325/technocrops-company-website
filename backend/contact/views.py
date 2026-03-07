from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Contact

from django.core.mail import send_mail
from django.conf import settings

from django.core.validators import validate_email
from django.core.exceptions import ValidationError

@csrf_exempt
def contact_submit(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            name=data.get("name", "").strip()
            email=data.get("email", "").strip()
            phone=data.get("phone", "").strip()
            message=data.get("message", "").strip()

            if not name or not email or not message:
                return JsonResponse({"error":"Please fill all fields."}, status=400,)
            
            try:
                validate_email(email)
            except ValidationError:
                return JsonResponse({"error":"Please enter a email address"},status=400,)
            
            if len(message)<10:
                return JsonResponse({"error": "Message must be at least 10 characters"},status=400,)
            
            contact=Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                message=message
            )
        
            # ✨ Send email to company
            send_mail(
                subject=f"New Contact Form Submission from {contact.name}",
                message=f"""
Name: {contact.name}
Email: {contact.email}
Phone: {contact.phone}

Message:
{contact.message}
""",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER],  
                fail_silently=False,
            )

            return JsonResponse(
                {"message": "Thanks! We'll contact you within 24 hours."},
                status=201,
            )

        except Exception as e:
            import traceback
            print(traceback.format_exc()) # Prints the full error "stack" in Render logs
            return JsonResponse({"error": f"Django Error: {str(e)}"}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)

