from django.urls import path
from .views import (
    SignupView, LoginView, CurrentUserView,
    RequestListCreateView, RequestDetailView,
    ApproveRequestView, RejectRequestView
)

urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
    path("me/", CurrentUserView.as_view(), name="current_user"),
    path("requests/", RequestListCreateView.as_view(), name="request_list_create"),
    path("requests/<int:pk>/", RequestDetailView.as_view(), name="request_detail"),
    path("requests/<int:pk>/approve/", ApproveRequestView.as_view(), name="request_approve"),
    path("requests/<int:pk>/reject/", RejectRequestView.as_view(), name="request_reject"),
]
