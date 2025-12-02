import '../styles/Hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section className="hero-section" id="inicio">
            <div className="container hero-content">
                
                <h1 className="hero-title">
                    Innovación Digital con <span className="highlight-text">Identidad Local</span>
                </h1>
                
                <p className="hero-subtitle">
                    Creamos soluciones modernas en web y mobile para potenciar tu proyecto.
                </p>

                <div className="hero-cta-group">
                    
                    <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={-80} duration={500} className="btn-cta primary-cta">
                        Trabajemos juntos
                    </Link>
                    
                    <Link activeClass="active" to="servicios" spy={true} smooth={true} offset={-80} duration={500} className="secondary-cta">
                        Ver Servicios
                    </Link>

                    
                </div>
            </div>
        </section>
    );
};

export default Hero;