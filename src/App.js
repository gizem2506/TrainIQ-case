import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import { MainPage } from './pages/MainPage';
import { BaseLayout } from './layouts/BaseLayout';
import { MainLayout } from './layouts/MainLayout';
import { InProgressCourses } from './pages/subPages/InProgress';
import UpcomingCourses from './pages/subPages/UpComing';
import { Skills } from './pages/Skills';
import { Team } from './pages/Team';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Yükleniyor....</p>} >
        <Routes>
          <Route element={<BaseLayout />} >
            <Route path="/" element={<MainLayout />}  >

              <Route path="main" element={<MainPage />} />
              <Route path="inprogress" element={<InProgressCourses />} />
              <Route path="upcoming" element={<UpcomingCourses />} />
              <Route path="skills" element={<Skills />} />
              <Route path="teams" element={<Team />} />



            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
