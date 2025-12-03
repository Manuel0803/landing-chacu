import './App.css'; 
import AppStyles from './theme/app-styles.js';
import { Element } from 'react-scroll';
import Hero from './components/Hero.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/Footer.jsx'; 
import Team from './components/Team.jsx';
import Contact from './components/Contact.jsx'; 
import Process from './components/Process.jsx';
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx';

function App() {

  return (
    <div className="App" style={AppStyles}>
      
      <Navbar />
      
      <main>
        <Element name="inicio">
          <Hero />
        </Element>

        <Element name="servicios">
            <Services />
        </Element>

        <Element name="proceso">
            <Process />
        </Element>

        <Element name="portfolio">
            <Portfolio />
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