import services from '../data/services-data';
import '../styles/Services.css';
import { AiOutlineCode, AiOutlineMobile, AiOutlineBgColors, AiOutlineTool, AiOutlineSetting, AiOutlineRocket } from "react-icons/ai";

const Services = () => {
    
    const iconMap = {
        1: <AiOutlineCode />,
        2: <AiOutlineMobile />,
        3: <AiOutlineBgColors />,
        4: <AiOutlineTool />,
        5: <AiOutlineSetting />,
        6: <AiOutlineRocket />
    };

    return (
        <section className="services-section" id="services">
            <div className="services-header">
                <h2 className="section-title">Nuestros Servicios</h2>
                <p className="section-subtitle">
                    Ayudamos a las empresas a crecer a través de la tecnología y el diseño centrado en el usuario.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service) => (
                    <article className="service-card" key={service.id}>
                        <div className="service-icon-wrapper">
                            <span className="service-icon">{iconMap[service.id]}</span>
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;