from flask import Flask, request, render_template, jsonify
import json
import datetime
from flask_cors import CORS, cross_origin
import mysql.connector
import sys

app = Flask(__name__)
# CORS(app)
CORS(app, supports_credentials=True)


@app.route('/query_result', methods=['POST'])
def query_result():
    # print("a")
    post_data = request.get_json()
    Reporter = post_data.get('Reporter')
    Mail = post_data.get('Mail')
    Person = post_data.get('Person')
    Date = post_data.get('Date')
    Type = post_data.get('Type')
    Content = post_data.get('Content')
    message = {'status': 'Success'}
    print(Reporter, Mail, Person, Date, Type, Content)
    

    return jsonify(message)


# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True, port=8000)