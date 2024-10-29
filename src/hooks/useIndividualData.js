import { useEffect, useState } from "react";

export const useIndividualData = ( id ) => {
  const [data, setData] = useState({
    types: [],
    abilities: [],
    height: null,
    weight: null,
    name: '',
  });

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  
  const loadStoredData = () => {

      const parsedData = JSON.parse(localStorage.getItem(`poke${id}`));
      setData(parsedData);

  };

  
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const result = await response.json();

      setData({
        height: result.height,
        types: result.types,
        weight: result.weight,
        name: result.species.name,
        ability: result.abilities[0]?.ability.name,
      });

      localStorage.setItem(`poke${id}`, JSON.stringify({
        height: result.height,
        types: result.types,
        weight: result.weight,
        name: result.species.name,
        ability: result.abilities[0]?.ability.name,
      }));
      
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };


  useEffect(() => {
    if (localStorage.getItem(`poke${id}`)) {
      loadStoredData();
    } else {
      fetchDataFromAPI();
    }
  }, [id]);

  const { types, weight, height, name, ability } = data;

  return {
    ability,
    height,
    imgUrl,
    name,
    types,
    weight,
  };
}
