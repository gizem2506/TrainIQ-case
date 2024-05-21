import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, CardContent, Typography } from '@mui/material';

const DashboardStatistics = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        axios.get('https://demotrainiq.com/case/dashboard')
            .then(response => {
                const { total_completed_courses, total_employees, average_employee_score } = response.data.data;
                setDashboardData({ totalCompletedCourses: total_completed_courses, totalEmployees: total_employees, averageEmployeeScore: average_employee_score });
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
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', marginRight: '20px' }}>

            <Box sx={{
                width: '100%', backgroundColor: "white", borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <CardContent>
                    <Typography sx={{ color: "black", fontWeight: "bold" }} >
                        Total Completed Courses
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }} >
                        {dashboardData.totalCompletedCourses}
                    </Typography>

                </CardContent>
            </Box>
            <Box sx={{
                width: '100%', backgroundColor: "white", borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <CardContent>
                    <Typography sx={{ color: "black", fontWeight: "bold" }} >
                        Average Employee Score
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }} >
                        {dashboardData.averageEmployeeScore}
                    </Typography>

                </CardContent>
            </Box>
            <Box sx={{
                width: '100%', backgroundColor: "white", borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                <CardContent>
                    <Typography sx={{ color: "black", fontWeight: "bold" }} >
                        Total Employees
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }} >
                        {dashboardData.totalEmployees}
                    </Typography>

                </CardContent>
            </Box>

        </Box>
    );
};

export default DashboardStatistics;
