import { useEffect, useState } from "react";

export const useIndividualData = ( id ) => {
  const [data, setData] = useState({ types: [], abilities: [] });
  const [mainAbility, setMainAbility] = useState('');
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  const fetchData = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const result = await resp.json();
    setData(result);
    setMainAbility(result.abilities[0]?.ability.name);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const {types, weight, height} = data;

  return{ 
    types,
    ability: mainAbility,
    height,
    weight,
    imgUrl
  }
}