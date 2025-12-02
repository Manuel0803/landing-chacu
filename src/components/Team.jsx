import '../styles/Team.css';
import teamMembers from '../data/team-data';

const Team = () => {

    return (
        <section className="team-section" id="sobre-nosotros">
            <div className="container">
                <h2 className="section-title">Sobre Nosotros</h2>
                <p className="section-subtitle">
                    Conoce al equipo detrás de Chacú.io. Somos un dúo dinámico apasionado por construir el futuro digital.
                </p>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div className="team-member-card" key={member.id}>
                            
                            <div 
                                className="member-photo-placeholder" 
                                style={{ backgroundImage: `url(${member.image})` }}
                            >
                                <span className="role-icon">{member.icon}</span> 
                            </div>
                            
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <p className="member-bio">{member.bio}</p>
                            
                            <div className="social-links">
                                <a href={member.socials.portfolio} target="_blank" rel="noopener noreferrer" className="social-link">🔗</a> 
                                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">in</a> 
                                <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="social-link">github</a> 
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;