#!/bin/bash

# Apply database migrations
python manage.py migrate

# Start the Redis server
redis-server &

# Start the Django development server
python manage.py runserver
