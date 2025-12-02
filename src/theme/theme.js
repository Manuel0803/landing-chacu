export const theme = {
    // --- PALETA DE COLORES ---
    colors: {
        mode: 'light',
        
        // Colores principales de la marca 
        primary: {
            main: '#2C516F', // Primary Blue
            light: '#567A99', 
            dark: '#1F3C53',  
        },
        secondary: {
            main: '#CFA968', // Accent Gold/Sand
            light: '#E6C697', 
            dark: '#A3814C', 
        },
        
        // Colores de estado 
        success: {
            main: '#10b981',
        },
        error: {
            main: '#ef4444',
        },
        warning: {
            main: '#f59e0b',
        },
        
        // Colores de fondo y texto
        background: {
            default: '#F2F2F2', 
            paper: '#FFFFFF',      
        },
        text: {
            primary: '#2C516F', 
            secondary: '#4A4A4A', 
            // Puedes agregar más: disabled: '#999'
        },
    },

    // --- TIPOGRAFÍA ---
    typography: {
        fontFamily: "Inter, Poppins, Nunito, Arial, sans-serif", 
        
        // Pesos de fuente
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 600, 
            bold: 700,
        },
        
        // Estilos
        fontStyle: {
            italic: "italic",
        },

        // Aquí puedes definir tamaños de fuente específicos
        // h1: '3rem',
        // body1: '1rem',
    },
    
    // --- ESPACIADO ---
    spacing: {
        unit: 8, 
        small: '8px',
        medium: '16px',
        large: '24px',
    }
};