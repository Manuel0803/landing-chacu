import '../styles/Footer.css'; 

const Footer = () => {
    return (
        <footer>
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