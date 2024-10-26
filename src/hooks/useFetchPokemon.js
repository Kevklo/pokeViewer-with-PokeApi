import { useEffect, useState } from 'react'
import { getPokemonData } from '../helpers/getPokemonData';

export const useFetchPokemon = ( order ) => {
  

  const [ogNames, setOgNames] = useState([]);
  const [ogImages, setOgImages] = useState([]);
  const [names, setNames] = useState([]);
  const [images, setImages] = useState([])


  const getData = async () => {
    const {names: newname, images: newimage} = await getPokemonData();
      setOgNames(newname);
      setOgImages(newimage);
      setNames(newname);
      setImages(newimage);
  }

  const sortData = (order) => {
    if (order == 'species') {

      setNames(ogNames);
      setImages(ogImages)

    } else if (order == 'name'){

      const data = ogNames.map((name, index) => ({
        name,
        image: ogImages[index],
      }))

      data.sort((a, b) => a.name.localeCompare(b.name));
      setNames(data.map( i => i.name));
      setImages(data.map( i => i.image));

    }    
  }

  useEffect( () => {
      getData();
    }, []
  );

  useEffect( () => {
      sortData(order);
    }, [order]
  );
  
  return {
    names,
    images
  }

}
