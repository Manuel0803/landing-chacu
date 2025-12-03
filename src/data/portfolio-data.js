import casamiento from "../assets/casamiento-pyd.webp";
import clinicaModelo from "../assets/clinica-modelo.webp";
import informatorio from "../assets/informatorio.webp";

const portfolioData = [
    {
        id: 1,
        title: "Clinica Modelo Veterinaria",
        category: "Web Application & Landing page",
        description: "Landing Page y sistema de gestión veterinaria orientada a la administración de pacientes, historias clinicas, stock, entre otros.",
        image: clinicaModelo, 
        tags: ["React", "Spring Boot", "PostgreSQL", "Nginx"],
        link: "https://clinicamodeloveterinaria.site/"
    },
    {
        id: 2,
        title: "Web invitación Casamiento",
        category: "Landing Page",
        description: "Landing Page orientada a la gestión de los invitados asimismo sirviendo como invitación al evento.",
        image: casamiento, 
        tags: ["React", "Api Google Sheet"],
        link: "https://paoydani.netlify.app/"
    },
    {
        id: 3,
        title: "Portal de noticias",
        category: "Web application",
        description: "Portal de noticias Web orientada a la Robótica. Permite la gestión general del contenido mediante una interfaz, interactiva y amigable.",
        image: informatorio, 
        tags: ["Django", "Python"],
        link: "https://pulsodigital.pythonanywhere.com/"
    }
];

export default portfolioData;