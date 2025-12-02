import '../styles/Contact.css'; // Reutilizamos algunos estilos del footer por ahora, esto hay q mover a contact.styles

const Contact = () => {
    return (
        <div className="final-cta-block">
            <div className="container final-cta-content">
                <h2>¿Listo para llevar tu proyecto al próximo nivel?</h2>
                <p>Nos encantaría escuchar sobre tu idea. Contáctanos para una charla sin compromiso.</p>
                <a href="mailto:hola@chacu.io" className="btn-cta final-cta-btn">Hablemos</a>
            </div>
        </div>
    );
};

export default Contact;