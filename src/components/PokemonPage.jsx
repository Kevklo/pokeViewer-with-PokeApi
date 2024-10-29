import { useState } from "react";
import { useIndividualData } from "../hooks/useIndividualData";
import { Link, useParams } from "react-router-dom";
export const PokemonPage = ( ) => {

  const { id } = useParams();

  const {name, types, height, weight, ability, imgUrl} =  useIndividualData(id);

  return (
    <section className="pokePage">

      <p>#{id}: {name}</p>
      <img className="pokeImg" src={imgUrl} alt={ name } />
      <div className="mb-3">Types:

      <Tipos types={ types }></Tipos>

      </div>

      {height && <p>Height: { height / 10 } Meters // Weight: { weight / 10 } Kilo </p>}
      {ability && <p>Ability: { ability.charAt(0).toUpperCase() + ability.slice(1) }</p>}

      <Link to='/'>
      <button className="btn btn-primary">Back</button>
      </Link>
      
    </section>
  )
}
