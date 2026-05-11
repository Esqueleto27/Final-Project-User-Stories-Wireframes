import os
from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from models import db, User, Pet

app = Flask(__name__)

# Configuración de la base de datos (Use SQLite por ahora)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.ensure_ascii = False 

db.init_app(app)
migrate = Migrate(app, db)
CORS(app)

@app.route('/')
def home():
    return jsonify({"msg": "¡Servidor de Mascotas encendido jijijaja!"}), 200

# --- RUTA PARA CREAR USUARIO ---
@app.route('/user', methods=['POST'])
def create_user():
    body = request.get_json()
    if not body or "email" not in body or "password" not in body:
        return jsonify({"msg": "Email y password son obligatorios"}), 400
    
    new_user = User(email=body['email'], password=body['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"msg": "Usuario creado con éxito"}), 201

# --- RUTA PARA REGISTRAR MASCOTA ---
@app.route('/pet', methods=['POST'])
def create_pet():
    body = request.get_json()
    
    # Validamos datos mínimos
    if not body.get("name") or not body.get("user_id"):
        return jsonify({"msg": "Nombre y ID de dueño son obligatorios"}), 400

    new_pet = Pet(
        name=body['name'],
        contact_phone=body.get('contact_phone', ""),
        medical_info=body.get('medical_info', ""),
        description=body.get('description', ""),
        photo_url=body.get('photo_url', "https://via.placeholder.com/150"),
        user_id=body['user_id']
    )
    
    db.session.add(new_pet)
    db.session.commit()
    return jsonify({"msg": f"Mascota {new_pet.name} registrada con éxito"}), 201

# --- RUTA PARA VER TODAS LAS MASCOTAS ---
@app.route('/pets', methods=['GET'])
def get_all_pets():
    all_pets = Pet.query.all()
    results = [
        {
            "id": p.id, 
            "name": p.name, 
            "phone": p.contact_phone, 
            "description": p.description
        } for p in all_pets
    ]
    return jsonify(results), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)