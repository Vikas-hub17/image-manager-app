from app import create_app, db
from flask_migrate import Migrate
import os

print("DATABASE_URL:", os.getenv("DATABASE_URL"))

app = create_app()

# Migration setup
migrate = Migrate(app, db)

if __name__ == "__main__":
    app.run(debug=True)
