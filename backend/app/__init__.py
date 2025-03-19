from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS  # Import CORS

db = SQLAlchemy()

@app.route("/")
def home():
    return "Welcome to the Image Management App!"

@app.route("/api/login", methods=["POST"])
def login():
    return {"message": "Login endpoint is working!"}

def create_app():
    app = Flask(__name__)
    
    # Database Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://vikas:admin@localhost:5432/image_management'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # Enable CORS for all routes
    CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

    # Register blueprints
    from app.routes.auth import auth_bp
    app.register_blueprint(auth_bp)

    return app
