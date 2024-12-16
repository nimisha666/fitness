import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Adjust these paths as necessary
import ProfilePage from './pages/ProfilePage';
import FitnessPage from './pages/FitnessPage';  // If you have specific pages for fitness
import ProgessDataPage from './pages/ProgessDataPage'; // Add other pages as required

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/fitness" element={<FitnessPage />} />
            <Route path="/progress" element={<ProgessDataPage />} />
        </Routes>
    );
}

export default AppRoutes;

