from django.db import models

def safe_sql(func):
    def wrapper(*args, **kwargs):
        # Implement SQL injection prevention logic here
        return func(*args, **kwargs)
    return wrapper

class Room(models.Model):
    name = models.CharField(max_length=255)
    amenities = models.ManyToManyField('Amenity', related_name='rooms')

    @safe_sql
    def get_amenities(self):
        return self.amenities.all()

class Amenity(models.Model):
    name = models.CharField(max_length=255)

    @safe_sql
    def get_rooms(self):
        return self.rooms.all()

class Booking(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='bookings')
    room = models.ForeignKey('Room', on_delete=models.CASCADE, related_name='bookings')
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()

    @safe_sql
    def get_user(self):
        return self.user

    @safe_sql
    def get_room(self):
        return self.room

class User(models.Model):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    @safe_sql
    def get_bookings(self):
        return self.bookings.all()
