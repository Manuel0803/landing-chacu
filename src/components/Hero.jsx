import '../styles/Hero.css';

const Hero = ({ onContactClick }) => {
    return (
        <section className="hero-section" id="hero">
            <div className="container hero-content">
                
                <h1 className="hero-title">
                    Innovación Digital con <span className="highlight-text">Identidad Local</span>
                </h1>
                
                <p className="hero-subtitle">
                    Creamos soluciones modernas en web y mobile para potenciar tu proyecto.
                </p>

                <div className="hero-cta-group">
                    <button onClick={onContactClick} className="btn-cta primary-cta">
                        Trabajemos Juntos
                    </button>
                    
                    <a href="#services" className="secondary-cta">
                        Ver Servicios
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;