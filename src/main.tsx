import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroUIProvider } from '@heroui/react'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from './context/LocaleContext'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio">
      <HeroUIProvider>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </HeroUIProvider>
    </BrowserRouter>
  </StrictMode>,
)
