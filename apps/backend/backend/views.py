from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from .authentication import generate_jwt_token, verify_jwt_token, refresh_jwt_token
import logging

from rest_framework import generics, filters
from rest_framework.pagination import PageNumberPagination

logger = logging.getLogger(__name__)

@method_decorator(csrf_exempt, name='dispatch')
class RegisterView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            username = data['username']
            password = data['password']
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Username already exists'}, status=400)
            user = User.objects.create_user(username=username, password=password)
            token = generate_jwt_token(user)
            return JsonResponse({'token': token}, status=201)
        except Exception as e:
            logger.error(f"Error during registration: {str(e)}")
            return JsonResponse({'error': 'Registration failed'}, status=500)

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            username = data['username']
            password = data['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                token = generate_jwt_token(user)
                return JsonResponse({'token': token}, status=200)
            else:
                return JsonResponse({'error': 'Invalid credentials'}, status=400)
        except Exception as e:
            logger.error(f"Error during login: {str(e)}")
            return JsonResponse({'error': 'Login failed'}, status=500)

@method_decorator(csrf_exempt, name='dispatch')
class TokenRefreshView(View):
    def post(self, request):
        try:
            data = json.loads(request.body)
            token = data['token']
            new_token = refresh_jwt_token(token)
            if new_token:
                return JsonResponse({'token': new_token}, status=200)
            else:
                return JsonResponse({'error': 'Invalid token'}, status=400)
        except Exception as e:
            logger.error(f"Error during token refresh: {str(e)}")
            return JsonResponse({'error': 'Token refresh failed'}, status=500)
