export const getPokemonData = async () => {

  const mapImages = (results) => {
    return results.map((result) => {
      const pokemonId = result.url.split('/').filter(Boolean).pop();
      return {
        id: pokemonId,
        name: result.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
      };
    });
  };

  const storedData = localStorage.getItem('datos de pokes');

  if (storedData) {
    const {images, names, ids} = JSON.parse(storedData);
    return {
      images,
      names,
      ids,
    };
  }

  const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
  const { results } = await resp.json();


  const mappedData = mapImages(results);
  
  const data = {
    images: mappedData.map((data) => data.image),
    names: mappedData.map((data) => data.name),
    ids: mappedData.map((data) => data.id),
  }

  localStorage.setItem('datos de pokes', JSON.stringify(data));

  return {
    ...data
  };
};