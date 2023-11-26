// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '../LandingPage/LandingPage';
import { AboutUs } from '../AboutUs/AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
