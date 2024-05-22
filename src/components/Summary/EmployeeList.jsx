import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { FaUser, FaEnvelope, FaBriefcase, FaStar } from 'react-icons/fa';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://demotrainiq.com/case/dashboard')
      .then(response => {
        setEmployees(response.data.data.top_employees);
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  return (
    <div>
      <h3 className="employee-list-title">Top Employees</h3>
      <div className="employee-cards">
        {employees.map((employee, index) => (
          <div key={index} className="employee-card">
            <Card>
              <CardBody>
                <CardText>
                  <div className="employee-info">
                    <div className="info-label"><FaUser /></div>
                    <div className="info-value">{employee.name}</div>
                  </div>
                  <div className="employee-info">
                    <div className="info-label"><FaEnvelope /></div>
                    <div className="info-value">{employee.email}</div>
                  </div>
                  <div className="employee-info">
                    <div className="info-label"><FaBriefcase /></div>
                    <div className="info-value">{employee.title}</div>
                  </div>
                  <div className="employee-info">
                    <div className="info-label"><FaStar /></div>
                    <div className="info-value">{employee.current_score}</div>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
