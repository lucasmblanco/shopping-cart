import React, { useEffect, useState } from 'react'

export default function ProductInCart({product, deleteProduct, addQuantity}) {

  //  const [ quantity, dispatch ] = useReducer(reducer, product.quantity); 
  //  const [price, dispatch2] = useReducer(reducer, product.price); 
    const [ limit, setLimit ] = useState(false)
    
    useEffect(() => {
        product.quantity <= 1 ? setLimit(true) : setLimit(false)
      }, 
      [product.quantity])

  return (
    <div className='text-xs text-left p-3 flex'>
        <div>{product.name}</div>
        <div> 
            <button onClick={()=> {addQuantity(product.id, 'decrement')}} disabled={limit}>-</button>
            <div>{product.quantity}</div>
            <button onClick={()=> {addQuantity(product.id, 'increment')}}>+</button>
     </div>
        <div>{product.totalPrice}</div>
        <button onClick={() => deleteProduct(product.id)}>delete</button>
    </div>
  )
}
