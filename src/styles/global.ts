import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --toastify-color-light: #29292E;
    --toastify-color-dark: #29292E;
    --toastify-color-info: linear-gradient(90deg, #39B74A 0%, #113817 100%);
    --toastify-color-error: linear-gradient(90deg, #319E40 0%, #113817 100%);
    --toastify-color-warning: linear-gradient(90deg, #319E40 0%, #113817 100%);
    --toastify-color-success: linear-gradient(90deg, #319E40 0%, #113817 100%);
    --toastify-icon-color-info: #C4C4CC;
    --toastify-icon-color-error: #AB222E;
    --toastify-icon-color-warning: #c47f17;
    --toastify-icon-color-success: #319E40;  
  
    --toastify-text-color-light: #C4C4CC;
    --toastify-text-color-dark: #C4C4CC;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    display: none;
}

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-300']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }

  body, input-security, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  .Toastify__close-button {
    color: ${(props) => props.theme['gray-300']};
  }
`
