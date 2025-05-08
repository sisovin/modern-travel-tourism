import os
import sys
import django
from django.core.management import execute_from_command_line

def runserver():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    django.setup()
    execute_from_command_line(['manage.py', 'runserver'])

def migrate():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
    django.setup()
    execute_from_command_line(['manage.py', 'migrate'])

if __name__ == '__main__':
    if len(sys.argv) > 1 and sys.argv[1] == 'migrate':
        migrate()
    else:
        runserver()
