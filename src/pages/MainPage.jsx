import React from 'react';
import { SubLayout } from '../layouts/SubLayout';
import ActivityHours from '../components/Summary/ActivityHours';
import DashboardStatistics from '../components/Summary/DashboardStatistics';
import EmployeeList from '../components/Summary/EmployeeList';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const MainPage = () => {
  return (
    <SubLayout>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '20px',
          flexDirection: { xs: 'column', sm: 'row' }, 
          alignItems: { xs: 'stretch', sm: 'center' } 
        }}
      >
        <Button 
          variant="contained" 
          startIcon={<AddIcon />} 
          sx={{ mb: { xs: 2, sm: 0 },  backgroundColor:"#2b3e3d"}} 
        >
          Create New Team
        </Button>
        
        <Button 
          variant="contained" 
          sx={{  backgroundColor:"#2b3e3d"}} 
          startIcon={<PersonAddIcon />} 
        >
          Add New Employee to a Team
        </Button>
      </Box>
      <DashboardStatistics />
      <ActivityHours />
      <EmployeeList />
    </SubLayout>
  );
};
