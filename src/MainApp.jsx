import React from 'react'
import { PokeViewer } from './components/PokeViewer'
import { PokemonPage } from './components/PokemonPage'
import { Navigate, Route, Routes } from 'react-router-dom'

export const MainApp = () => {
  return (
    <>
      <Routes>
        <Route path="/PokeViewer" element={ <PokeViewer/> }/>
        <Route path="/pokemon/:id" element={ <PokemonPage/> }/>
        <Route path="/*" element={ <Navigate  to="/PokeViewer"/>}/>
    </Routes>
    </>
  )
}
