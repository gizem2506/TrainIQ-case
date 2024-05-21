import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
 const ActivityHours = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://demotrainiq.com/case/dashboard')
      .then(response => {
        if (Array.isArray(response.data.data.activity_hours)) {
          setData(response.data.data.activity_hours);
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{marginTop:20, backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ marginBottom: '20px', color: '#333' }}>Activity Hours</h3>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fill: '#555' }} />
          <YAxis tick={{ fill: '#555' }} />
          <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', color: '#333' }} />
          <Legend />
          <Bar dataKey="hours" fill="#3f51b5" name="Hours" />
          <Bar dataKey="lessons_taken" fill="#4caf50" name="Lessons Taken" />
          <Bar dataKey="exams_completed" fill="#ff9800" name="Exams Completed" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityHours;