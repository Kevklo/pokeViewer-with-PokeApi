import { useState } from "react";
import { useIndividualData } from "../hooks/useIndividualData";

export const PokemonPage = ({id, nombre}) => {
  const {types, height, weight, ability, imgUrl} =  useIndividualData(id);
  const [name] = useState(nombre);
  return (
    <section className="pokePage">
      <p>Name: {name}</p>
      <img className="pokeImg" src={imgUrl} alt={nombre} />
      <div className="mb-3">Types:
        { types?.map((type) => {
          return(
            <div key={type.type.name}>
              <p className={type.type.name + ' type'}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p>
            </div>
          )
        })}
      </div>
      {height && <p>Height: { height / 10 } Meters // Weight: { weight / 10 } Kilo </p>}
      {ability && <p>Abilty: { ability.charAt(0).toUpperCase() + ability.slice(1) }</p>}
    </section>
  )
}
