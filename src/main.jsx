import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Pokedex } from './components/Pokedex'
import { PokemonPage } from './components/PokemonPage'
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from './mainApp'

import './styles.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <MainApp />
      {/* <PokemonPage id="9" nombre="Blastoise"/> */}
    </StrictMode>

  </BrowserRouter>
)
