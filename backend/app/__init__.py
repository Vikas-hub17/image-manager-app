from flask import Flask
from app.auth import auth_bp
from app.image_routes import image_bp

def create_app():
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(image_bp, url_prefix='/images')

    return app
