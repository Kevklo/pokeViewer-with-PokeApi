import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PokedexApp } from './PokedexApp'
import { PokemonPage } from './components/PokemonPage'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokedexApp />
    {/* <PokemonPage id="1" name="Bulbasaur"/> */}
  </StrictMode>,
)
