export const OrderSelector = ({onOrderChange}) => {
  
  const onClickOrder = (o) => {
    onOrderChange(o);
  }

  return (
    <div> 
      <p>Order By:</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary m-2" onClick={() => onClickOrder('species')}>Species</button>
        <button className="btn btn-primary m-2" onClick={() => onClickOrder('name')}>Name</button>
      </div>
    </div>
  )
}
