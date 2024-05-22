import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { AssignmentInd as AssignmentIndIcon, Description as DescriptionIcon, Event as EventIcon, CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import { SubLayout } from '../../layouts/SubLayout';
import SubtitlesIcon from '@mui/icons-material/Subtitles';


export const InProgressCourses = () => {
    const [incourses, setIncourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://demotrainiq.com/case/dashboard')
            .then(response => {
                if (Array.isArray(response.data.data.in_progress_courses)) {
                    setIncourses(response.data.data.in_progress_courses);
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
        <SubLayout>
            <Typography fontWeight="bold" id="modal-modal-title" variant="h6" component="h2">
                InProgress Courses
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '20px',
                    marginTop: 4,
                }}
            >
                {incourses.map((course, index) => (
                    <Card
                        key={course.name}
                        sx={{
                            backgroundColor:"#2b3e3d",
                            color: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        <CardContent>
                            <Box sx={{ display: 'flex',  gap: '5px', marginBottom: '10px' }}>
                                <AssignmentIndIcon sx={{ fontSize: 24 }} />
                                <Typography variant="body2"  component="p">
                                    {course.assigned_to}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex',  gap: '5px', marginBottom: '10px' }}>
                                <SubtitlesIcon sx={{ fontSize: 18 }} />
                                <Typography variant="body2" component="p">
                                    {course.title}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                                <DescriptionIcon sx={{ fontSize: 18 }} />
                                <Typography variant="body2" component="p">
                                    {course.description}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex',  gap: '5px', marginBottom: '10px' }}>
                                <EventIcon sx={{ fontSize: 18 }} />
                                <Typography variant="body2" component="p">
                                    {course.due_date}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: '5px' }}>
                                <CheckCircleOutlineIcon sx={{ fontSize: 18 }} />
                                <Typography variant="body2" component="p">
                                    {course.status}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </SubLayout>
    );
};
