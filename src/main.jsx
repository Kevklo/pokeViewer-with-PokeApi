import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider} from 'react-router-dom'
import { PokeViewer } from './components/PokeViewer'
import { PokemonPage } from './components/PokemonPage'
import './styles.css'

const router = createHashRouter([
  {
    path:'/',
    element: <PokeViewer />
  },
  {
    path: 'pokemon/:id', 
    element:  <PokemonPage/>
  }

])

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <RouterProvider router={ router }/>
    </StrictMode>
)
