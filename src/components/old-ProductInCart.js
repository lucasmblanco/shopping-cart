import React, { useEffect, useReducer, useState } from 'react'

export default function ProductInCart({product, deleteItem}) {

    const [ quantity, dispatch ] = useReducer(reducer, product.quantity); 
    const [price, dispatch2] = useReducer(reducer, product.price); 
    const [ limit, setLimit ] = useState(false)
    

      function changeQuantity(action){
        dispatch({type: action}); 
        dispatch2({type: 'new-price'})
      }

      
      function reducer(data, action){
        switch (action.type){
            case 'new-price': 
            return product.price * quantity
            case 'increment': 
            return data + 1
            case 'decrement': 
            return data - 1 
            default: 
            return data
        } 
      }
      
      useEffect(() => {
        quantity <= 1 ? setLimit(true) : setLimit(false)
      }, 
      [quantity])


  return (
    <div className='text-xs text-left p-3 flex'>
        <div>{product.name}</div>
        <div>{quantity}</div>
        <div>
            <button onClick={()=> {changeQuantity('decrement')}} disabled={limit}>-</button>
            <div>{product.quantity}</div>
            <button onClick={()=> {changeQuantity('increment')}}>+</button>
     </div>
        <div>{price}</div>
        <button onClick={() => deleteItem(product.id)}>delete</button>
    </div>
  )
}
