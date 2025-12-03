import '../styles/Footer.css';
import { Link } from 'react-scroll';
import logo from '../assets/chacu-logo.png';
import navLinks from '../data/footer-data';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-content-wrapper">
                
                <div className="footer-col branding-col">
                    <div className="brand-wrapper">
                        <img src={logo} alt="Chacú.io Logo" className="footer-logo-img" />
                    </div>
                    
                    <p className="footer-tagline">Tecnología hecha con identidad. <br />Resistencia, Chaco, Argentina</p>
                    
                </div>

                <div className="footer-col navigation-col">
                    <h4>Navegación</h4>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="footer-link"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4>Contacto</h4>
                    <p>
                        ¿Tienes un proyecto en mente? Escríbenos y charlemos sin compromiso.
                    </p>
                    <a href="mailto:chacochacu.io@gmail.com" className="footer-cta-btn">
                        chacochacu.io@gmail.com
                    </a>
                </div>

            </div>

            <div className="bottom-footer">
                <div className="container bottom-footer-content">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Chacú.io. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;