# ⚙️ Pet QR Platform Backend

Backend API for the Pet QR Identification Platform.

This server handles authentication, pet management, database operations, cloud integrations, and QR generation for the application.

Built with Flask following a modular REST API architecture.

---

# 🚀 Features

- JWT Authentication
- User Registration & Login
- Pet CRUD Operations
- SQL Database Integration
- Cloudinary Image Upload Support
- QR Code Generation
- REST API Structure
- Protected Routes

---

# 🛠️ Tech Stack

- Flask
- Flask-JWT-Extended
- Flask-SQLAlchemy
- Flask-Migrate
- MySQL / SQL
- Python

---

# 📂 Backend Structure

```bash
backend/
│
├── app/
│   ├── routes/
│   ├── models/
│   ├── utils/
│   ├── config/
│   └── extensions/
│
├── migrations/
├── requirements.txt
└── run.py
```
# 🐾 Mascota Segura - Backend API

Bienvenido al repositorio del Backend de **Mascota Segura**. Este servidor gestiona la seguridad, los usuarios y la base de datos relacional de nuestra aplicación.

## 👥 Equipo
* **Rafael:** Arquitecto de Seguridad e Infraestructura.
* **Gabriel:** Desarrollador Backend (CRUD y Lógica).
* **Moisés & Matheo:** Desarrolladores Frontend (React).

---

## 🛠️ Tecnologías utilizadas
* **Python 3.x** con **Pipenv** (Gestión de entornos).
* **Flask:** Micro-framework de servidor.
* **SQLAlchemy:** ORM para la base de datos (SQLite).
* **JWT (JSON Web Tokens):** Para autenticación segura.
* **Bcrypt:** Para encriptación de contraseñas.

---

## 🚀 Instalación para el equipo

Sigue estos pasos para tener el servidor corriendo en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd backend
