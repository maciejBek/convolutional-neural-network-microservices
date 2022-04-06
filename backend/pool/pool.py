from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def index():
    return "pool service"

app.run(host="0.0.0.0")