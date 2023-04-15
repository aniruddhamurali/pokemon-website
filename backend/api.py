import time
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/time', methods=["GET"])
def get_current_time():
    return jsonify({'time': time.time()})


if __name__ == "__main__":
    app.run(debug=True)