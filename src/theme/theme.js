const theme = {
    colors: {
        mode: 'light',
        
        primary: {
            main: '#2C516F', 
            light: '#567A99', 
            dark: '#1F3C53',  
        },
        secondary: {
            main: '#CFA968', 
            light: '#E6C697', 
            dark: '#A3814C', 
        },
        
        success: {
            main: '#10b981',
        },
        error: {
            main: '#ef4444',
        },
        warning: {
            main: '#f59e0b',
        },
        
        background: {
            default: '#F2F2F2', 
            paper: '#FFFFFF',      
        },
        text: {
            primary: '#2C516F', 
            secondary: '#4A4A4A', 
        },
    },

    typography: {
        fontFamily: "Inter, Poppins, Nunito, Arial, sans-serif, Saved-By-Zero",    
        
        fontWeight: {
            light: 300,
            regular: 400,
            medium: 600, 
            bold: 700,
        },
        

        fontStyle: {
            italic: "italic",
        },
    },

    spacing: {
        unit: 8, 
        small: '8px',
        medium: '16px',
        large: '24px',
    }
};

export default theme;