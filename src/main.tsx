import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LangProvider } from './lib/lang'
import { ThemeProvider } from './lib/theme'
import { App } from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </StrictMode>,
)
