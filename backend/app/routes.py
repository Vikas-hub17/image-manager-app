from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app.models import db, User
from app.cloudflare import upload_image
from app.validators import validate_user_data

routes = Blueprint("routes", __name__)

# Register Route
@routes.route('/register', methods=['POST'])
def register():
    data = request.json
    validation_error = validate_user_data(data)
    if validation_error:
        return validation_error

    hashed_password = generate_password_hash(data['password'])
    new_user = User(name=data['name'], email=data['email'], password=hashed_password)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

# Login Route
@routes.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()

    if not user or not check_password_hash(user.password, data['password']):
        return jsonify({"error": "Invalid credentials"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"access_token": access_token}), 200

# Profile Image Upload
@routes.route('/upload-image', methods=['POST'])
@jwt_required()
def upload_profile_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    image_file = request.files['image']
    image_url = upload_image(image_file)

    current_user_id = get_jwt_identity()
    user = User.query.get(current_user_id)
    user.profile_image = image_url

    db.session.commit()

    return jsonify({"message": "Image uploaded successfully", "image_url": image_url})
