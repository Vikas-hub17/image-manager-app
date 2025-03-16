from flask import request, jsonify
from models.user_model import User
from config.db_config import db
import bcrypt
import jwt
import os
from datetime import datetime, timedelta

SECRET_KEY = os.getenv('JWT_SECRET')

def register():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = bcrypt.hashpw(data.get('password').encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

    if User.query.filter_by(email=email).first():
        return jsonify({"error": "User already exists"}), 400

    new_user = User(name=name, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password').encode('utf-8')

    user = User.query.filter_by(email=email).first()
    if not user or not bcrypt.checkpw(password, user.password.encode('utf-8')):
        return jsonify({"error": "Invalid credentials"}), 401

    token = jwt.encode(
        {"id": user.id, "exp": datetime.utcnow() + timedelta(hours=1)},
        SECRET_KEY,
        algorithm="HS256"
    )
    return jsonify({"message": "Login successful", "token": token})
