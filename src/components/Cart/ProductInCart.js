import React, { useEffect, useState } from 'react';
import {HiTrash} from 'react-icons/hi'

export default function ProductInCart({product, deleteProduct, addQuantity}) {

  //  const [ quantity, dispatch ] = useReducer(reducer, product.quantity); 
  //  const [price, dispatch2] = useReducer(reducer, product.price); 
    const [ limit, setLimit ] = useState(false)
    
    useEffect(() => {
        product.quantity <= 1 ? setLimit(true) : setLimit(false)
      }, 
      [product.quantity])

  return (
   <>
    <div className=' flex justify-around text-xs text-left text-white-accent h-16 '>
        <div className='grid content-center text-[8px] w-[10rem]  text-white-accent  p-4'>{product.title}</div>
        <div className='w-[3rem] grid grid-cols-cart-quantity bg-blue-accent m-1 rounded-md'> 
            <div className='col-span-2 justify-self-center self-end'>{product.quantity}</div>
            <button className='text-green-500 transition-all duration-500 hover:text-green-300'onClick={()=> {addQuantity(product.id, 'decrement')}} disabled={limit}>-</button>
            <button className='text-red-500 transition-all duration-500 hover:text-red-300' onClick={()=> {addQuantity(product.id, 'increment')}}>+</button>
     </div>
        <div className=' grid content-center justify-center text-base  w-[5rem] transition-all duration-500'>$ {product.price * product.quantity}</div>
        <div className="flex justify-center rounded-full text-red-accent transition-all duration-500 hover:text-light-red-accent p-4"><button onClick={() => deleteProduct(product.id)}><HiTrash /></button></div>
    </div>
    <hr></hr>
   </>
  )
}
