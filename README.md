# 🐾 Pet QR Identification Platform

A full-stack web application that allows pet owners to create smart QR identification profiles for their pets.

Each pet receives a unique QR code that can be attached to a collar or tag. When someone scans the QR code, they are redirected to a public recovery profile containing important pet information and emergency contact details.

The platform includes secure authentication, pet management CRUD operations, cloud image uploads, QR code generation, and global state management.

## Main Features

- User authentication with JWT
- Pet profile creation and management
- Cloudinary image uploads
- QR code generation
- Public pet recovery pages
- Responsive dashboard interface

## Tech Stack

### Frontend

- React
- Bootstrap
- Context API / Flux

### Backend

- Flask
- SQLAlchemy
- JWT Authentication
- REST API

### Integrations

- Cloudinary
- QR Code API

## Team Structure

- Rafael → Authentication & Security
- Gabriel → CRUD & Database
- Moises → Integrations & QR System
- Matheo → UI/UX & Global State Management
