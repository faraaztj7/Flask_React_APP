import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/employees'); // Replace with your API endpoint
        setEmployees(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Employee Data</h1>
      {employees.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Employee Number</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Extension</th>
              <th>Email</th>
              <th>Office Code</th>
              <th>Job Title</th>
              <th>City</th>
              <th>Phone</th>
              <th>Reports To</th>
              <th>Report To Last Name</th>
              <th>Report To First Name</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeNumber}>
                <td>{employee.employeeNumber}</td>
                <td>{employee.lastName}</td>
                <td>{employee.firstName}</td>
                <td>{employee.extension}</td>
                <td>{employee.email}</td>
                <td>{employee.officeCode}</td>
                <td>{employee.jobTitle}</td>
                <td>{employee.city}</td>
                <td>{employee.phone}</td>
                <td>{employee.reportsTo}</td>
                <td>{employee.reportToLastName}</td>
                <td>{employee.reportToFirstName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;