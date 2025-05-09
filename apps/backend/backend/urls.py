from django.urls import path
from .views import RegisterView, LoginView, TokenRefreshView
from django.views.decorators.cache import cache_page

urlpatterns = [
    path('api/register/', cache_page(60 * 15)(RegisterView.as_view()), name='register'),
    path('api/login/', cache_page(60 * 15)(LoginView.as_view()), name='login'),
    path('api/token/refresh/', cache_page(60 * 15)(TokenRefreshView.as_view()), name='token_refresh'),
]
