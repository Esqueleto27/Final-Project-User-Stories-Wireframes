from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)
    # Relación: Un usuario puede tener muchas mascotas
    pets = db.relationship('Pet', backref='owner', lazy=True)

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    photo_url = db.Column(db.String(250))
    contact_phone = db.Column(db.String(20), nullable=False)
    medical_info = db.Column(db.Text)
    description = db.Column(db.Text)
    # El "hilo" que une la mascota con su dueño
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)