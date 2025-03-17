from flask import Flask
from flask_jwt_extended import JWTManager
from app.config import db, SECRET_KEY
from app.routes import routes
from app.error_handler import register_error_handlers
from app.logger import setup_logger
from app.rate_limiter import configure_rate_limiter

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['JWT_SECRET_KEY'] = SECRET_KEY

    db.init_app(app)
    JWTManager(app)

    register_error_handlers(app)
    setup_logger()
    configure_rate_limiter(app)

    app.register_blueprint(routes)

    return app
