from django.urls import path
from .views import RegisterView, LoginView, TokenRefreshView, RoomListCreateView, RoomDetailView

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/login/', LoginView.as_view(), name='login'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/rooms/', RoomListCreateView.as_view(), name='room-list-create'),
    path('api/rooms/<int:pk>/', RoomDetailView.as_view(), name='room-detail'),
]
