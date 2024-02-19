// react imports
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// page imports
import Home from './pages/home/Home.js'
import Education from './pages/education/Education.js'
import Experience from './pages/experience/Experience.js'
import Hobbies from './pages/hobbies/Hobbies.js'

// component imports
import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <Router>
      <div className="Navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/personal-website" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Router>
  );
}

export default App;
