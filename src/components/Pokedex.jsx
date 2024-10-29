import { useState } from 'react'
import { PokemonGrid } from './PokemonGrid'
import { OrderSelector } from './OrderSelector';

export const Pokedex = () => {
  const [order, setOrder] = useState('species');

  const onOrderChange = (o) => {
    setOrder(o);
  }

  return (
    <>
      <h1>PokedexApp</h1>
      <OrderSelector onOrderChange={onOrderChange}/>
      <PokemonGrid order={ order }/>
    </>
  )
}
