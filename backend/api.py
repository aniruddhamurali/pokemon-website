import time
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)


with open('mongodb_creds', 'r') as file:
    username = file.readline().strip().split("=")[1]
    password = file.readline().strip().split("=")[1]

app.config['MONGO_URI'] = "mongodb+srv://{}:{}@pokemon.vujdsli.mongodb.net/test".format(username, password)
mongo = PyMongo(app)

@app.route('/time', methods=["GET"])
def get_current_time():
    return jsonify({'time': time.time()})


if __name__ == "__main__":
    app.run(debug=True)