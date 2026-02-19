from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

from .models import Contact

@csrf_exempt
def contact_submit(request):

    if request.method == "POST":

        data = json.loads(request.body)

        Contact.objects.create(
            name=data.get("name"),
            email=data.get("email"),
            phone=data.get("phone"),
            message=data.get("message"),
        )

        return JsonResponse(
            {"message": "Form submitted successfully"},
            status=201
        )

    return JsonResponse({"error": "Invalid request"}, status=400)

