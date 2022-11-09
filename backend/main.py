from flask import Flask
from flask import request
from pymongo import MongoClient
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_cors import CORS
# from flask import make_response


app = Flask(__name__)
CORS(app)
client = MongoClient('localhost',27017)
db = client.flask
product = db.product

@app.route('/add' ,methods=['POST'])
def add():
    try:
        name = request.json['name']
        prize = request.json['prize']
        quantity = request.json['quantity']
        product.insert_one({'name':name,'prize':prize,'quantity':quantity})
        print({'name':name,'prize':prize,'quantity':quantity})
        return 'added successfully'
    except Exception as e:
        print(e)
        return e

@app.route('/getall',methods=['GET'])
def getall():
    try:
        data = product.find()
        data = list(data)
        new = dumps(data)
        return new 
    except Exception as e:
        print(e)
        return e
@app.route('/get/<id>',methods=['GET'])
def get(id):
    try:
        data = product.find_one({'_id':ObjectId(id)})
        # data = list(data)
        new = dumps(data)
        return new 
    except Exception as e:
        print(e)
        return e


@app.route('/update/<id>' ,methods=['PUT'])
def update(id):
    try:
        name = request.json['name']
        prize = request.json['prize']
        quantity = request.json['quantity']
        data = product.find_one_and_update({'_id':ObjectId(id)},{'$set':{'name':name,'prize':prize,'quantity':quantity}})
        # print(dumps(list(data)))
        # print(type(id))
        return 'updated'
    except Exception as e:
        print(e)
        return e

@app.route('/search',methods=['POST'])
def search():
    try:
        products = request.json['name']
        data = product.find({'name':{'$regex':products,'$options':"i"}})
        data = list(data)
        new = dumps(data)
        return new 
    except Exception as e:
        print(e)
        return e

@app.route('/delete/<id>', methods=['DELETE'])
def delete(id):
    try:
        product.delete_one({'_id':ObjectId(id)})
        return 'deleted'
    except Exception as e:
        print(e)
        return e





