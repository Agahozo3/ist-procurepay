from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from rest_framework.authtoken.models import Token
from .models import User, Request  # your models
from .serializers import UserSerializer, RequestSerializer  # your serializers


# ------------------------
# User Signup
# ------------------------
class SignupView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "user": UserSerializer(user).data,
                "token": token.key
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ------------------------
# User Login
# ------------------------
class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "user": UserSerializer(user).data,
                "token": token.key
            })
        return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


# ------------------------
# Get Current User
# ------------------------
class CurrentUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


# ------------------------
# Requests List / Create
# ------------------------
class RequestListCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        requests = Request.objects.all()
        serializer = RequestSerializer(requests, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = RequestSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(created_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ------------------------
# Request Detail
# ------------------------
class RequestDetailView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, pk):
        try:
            return Request.objects.get(pk=pk)
        except Request.DoesNotExist:
            return None

    def get(self, request, pk):
        request_obj = self.get_object(pk)
        if request_obj:
            serializer = RequestSerializer(request_obj)
            return Response(serializer.data)
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        request_obj = self.get_object(pk)
        if request_obj:
            serializer = RequestSerializer(request_obj, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save(created_by=request.user)
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)


# ------------------------
# Approve / Reject Request
# ------------------------
class ApproveRequestView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        request_obj = Request.objects.filter(pk=pk).first()
        if request_obj:
            request_obj.status = "approved"
            request_obj.save()
            serializer = RequestSerializer(request_obj)
            return Response(serializer.data)
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)


class RejectRequestView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        request_obj = Request.objects.filter(pk=pk).first()
        if request_obj:
            request_obj.status = "rejected"
            request_obj.save()
            serializer = RequestSerializer(request_obj)
            return Response(serializer.data)
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)
