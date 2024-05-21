import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    axios.get('https://demotrainiq.com/case/dashboard')
      .then(response => {
        console.log('API response:', response.data);
        setTeams(response.data.data.teams);
        setLoading(false);
      })
      .catch(error => {
        console.error('API error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  const renderStars = (score) => {
    const maxStars = 5; 
    const filledStars = Math.floor((score / 5) * maxStars); 
    const remainderPercentage = (score / 5) * maxStars - filledStars; 
    
    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} style={{ color: 'gold' }}>★</span>);
    }
    if (remainderPercentage > 0 && filledStars < maxStars) {
      stars.push(<span key={filledStars} style={{ color: 'gold', width: `${remainderPercentage * 16}px`, overflow: 'hidden' }}>★</span>);
    }
    for (let i = filledStars + 1; i < maxStars; i++) {
      stars.push(<span key={i} style={{ color: 'grey' }}>☆</span>);
    }
  
    return (
      <span>
        {stars}
      </span>
    );
  };

  return (
    <div className="teams-container">
      {teams.map((team, index) => (
        <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} className="accordion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{team.title}</Typography>
            <Typography>{renderStars(team.overall_score)}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ overflowY: 'auto', maxHeight: '300px' }}>
            <div>
              <Typography><strong>Description:</strong> {team.description}</Typography>
              <Typography><strong>Total Employee Count:</strong> {team.total_employee_count}</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Name</strong></TableCell>
                    <TableCell><strong>Email</strong></TableCell>
                    <TableCell><strong>Title</strong></TableCell>
                    <TableCell><strong>Current Score</strong></TableCell>
                    <TableCell><strong>Lessons Taken</strong></TableCell>
                    <TableCell><strong>Skills Being Developed</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {team.employees.map(employee => (
                    <TableRow key={employee.email}>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.title}</TableCell>
                      <TableCell>{employee.current_score}</TableCell>
                      <TableCell>{employee.lessons_taken}</TableCell>
                      <TableCell>{employee.skills_being_developed.join(', ')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Teams;
