# app.py
from flask import Flask, jsonify
app = Flask(__name__)

@app.route("/api/hello")
def hello():
    return jsonify(message="Hello from Flask!")

if __name__ == "__main__":
    # listen on 0.0.0.0 so it’s reachable from your Vue dev server/container
    app.run(host="0.0.0.0", port=5000)
