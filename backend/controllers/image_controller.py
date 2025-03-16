from flask import request, jsonify
from models.image_model import Image
from config.cloudflare_config import cloudflare, BUCKET_NAME
from config.chatgpt_config import generate_image_description
from middleware.auth_middleware import token_required
from config.db_config import db

@token_required
def upload_image(user_id):
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    file_name = file.filename

    # Upload file to Cloudflare R2
    cloudflare.upload_fileobj(file, BUCKET_NAME, file_name)
    image_url = f"https://{BUCKET_NAME}.r2.cloudflarestorage.com/{file_name}"

    # AI Image Description (Optional)
    ai_description = generate_image_description(image_url)

    # Save image metadata to database
    new_image = Image(user_id=user_id, file_name=file_name, image_url=image_url, description=ai_description)
    db.session.add(new_image)
    db.session.commit()

    return jsonify({
        "message": "Image uploaded successfully",
        "url": image_url,
        "description": ai_description
    })

@token_required
def get_images(user_id):
    images = Image.query.filter_by(user_id=user_id).all()
    return jsonify([{
        "id": img.id,
        "file_name": img.file_name,
        "image_url": img.image_url,
        "description": img.description
    } for img in images])
