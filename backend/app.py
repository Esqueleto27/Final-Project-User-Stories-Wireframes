import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app) 

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# --- MODELOS DE BASE DE DATOS ---

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    is_active = db.Column(db.Boolean(), default=True)
    
    pets = db.relationship('Pet', backref='owner', lazy=True)

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    breed = db.Column(db.String(100))
    clinical_info = db.Column(db.Text)
    photo_url = db.Column(db.String(255))
    qr_code_url = db.Column(db.String(255))
    
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "breed": self.breed,
            "clinical_info": self.clinical_info,
            "photo_url": self.photo_url,
            "qr_code_url": self.qr_code_url,
            "owner_id": self.owner_id
        }

with app.app_context():
    db.create_all()

@app.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    email = body.get('email')
    password = body.get('password')

    user_exists = User.query.filter_by(email=email).first()
    if user_exists:
        return jsonify({"msg": "Ese email ya está registrado"}), 400
    
    if not email or not password:
        return jsonify({"msg": "El email y la contraseña son obligatorios"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "Usuario creado exitosamente"}), 201

@app.route('/login', methods=['POST'])
def login():
   
    body = request.get_json()
    email = body.get('email')
    password = body.get('password')

    if not email or not password:
        return jsonify({"msg": "Faltan el email o la contraseña"}), 400

    user = User.query.filter_by(email=email).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"msg": "Email o contraseña incorrectos"}), 401

    access_token = create_access_token(identity=str(user.id))

    return jsonify({"access_token": access_token}), 200

@app.route('/')
def home():
    return jsonify({"msg": "Servidor de Mascota Activo"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3001, debug=True)

