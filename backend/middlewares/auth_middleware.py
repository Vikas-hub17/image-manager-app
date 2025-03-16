from flask import request, jsonify
import jwt
import os

SECRET_KEY = os.getenv('JWT_SECRET')

def token_required(f):
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return jsonify({"error": "Unauthorized"}), 401

        try:
            data = jwt.decode(token.split()[1], SECRET_KEY, algorithms=["HS256"])
            user_id = data['id']
        except:
            return jsonify({"error": "Invalid token"}), 401

        return f(user_id, *args, **kwargs)
    return decorated
