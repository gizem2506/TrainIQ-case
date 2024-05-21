import React from 'react';
import { Box } from '@mui/material';
import { SubLayout } from '../layouts/SubLayout';
import ActivityHours from '../components/Summary/ActivityHours';
import DashboardStatistics from '../components/Summary/DashboardStatistics';
import EmployeeList from '../components/EmployeeList';

export const MainPage = () => {

  return (
    <SubLayout>
 
 <DashboardStatistics />
        <ActivityHours />
        <EmployeeList/>
    </SubLayout>
  );
};

