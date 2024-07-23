from flask import Flask, jsonify
from app.db import get_employee_data
from logger import logger
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

#route
@app.route('/api/employees', methods=['GET'])
def employees():
    try:
        employee_data = get_employee_data()
        logger.info("Retrieved employee data successfully.")
        #to output in specified order   
        response = json.dumps({"data": employee_data}, default=str)
        return app.response_class(response, mimetype='application/json')
    except Exception as e:
        logger.error("Error retrieving employee data: %s - %s", e, __file__)
        return jsonify({"error": "An error occurred while retrieving employee data."}), 500