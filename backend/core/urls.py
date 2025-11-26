from django.urls import path
from .views import (
    SignupView, LoginView, CurrentUserView,
    RequestListCreateView, RequestDetailView,
    ApproveRequestView, RejectRequestView,
    FilteredRequestListView,
    UploadReceiptView,
    UploadReceiptView
)


urlpatterns = [
    path("user/auth/signup/", SignupView.as_view(), name="signup"),
    path("user/auth/login/", LoginView.as_view(), name="login"),
    path("user/auth/me/", CurrentUserView.as_view(), name="current_user"),
    path("requests/", RequestListCreateView.as_view(), name="create_request"),      
    path("requests/", RequestListCreateView.as_view(), name="list_requests"),         
    path("requests/<int:pk>/", RequestDetailView.as_view(), name="view_request"),   
    path("requests/<int:pk>/", RequestDetailView.as_view(), name="update_request"),   
    path("requests/<int:pk>/approve/", ApproveRequestView.as_view(), name="approve_request"),  
    path("requests/<int:pk>/reject/", RejectRequestView.as_view(), name="reject_request"),     
    path("requests/<int:pk>/submit-receipt/", UploadReceiptView.as_view(), name="submit_receipt"),
    path("requests/filtered/", FilteredRequestListView.as_view(), name="request_filtered"),
]
