import '../styles/Footer.css'; 

const Footer = ({ onContactClick }) => {
    return (
        <footer>
            <div className="final-cta-block">
                <div className="container final-cta-content">
                    <h2>¿Listo para llevar tu proyecto al próximo nivel?</h2>
                    
                    <button onClick={onContactClick} className="btn-cta final-cta-btn">
                        Trabajemos Juntos
                    </button>
                </div>
            </div>

            <div className="bottom-footer">
                <div className="container footer-info">
                    <p className="footer-copyright">
                        © {new Date().getFullYear()} Chacú.io. Tecnología hecha con identidad.
                    </p>
                    
                    <div className="footer-links">
                        <a href="mailto:hola@chacu.io" className="footer-link">hola@chacu.io</a>
                        {/* Aca van iconos de redes, ej:
                        <a href="#" target="_blank" className="social-icon">🔗</a>
                        <a href="#" target="_blank" className="social-icon">📷</a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;