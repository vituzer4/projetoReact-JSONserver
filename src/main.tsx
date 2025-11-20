import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './services/api.ts'
import './components/Header.tsx'
import './components/Form.tsx'
import './pages/Home.tsx'
import './components/Card.tsx'
import './services/api.ts'
import './App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
