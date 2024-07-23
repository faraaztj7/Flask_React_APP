# Overview
This project is an Employee Management Application built with React on the frontend and Flask (Python) on the backend. It allows users to view employee data fetched from a database via RESTful API calls.

# Features
Displays a table of employee data including employee number, last name, first name, extension, email, office code, job title, city, phone, and reporting details.
Supports fetching data from an API endpoint from Flask (/api/employees).
Uses Axios for making HTTP requests.
Implements basic styling using Bootstrap for responsive design.

# Technologies Used: 
Frontend -  1. React
            2. Axios
            3. Bootstrap

Backend -   1. Flask (Python)
            2. Flask-CORS (for cross-origin resource sharing)
            3. MySQL (Localhost)

# Installation
## Prerequisites
    1. Node.js
    2. Python, Flask
    3. MySQL (Localhost)

# Setup
## Manual Steps for running Backend and Frontend Seperately:

# Backend:
1. Navigate to the `backend` directory: `cd backend`
2. Install dependencies: `pip install -r requirements.txt`
3. Start the Flask server: `python run.py`

# Frontend:
1. Navigate to the `employee-app` directory: `cd employee-app`
2. Install dependencies: `npm install`
3. Start the React development server: `npm start`
4. Open http://localhost:3000 in your browser to view the application.

## Steps to run both Backend and Frontend simultaneously:
1. Navigate to the `employee-app` directory: `cd employee-app`
2. Install all the dependencies for as mentioned above.
3. Start the Flask and React development server concurrently: `npm run start-all`
4. Open http://localhost:3000 in your browser to view the application or it will open automatically.

# USAGE
1. The application will display a table of employee data fetched from the backend API.
2. If no data is available from the database, a message indicating "No data available" will be displayed.
