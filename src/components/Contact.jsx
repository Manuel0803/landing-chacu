import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const formRef = useRef();
    const [status, setStatus] = useState({ loading: false, error: null, success: false });

    const COOLDOWN_TIME = 60 * 60 * 1000;

    const validateInputs = (name, email, message) => {
        if (!name || !name.trim()) {
            return "El campo nombre es obligatorio.";
        }
        if (name.trim().length < 2) {
            return "El nombre es muy corto, debe tener al menos 2 caracteres.";
        }
        
        if (!email || !email.trim()) {
            return "El campo email es obligatorio.";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "El formato del email no es válido (ejemplo: usuario@dominio.com).";
        }

        if (!message || !message.trim()) {
            return "Por favor, escribe un mensaje para nosotros.";
        }
        if (message.trim().length < 10) {
            return "El mensaje es muy breve. Cuéntanos un poco más sobre tu proyecto.";
        }

        return null; 
    };

    const checkRateLimit = () => {
        const lastSent = localStorage.getItem('lastEmailSent');
        if (lastSent) {
            const timePassed = Date.now() - parseInt(lastSent);
            if (timePassed < COOLDOWN_TIME) {
                const minutesLeft = Math.ceil((COOLDOWN_TIME - timePassed) / 60000);
                return `Por favor, espera ${minutesLeft} minutos antes de enviar otro mensaje.`;
            }
        }
        return null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formElements = e.target.elements;
        const nameValue = formElements.user_name.value;
        const emailValue = formElements.user_email.value;
        const messageValue = formElements.message.value;
        const honeypot = formElements.bot_field.value;

        if (honeypot) {
            console.log("Bot detectado y bloqueado.");
            setStatus({ loading: false, error: null, success: true });
            e.target.reset();
            return; 
        }

        const inputError = validateInputs(nameValue, emailValue, messageValue);
        if (inputError) {
            setStatus({ loading: false, error: inputError, success: false });
            return;
        }

        const rateLimitError = checkRateLimit();
        if (rateLimitError) {
            setStatus({ loading: false, error: rateLimitError, success: false });
            return;
        }

        setStatus({ loading: true, error: null, success: false });

        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        )       
        .then((result) => {
            console.log(result.text);
            setStatus({ loading: false, error: null, success: true });
            
            localStorage.setItem('lastEmailSent', Date.now().toString());

            e.target.reset(); 
            setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
        }, (error) => {
            console.log(error.text);
            setStatus({ loading: false, error: "Hubo un error al enviar. Intenta nuevamente.", success: false });
        });
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Hablemos de tu <br /> próximo proyecto</h2>
                    <p className="contact-description">
                        Estamos listos para llevar tus ideas al siguiente nivel. 
                        Ya sea una consulta técnica, un presupuesto o simplemente un saludo, 
                        nos encantaría escucharte.
                    </p>
                    
                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="icon">📧</span>
                            <a href="mailto:hola@chacu.io">hola@chacu.io</a>
                        </div>
                        <div className="detail-item">
                            <span className="icon">📍</span>
                            <span>Resistencia, Chaco, Argentina</span>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">Instagram</a>
                        <a href="#" className="social-link">GitHub</a>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                        <div style={{ display: 'none', visibility: 'hidden' }}>
                            <label htmlFor="bot_field">Don't fill this out if you're human</label>
                            <input type="text" name="bot_field" id="bot_field" tabIndex="-1" autoComplete="off" />
                        </div>


                        <div className="form-group">
                            <label htmlFor="user_name">Nombre</label>
                            <input type="text" id="user_name" name="user_name" placeholder="Tu nombre" />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="user_email">Email</label>
                            <input id="user_email" name="user_email" placeholder="tu@email.com" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" placeholder="Cuéntanos sobre tu proyecto..."></textarea>
                        </div>

                        <button type="submit" className="btn-submit" disabled={status.loading}>
                            {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>

                        {status.success && <p className="status-msg success">¡Mensaje enviado con éxito!</p>}
                        {status.error && <p className="status-msg error">{status.error}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;