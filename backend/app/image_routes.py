from flask import Blueprint, request, jsonify
from cloudflare_utils import upload_image, get_image_url

image_bp = Blueprint('image_bp', __name__)

@image_bp.route('/upload', methods=['POST'])
def upload():
    """Upload Image Endpoint"""
    file = request.files.get('image')
    if not file:
        return jsonify({"error": "No file uploaded"}), 400

    file_name = file.filename
    image_url = upload_image(file, file_name)

    return jsonify({
        "message": "Image uploaded successfully",
        "url": image_url
    })

@image_bp.route('/image/<file_name>', methods=['GET'])
def get_image(file_name):
    """Retrieve Image URL Endpoint"""
    return jsonify({"url": get_image_url(file_name)})
