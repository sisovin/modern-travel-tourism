@echo off

REM Apply database migrations
python manage.py migrate

REM Start the Django development server
python manage.py runserver
