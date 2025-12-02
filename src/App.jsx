import './App.css'; 
import AppStyles from './theme/app-styles.js';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar.jsx'; 
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx'; // hay que mejorar
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx'; // hay que mejorar
//import Process from './components/Process.jsx'; // falta hacer
//import Services from './components/Services.jsx' // falta hacer
// import Portfolio from './components/Portfolio.jsx' // falta hacer

function App() {

  return (
    <div className="App" style={AppStyles}>
      
      <Navbar />
      
      <main>
        <Element name="inicio">
          <Hero />
        </Element>

        <Element name="servicios" className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <h2>En desarrollo</h2>
            <p style={{color: 'var(--color-text-secondary)'}}>Falta la sección Servicios.</p>
        </Element>

        <Element name="proceso" className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <h2>En desarrollo</h2>
            <p style={{color: 'var(--color-text-secondary)'}}>Falta la sección Procesos.</p>
        </Element>

        <Element name="proceso" className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
            <h2>En desarrollo</h2>
            <p style={{color: 'var(--color-text-secondary)'}}>Falta la sección Portfolio.</p>
        </Element>

        <Element name="sobre-nosotros">
          <Team /> 
        </Element>

        <Element name="contacto">
          <Contact />
        </Element>
        
      </main>
      
      <Footer />

    </div>
  );
}

export default App;