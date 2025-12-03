import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Contatos from './Contatos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contatos/>
  </StrictMode>,
)
