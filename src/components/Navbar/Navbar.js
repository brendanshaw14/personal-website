import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-links">
         <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/education' ? 'active' : ''}>
          <Link to="/education">Education</Link>
        </li>
        <li className={location.pathname === '/experience' ? 'active' : ''}>
          <Link to="/experience">Experience</Link>
        </li>
        <li className={location.pathname === '/hobbies' ? 'active' : ''}>
          <Link to="/hobbies">Hobbies</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
