import { useFetchPokemon } from "../hooks/useFetchPokemon";

export const PokemonGrid = ({order}) => {

  const {names, images} = useFetchPokemon(order);

  return (
    <div className="card_container">
      {names.map((name, index) => {
        return (<div key={name} className="pokemon_card">
          <p>{name.toUpperCase()}</p>
          <img draggable='false' src={images[index]} alt={name}/>
        </div>)
      })}
    </div>
  )
}
