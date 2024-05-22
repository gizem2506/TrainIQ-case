import React from 'react';
import { SubLayout } from '../layouts/SubLayout';
import ActivityHours from '../components/Summary/ActivityHours';
import DashboardStatistics from '../components/Summary/DashboardStatistics';
import EmployeeList from '../components/Summary/EmployeeList';
import { Buttons } from '../components/elements/Buttons';

export const MainPage = () => {
  return (
    <SubLayout>
      <Buttons />
      <DashboardStatistics />
      <ActivityHours />
      <EmployeeList />
    </SubLayout>
  );
};
