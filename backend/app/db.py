import mysql.connector
from logger import logger  # Import logger from the root logger.py file

# Database connection
def get_database_connection():
    logger.info("Connecting to database...")
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="fsit_sales_database"
        )
        logger.info("Connected to database successfully.")
        return conn
    except mysql.connector.Error as err:
        logger.error("Database connection error: %s - %s", err, __file__)
        raise

# Query function
def get_employee_data():
    conn = get_database_connection()
    cursor = conn.cursor(dictionary=True)
    
    query = """
    SELECT 
        e.employeeNumber, e.lastName, e.firstName, e.extension, e.email, e.officeCode, 
        e.jobTitle, o.city, o.phone, e.reportsTo, 
        r.lastName AS reportToLastName, r.firstName AS reportToFirstName 
    FROM 
        employees e
    LEFT JOIN 
        offices o ON e.officeCode = o.officeCode
    LEFT JOIN 
        employees r ON e.reportsTo = r.employeeNumber
    """
    
    logger.info("Executing query: %s", query)
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        logger.info("Query executed successfully.")
        return result
    except mysql.connector.Error as err:
        logger.error("Error executing query: %s - %s", err, __file__)
        raise
    finally:
        cursor.close()
        conn.close()
        logger.info("Database connection closed.")
