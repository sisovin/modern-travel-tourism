import jwt
import logging
from datetime import datetime, timedelta
from django.conf import settings
from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import Argon2PasswordHasher
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

logger = logging.getLogger(__name__)

# JWT token generation
def generate_jwt_token(user):
    payload = {
        'user_id': user.id,
        'exp': datetime.utcnow() + timedelta(minutes=5),
        'iat': datetime.utcnow()
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token

# JWT token verification
def verify_jwt_token(token):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        return payload['user_id']
    except jwt.ExpiredSignatureError:
        logger.error("Token has expired")
        return None
    except jwt.InvalidTokenError:
        logger.error("Invalid token")
        return None

# Argon2 password hashing
class Argon2Hasher(Argon2PasswordHasher):
    def encode(self, password, salt):
        return super().encode(password, salt)

    def verify(self, password, encoded):
        return super().verify(password, encoded)

# Custom user authentication backend
class CustomBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None):
        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                return user
        except ObjectDoesNotExist:
            logger.error("User does not exist")
            return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except ObjectDoesNotExist:
            logger.error("User does not exist")
            return None

# Token refresh logic
def refresh_jwt_token(token):
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'], options={'verify_exp': False})
        payload['exp'] = datetime.utcnow() + timedelta(days=1)
        new_token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
        return new_token
    except jwt.InvalidTokenError:
        logger.error("Invalid token")
        return None
