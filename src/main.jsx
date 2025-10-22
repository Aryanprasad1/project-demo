import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Components1 from './Components/Components1.jsx'
import HeroSection from './Components/HeroSection.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
   <Components1></Components1>
  <HeroSection></HeroSection>
  </StrictMode>
  </>

)
