from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysql_connector import MySQL
import threading

app = Flask(__name__)
CORS(app)

app.config['MYSQL_USER'] = 'zinedine'
app.config['MYSQL_PASSWORD'] = 'zidane'
app.config['MYSQL_DATABASE'] = 'messagerie'

mysql = MySQL(app)

messages = []

@app.route('/messages', methods=['GET'])
def get_messages():
    user1 = request.args.get('user1')
    user2 = request.args.get('user2')

    chat_messages = [
        msg for msg in messages
        if (msg['sender'] == user1 and msg['recipient'] == user2) or
           (msg['sender'] == user2 and msg['recipient'] == user1)
    ]
    return jsonify(chat_messages)

@app.route('/send-message', methods=['POST'])
def send_message():
    data = request.json
    sender = data['sender']
    recipient = data['recipient']
    text = data['text']

    messages.append({
        'sender': sender,
        'recipient': recipient,
        'text': text
    })

    return jsonify({'status': 'Message sent'})


if __name__ == '__main__':
    app.run(debug=True)
