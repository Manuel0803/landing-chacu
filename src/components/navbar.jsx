import React from 'react';
import '../styles/Navbar.css';
import logoSrc from '../assets/chacu-logo.png'; 
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar-chacu">
      <div className="container nav-container">

        <div className="logo-area">
          <Link 
            to="hero" 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-80} 
            style={{ cursor: 'pointer' }} 
          >
            <img 
                src={logoSrc} 
                alt="Chacú.io Logo" 
                className="logo-icon" 
            />
            <span className="logo-text">Chacú.io</span>
          </Link>
        </div>

        <div className="nav-links">

          <Link activeClass="active" to="inicio" spy={true} smooth={true} offset={-80} duration={500} className="nav-link">
            Inicio
          </Link>

          <Link activeClass="active" to="servicios" spy={true} smooth={true} offset={-80} duration={500} className="nav-link">
            Servicios
          </Link>

          <Link activeClass="active" to="sobre-nosotros" spy={true} smooth={true} offset={-80} duration={500} className="nav-link">
            Sobre Nosotros
          </Link>

          <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-80} duration={500} className="nav-link">
            Portfolio
          </Link>

          <Link to="contacto" spy={true} smooth={true} offset={-80} duration={500} className="btn-cta nav-cta">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;