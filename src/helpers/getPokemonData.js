
export const getPokemonData = async () => {
  
  const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
  const { results } = await resp.json();
  
  const images = results.map(result => {
    const pokemonId = result.url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  })
  const names = results.map( result =>  result.name);
  return{
    images,
    names
  }
  
}