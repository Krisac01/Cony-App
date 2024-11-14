# database/db_connection.py

from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

def get_database():
    # Obtener detalles de conexión desde variables de entorno
    MONGO_HOST = os.getenv('MONGO_HOST', 'localhost')
    MONGO_PORT = int(os.getenv('MONGO_PORT', 27017))
    MONGO_USER = os.getenv('MONGO_USER')
    MONGO_PASSWORD = os.getenv('MONGO_PASSWORD')
    MONGO_DB_NAME = os.getenv('MONGO_DB_NAME', 'my_database')

    # Construir URI de conexión
    if MONGO_USER and MONGO_PASSWORD:
        mongo_uri = f"mongodb://{MONGO_USER}:{MONGO_PASSWORD}@{MONGO_HOST}:{MONGO_PORT}/{MONGO_DB_NAME}"
    else:
        mongo_uri = f"mongodb://{MONGO_HOST}:{MONGO_PORT}/{MONGO_DB_NAME}"

    # Crear instancia de MongoClient
    client = MongoClient(mongo_uri)
    # Seleccionar la base de datos
    db = client[MONGO_DB_NAME]
    return db
