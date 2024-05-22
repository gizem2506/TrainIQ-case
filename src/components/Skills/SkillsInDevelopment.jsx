import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#8dd1e1'];

const SkillsInDevelopment = () => {
  const [devskills, setDevSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [outerRadius, setOuterRadius] = useState(140);

  useEffect(() => {
    axios.get('https://demotrainiq.com/case/dashboard')
      .then(response => {
        if (Array.isArray(response.data.data.skills_in_development)) {
          setDevSkills(response.data.data.skills_in_development);
        } else {
          console.error('Unexpected response format:', response.data.data);
          setError(new Error('Unexpected response format'));
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('API error:', error);
        setError(error);
        setLoading(false);
      });

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOuterRadius(80);
      } else {
        setOuterRadius(140);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ marginBottom: '20px', color: '#333', padding: '8px' }}>Skills in Development</h3>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={devskills}
            dataKey="employees"
            nameKey="skill"
            cx="50%"
            cy="50%"
            outerRadius={outerRadius}
            fill="#8884d8"
            label
          >
            {devskills.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsInDevelopment;
