from app import create_app, db
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

print("DATABASE_URL:", os.getenv("DATABASE_URL"))

app = create_app()

# Migration setup
migrate = Migrate(app, db)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)

