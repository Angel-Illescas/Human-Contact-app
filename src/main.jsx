import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HumanContactApp } from './HumanContactApp.jsx'
import { BrowserRouter } from 'react-router-dom'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <HumanContactApp />
      </BrowserRouter>
    </StrictMode>,
  )
