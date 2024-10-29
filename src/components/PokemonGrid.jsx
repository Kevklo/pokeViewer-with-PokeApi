import { Link } from "react-router-dom";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
export const PokemonGrid = ({order}) => {

  const {names, images, ids} = useFetchPokemon(order);

  return (
    <div className="card_container">
      {names.map((name, index) => {
        return (
        <Link to={`/pokemon/${ids[index]}`} key={name} className="pokemon_card">
          {/* <div className="pokemon_card"> */}
            <p>#{ids[index]}: {name.toUpperCase()}</p>
            <img draggable='false' src={images[index]} alt={name}/>
          {/* </div> */}
         </Link>
        )}
      )}
    </div>
  )
}
