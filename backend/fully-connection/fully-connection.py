from flask import Flask
import os

app = Flask(__name__)

@app.route("/")
def index():
    return "fully-connection service"

app.run(host="0.0.0.0")