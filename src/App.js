// react imports
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// page imports
import Home from './pages/home/Home.js'
import Academics from './pages/Academics.js'
import Experience from './pages/Experience.js'
import Projects from './pages/Projects.js'
import Hobbies from './pages/Hobbies.js'
import Contact from './pages/Contact.js'

// component imports
import Navbar from './components/Navbar/Navbar.js';

function App() {
  return (
    <Router>
      <div className="Navbar">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
