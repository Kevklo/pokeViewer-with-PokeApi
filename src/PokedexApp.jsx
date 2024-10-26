import { useState } from 'react'
import { PokemonGrid } from './components/PokemonGrid'
import { OrderSelector } from './components/OrderSelector';

export const PokedexApp = () => {
  const [order, setOrder] = useState('species');

  const onOrderChange = (o) => {
    setOrder(o);
  }

  return (
    <>
      <h1>PokedexApp</h1>
      <OrderSelector onOrderChange={onOrderChange}/>
      <PokemonGrid order={ order }/>
      {/* //TODO Individual pages for each pokemon */}
    </>
  )
}
