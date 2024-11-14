# Archivo: settings.py
import os
from dotenv import load_dotenv

load_dotenv()

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql', # Motor de la base de datos (postgresql, mysql, sqlite3, etc.)
        'NAME': os.getenv('DB_NAME'),              # Nombre de la base de datos
        'USER': os.getenv('DB_USER'),              # Usuario de la base de datos
        'PASSWORD': os.getenv('DB_PASSWORD'),      # Contraseña del usuario
        'HOST': os.getenv('DB_HOST'),              # Dirección del servidor de la base de datos (localhost para desarrollo)
        'PORT': os.getenv('DB_PORT'),              # Puerto de la base de datos (5432 es el puerto por defecto de PostgreSQL)
    }
}