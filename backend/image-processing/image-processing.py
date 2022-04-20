from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import datasets, layers, models
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route("/images", methods=["POST"])
#async def process_image():
def process_image():
    file = request.files['image']
    # Read the image via file.stream
    img = Image.open(file.stream)
    
    
    class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer',
               'dog', 'frog', 'horse', 'ship', 'truck']
    
    size = (32, 32)
    img = tf.image.resize(img, size)
    
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0) # Create a batch

    model = keras.models.load_model('location')

    predictions = model.predict(img_array)
    score = tf.nn.softmax(predictions[0])
    
    
    
    

    return jsonify({'object': class_names[np.argmax(score)]})

app.run(host="0.0.0.0")