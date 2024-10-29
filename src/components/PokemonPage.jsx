import { useIndividualData } from "../hooks/useIndividualData";
import { Link, useParams } from "react-router-dom";
import { Tipos } from "./Tipos";

export const PokemonPage = ( ) => {

  let { id } = useParams();
  
  id = parseInt(id);

  const {name, types, height, weight, ability, imgUrl} =  useIndividualData(id);

  return (
    
    <section className="pokePage">

      <p>#{id}: {name.toUpperCase()[0] + name.slice(1)}</p>


      <div className="d-flex justify-content-center align-items-center position-relative">
        {id > 1 && (
          <Link to={`/pokemon/${id - 1}`}>
            <button className="btn btn-primary">← Prev</button>
          </Link>
        )}

        <img className="pokeImg mx-3" src={imgUrl} alt={name} />

        {id < 1025 && (
          <Link to={`/pokemon/${id + 1}`}>
            <button className="btn btn-primary">→ Next</button>
          </Link>
        )}
      </div>


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
