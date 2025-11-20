from django.urls import path
from .views import current_user

urlpatterns = [
    path("auth/me/", current_user),  # GET current user info
]
