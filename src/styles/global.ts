import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --toastify-color-light: #f1e9c9;
    --toastify-color-dark: #f1e9c9;
    --toastify-color-info: linear-gradient(to right, #c47f17, #8047f8);
    --toastify-color-error: linear-gradient(to right, #c47f17, #8047f8);
    --toastify-color-warning: linear-gradient(to right, #c47f17, #8047f8);
    --toastify-color-success: linear-gradient(to right, #c47f17, #8047f8);
    --toastify-icon-color-info: #8047f8;
    --toastify-icon-color-error: #e25858;
    --toastify-icon-color-warning: #c47f17;
    --toastify-icon-color-success: #8047f8;  
  
    --toastify-text-color-light: #c47f17;
    --toastify-text-color-dark: #c47f17;
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
`
