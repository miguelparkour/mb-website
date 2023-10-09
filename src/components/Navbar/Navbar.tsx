// src/components/Navbar.tsx
import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import { BASE_PATH } from '../../config';
import './Navbar.css';

const Navbar = () => {
  const isHomeActive = useMatch("/");
  const isAboutActive = useMatch("/about");
  const isProjectsActive = useMatch("/projects");
  const isContactActive = useMatch("/contact");

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><NavLink to="/home" className={`nav-link ${isHomeActive ? 'active' : ''}`}>Inicio</NavLink></li>
        <li><NavLink to="/about" className={`nav-link ${isAboutActive ? 'active' : ''}`}>Acerca de</NavLink></li>

        <img src={`${BASE_PATH}/images/logo.png`} alt="Logo" className="navbar-logo" />

        <li><NavLink to="/projects" className={`nav-link ${isProjectsActive ? 'active' : ''}`}>Proyectos</NavLink></li>
        <li><NavLink to="/contact" className={`nav-link ${isContactActive ? 'active' : ''}`}>Contacto</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
