
export const getPokemonData = async () => {

  const mapImages = (results) => {
    return results.map(result => {
      const pokemonId = result.url.split('/').filter(Boolean).pop();
      return {
        id: pokemonId,
        image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      }
    })
  }

  const storedData = localStorage.getItem('datos de pokes')
  
  if(storedData){
    const results = JSON.parse(storedData);
    const ids     = mapImages(results).map(imageData => imageData.id)
    const images  = mapImages(results).map(imageData => imageData.image)
    const names   = results.map( result => result.name);
    return {
      images,
      names,
      ids
    }
  }

  const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');

  const { results } = await resp.json();

  localStorage.setItem('datos de pokes', JSON.stringify(results));

  const images = mapImages(results);
  const names = results.map( result =>  result.name);
  const ids = images.map(imageData => imageData.id)

  return{
    images: images.map(imageData => imageData.image),
    names,
    ids
  }
  
}