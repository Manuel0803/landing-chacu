import steps from '../data/steps-data';
import '../styles/Process.css';
import { AiOutlineComment, AiOutlineFileText, AiOutlineCode, AiOutlineRocket } from "react-icons/ai";

const Process = () => {

    const iconMap = {
        1: <AiOutlineComment />,
        2: <AiOutlineFileText />,
        3: <AiOutlineCode />,
        4: <AiOutlineRocket />
    };

    return (
        <section className="process-section" id="process">
            <div className="process-header">
                <h2 className="section-title">Nuestro Proceso de Trabajo</h2>
                <p className="section-subtitle">
                    Un camino claro y colaborativo para convertir tu idea en una realidad digital.
                </p>
            </div>

            <div className="process-grid">
                {steps.map((step) => (
                    <article className="process-card" key={step.id}>
                        <div className="process-icon-wrapper">
                            <span className="process-icon">{iconMap[step.id]}</span>
                        </div>
                        <div className="process-content">
                            <h3 className="process-number">{step.number}</h3>
                            <h4 className="process-title">{step.title}</h4>
                            <p className="process-description">{step.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Process;