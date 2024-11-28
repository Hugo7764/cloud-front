from flask import Flask
from flask_cors import CORS
from flask_mysql_connector import MySQL
from flask_jwt_extended import JWTManager

app = Flask(__name__)
CORS(app)

app.config['MYSQL_USER'] = 'zinedine'
app.config['MYSQL_PASSWORD'] = 'zidane'
app.config['MYSQL_DATABASE'] = 'messagerie'
app.config['JWT_SECRET_KEY'] = 'secret'

mysql = MySQL(app)
jwt = JWTManager(app)

if __name__ == '__main__':
    app.run(debug=True)
