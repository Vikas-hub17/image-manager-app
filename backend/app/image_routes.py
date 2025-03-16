from flask import Blueprint, request, jsonify
from .cloudflare_utils import upload_image, list_images

image_bp = Blueprint('image_bp', __name__)

@image_bp.route('/upload', methods=['POST'])
def upload():
    file = request.files.get('image')
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    file_name = file.filename
    image_url = upload_image(file, file_name)

    return jsonify({
        "message": "Image uploaded successfully",
        "url": image_url
    })

@image_bp.route('/list', methods=['GET'])
def list_all():
    images = list_images()
    return jsonify({"images": images})
