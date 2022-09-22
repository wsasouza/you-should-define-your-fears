import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from './contexts/ModalContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ModalProvider>
          <Router />
        </ModalProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
