from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self):
        return self.username

class Amenity(models.Model):
    name = models.CharField(max_length=100, verbose_name="Amenity Name", help_text="Name of the amenity")
    icon = models.ImageField(upload_to='amenities/icons/', verbose_name="Amenity Icon", help_text="Icon representing the amenity")

    class Meta:
        verbose_name = "Amenity"
        verbose_name_plural = "Amenities"

    def __str__(self):
        return self.name

class Room(models.Model):
    name = models.CharField(max_length=100, verbose_name="Room Name", help_text="Name of the room")
    amenities = models.ManyToManyField(Amenity, related_name='rooms', verbose_name="Amenities", help_text="Amenities available in the room")

    class Meta:
        verbose_name = "Room"
        verbose_name_plural = "Rooms"

    def __str__(self):
        return self.name

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bookings', verbose_name="User", help_text="User who made the booking")
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='bookings', verbose_name="Room", help_text="Room that is booked")
    check_in = models.DateField(verbose_name="Check-in Date", help_text="Date of check-in")
    check_out = models.DateField(verbose_name="Check-out Date", help_text="Date of check-out")

    class Meta:
        verbose_name = "Booking"
        verbose_name_plural = "Bookings"

    def __str__(self):
        return f"{self.user.username} - {self.room.name} ({self.check_in} to {self.check_out})"
