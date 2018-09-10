from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app, resources={r'/rest/*': {'origins': '*'}})
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['Access-Control-Allow-Origin'] = '*'

@app.route("/")
def hello():
    return json.dumps({'result': "Hello World!"})



@app.route("/rest/settings", methods=['POST', 'OPTIONS'])
def settings():
    print("request: " + request.method)
    print( request)
    response = jsonify({'result': "Hello Settings!"})
    return response
