from django.urls import path
from .views import contact_submit, health;

urlpatterns = [
    path("submit/", contact_submit),
    path("health/", health),
]
