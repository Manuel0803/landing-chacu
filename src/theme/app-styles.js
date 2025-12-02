import theme from './theme'; 

const appStyles = {
    '--color-primary': theme.colors.primary.main,
    '--color-primary-dark': theme.colors.primary.dark,
    '--color-primary-light': theme.colors.primary.light,
    
    '--color-secondary': theme.colors.secondary.main,
    '--color-secondary-hover': theme.colors.secondary.dark, 
    
    '--color-bg-default': theme.colors.background.default,
    '--color-bg-paper': theme.colors.background.paper,
    
    '--color-text-primary': theme.colors.text.primary,
    '--color-text-secondary': theme.colors.text.secondary,

    '--font-family-base': theme.typography.fontFamily,
    '--font-weight-bold': theme.typography.fontWeight.bold,
    '--font-weight-medium': theme.typography.fontWeight.medium,
  };

export default appStyles;