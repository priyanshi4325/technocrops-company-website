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

            name = data.get("name", "").strip()
            email = data.get("email", "").strip()
            phone = data.get("phone", "").strip()
            message = data.get("message", "").strip()

            if not name or not email or not message:
                return JsonResponse({"error": "Please fill all fields."}, status=400)
            
            try:
                validate_email(email)
            except ValidationError:
                return JsonResponse({"error": "Please enter a valid email address"}, status=400)
            
            if len(message) < 10:
                return JsonResponse({"error": "Message must be at least 10 characters"}, status=400)
            
            # 1. Save to Database First
            contact = Contact.objects.create(
                name=name,
                email=email,
                phone=phone,
                message=message
            )
        
            # 2. Try to Send Email (Shielded from crashing the whole request)
            # try:
            #     send_mail(
            #         subject=f"New Contact Form Submission from {contact.name}",
            #         message=f"Name: {contact.name}\nEmail: {contact.email}\nPhone: {contact.phone}\n\nMessage:\n{contact.message}",
            #         from_email=settings.DEFAULT_FROM_EMAIL,
            #         recipient_list=[settings.EMAIL_HOST_USER],  
            #         fail_silently=False, 
            #         # Note: Django's default SMTP backend doesn't support a 'timeout' 
            #         # parameter directly in send_mail, but fail_silently=False 
            #         # combined with this try/except block will catch the timeout.
            #     )
            # except Exception as email_error:
            #     # We log the error so you can see it in Render, 
            #     # but we DON'T stop the user's success message.
            #     print(f"CRITICAL: Email failed to send, but data was saved. Error: {email_error}")

            # 3. Always return success if we reached this point
            return JsonResponse(
                {"message": "Thanks! We'll contact you within 24 hours."},
                status=201,
            )

        except Exception as e:
            import traceback
            print(traceback.format_exc()) 
            return JsonResponse({"error": "An internal server error occurred."}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)

