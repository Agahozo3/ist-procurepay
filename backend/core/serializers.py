from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Request

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, min_length=6)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'role']
        read_only_fields = ['id']

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create_user(**{**validated_data, 'password': password})
        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.EmailField()
    password = serializers.CharField(write_only=True)

class RequestSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.email')  # or username

    class Meta:
        model = Request
        fields = ['id', 'title', 'description', 'amount', 'status', 'created_by', 'created_at']
        read_only_fields = ['id', 'status', 'created_by', 'created_at']
