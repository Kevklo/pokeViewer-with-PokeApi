import { useEffect, useState } from "react";

export const useIndividualData = ( id ) => {
  const [data, setData] = useState({ types: [], abilities: [] });
  const [mainAbility, setMainAbility] = useState('');
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  const storedData = localStorage.getItem(`poke${id}`)

  const getStoredData = async () => 
    {
    const result = (JSON.parse(storedData));
    setData(result);
    setMainAbility(result.abilities[0]?.ability.name);
    const {types, weight, height, name} = data;
    console.log(data)
    return{ 
      ability: mainAbility,
      height,
      imgUrl,
      name,
      types,
      weight
    }}


  const fetchData = async () => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const result = await resp.json();
    setData(result);
    setMainAbility(result.abilities[0]?.ability.name);
    localStorage.setItem(`poke${id}`, JSON.stringify(result));
  };

  useEffect(() => {
    if(storedData)
    {  
      getStoredData();
    }
    else{
      fetchData();
    }
  }, [id]);

  const {types, weight, height, name} = data;

  return{ 
    ability: mainAbility,
    height,
    imgUrl,
    name,
    types,
    weight
  }
}