from rest_framework import serializers
from .models import Room, Amenity

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name', 'amenities']

class RoomDetailSerializer(serializers.ModelSerializer):
    amenities = serializers.StringRelatedField(many=True)

    class Meta:
        model = Room
        fields = ['id', 'name', 'amenities']
