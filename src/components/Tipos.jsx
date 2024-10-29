export const Tipos = ( {types} ) => {
  return (  
  types?.map((type) => {
    return(
      <div key={type.type.name}>
        <p className={type.type.name + ' type'}>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p>
      </div>
    )
  }))
}
