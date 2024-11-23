import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeModeProvider } from './utlits/ThemeModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeModeProvider>
    <App />
    </ThemeModeProvider>
  </StrictMode>
)