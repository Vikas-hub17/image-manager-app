from flask import Flask
from routes.auth_routes import auth_bp
from routes.image_routes import image_bp
from config.db_config import db
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('POSTGRES_URI')
db.init_app(app)

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(image_bp, url_prefix='/api/images')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create tables
    app.run(debug=True, port=5000)
