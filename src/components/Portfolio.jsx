import portfolioData from '../data/portfolio-data'; 
import '../styles/Portfolio.css';

const Portfolio = () => {
    return (
        <section className="portfolio-section" id="portfolio">
            <div className="portfolio-header">
                <h2 className="section-title">Nuestro Trabajo</h2>
                <p className="section-subtitle">Proyectos destacados que definen nuestra experiencia</p>
            </div>

            <div className="portfolio-grid">
                {portfolioData.map((project) => (
                    <article className="portfolio-card" key={project.id}>
                        <div className="card-image-wrapper">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="card-image" 
                            />
                            <div className="card-overlay">
                                <a href={project.link} className="btn-view">
                                    Ver Proyecto
                                </a>
                            </div>
                        </div>

                        <div className="card-content">
                            <span className="card-category">{project.category}</span>
                            
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>
                            
                            <div className="card-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;