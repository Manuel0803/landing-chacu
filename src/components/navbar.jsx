import '../styles/Navbar.css'; 
import logoSrc from '../assets/chacu-logo.webp'; 

const Navbar = ({ onContactClick }) => {
  return (
    <nav className="navbar-chacu">
      <div className="container nav-container">
        
        <div className="logo-area">
            <img src={logoSrc} alt="Chacú.io Logo" className="logo-icon" />
            <span className="logo-text">Chacú.io</span>
        </div>

        {/* Enlaces de Navegación y CTA */}
        <div className="nav-links">
          <a href="#hero" className="nav-link">Inicio</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#about" className="nav-link">Sobre Nosotros</a>
          
          <button onClick={onContactClick} className="btn-cta nav-cta">
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;