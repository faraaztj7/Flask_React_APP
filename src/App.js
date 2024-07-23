import React from 'react';
import './App.css';
import EmployeeTable from './EmployeeTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Management Details</h1>
      </header>
      <main>
        <EmployeeTable />
      </main>
    </div>
  );
}

export default App;
