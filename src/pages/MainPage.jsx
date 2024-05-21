import React from 'react';
import { SubLayout } from '../layouts/SubLayout';
import ActivityHours from '../components/Summary/ActivityHours';
import DashboardStatistics from '../components/Summary/DashboardStatistics';
import EmployeeList from '../components/Summary/EmployeeList';

export const MainPage = () => {

  return (
    <SubLayout>
      <DashboardStatistics />
      <ActivityHours />
      <EmployeeList />
    </SubLayout>
  );
};

