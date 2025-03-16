from flask import Blueprint
from controllers.image_controller import upload_image, get_images

image_bp = Blueprint('image_bp', __name__)

image_bp.route('/upload', methods=['POST'])(upload_image)
image_bp.route('/images', methods=['GET'])(get_images)
