import React from 'react'
import { Pokedex } from './components/Pokedex'
import { PokemonPage } from './components/PokemonPage'
import { Navigate, Route, Routes } from 'react-router-dom'

export const MainApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Pokedex/> }/>
        <Route path="/pokemon/:id" element={ <PokemonPage/> }/>
        <Route path="/*" element={ <Navigate  to="/"/>}/>
    </Routes>
    </>
  )
}
