import { useEffect, useState } from 'react'
import { getPokemonData } from '../helpers/getPokemonData';

export const useFetchPokemon = ( order ) => {
  
  const [pokemonData, setPokemonData] = useState([]);
  const [filteredPokemonData, setFilteredPokemonData] = useState([]);

  const getData = async () => {
    const {names, images, ids} = await getPokemonData();
    const data = names.map((name, index) => ({
      name,
      image: images[index],
      id: ids[index],
    }))
    setPokemonData(data);
  }

  const sortData = (order) => {
    let sortedData;
    if (order == 'name'){
      sortedData = [...pokemonData].sort((a, b) => a.name.localeCompare(b.name));
    }  else {
      sortedData = [...pokemonData];
    }
    setFilteredPokemonData(sortedData);
  }

  useEffect( () => {
      getData();
    }, []
  );

  useEffect( () => {
      sortData(order);
    }, [order, pokemonData]
  );
  
  const names  = filteredPokemonData.map((item) => item.name);
  const images = filteredPokemonData.map((item) => item.image); 
  const ids    = filteredPokemonData.map((item) => item.id); 
  
  return {
    names,
    images,
    ids
  }

}
