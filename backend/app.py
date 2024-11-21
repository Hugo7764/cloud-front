from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db)
CORS(app)

# Importer et enregistrer les routes
from routes.auth import auth
app.register_blueprint(auth, url_prefix='/api/auth')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
