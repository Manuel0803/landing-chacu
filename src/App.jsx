import './App.css'; 
import AppStyles from './theme/app-styles.js';
import Navbar from './components/Navbar.jsx'; 
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx'; 
import Team from './components/Team.jsx';

function App() {

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App" style={AppStyles}>
      
      <Navbar onContactClick={handleContactClick} />
      
      <main>
        <Hero onContactClick={handleContactClick} />
        
        <Team /> 

        <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <h2>En desarrollo</h2>
            <p style={{color: 'var(--color-text-secondary)'}}>Faltan las secciones Servicios, Portafolio y Proceso.</p>
        </div>

      </main>
      
      <div id="contact-section">
          <Footer onContactClick={handleContactClick} />
      </div>

    </div>
  );
}

export default App;