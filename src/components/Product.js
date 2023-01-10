import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Product({data, addProduct, quantity, status}) {
    const [product, setProduct] = useState({
        id: data.id,
        name: data.title,
        image: data.image,
        price: data.price,
        totalPrice: data.price,
        rating: data.rating,
        category: data.category,
        description: data.description,
        quantity: quantity,
        added: status,
      })


    useEffect(() => {
      setProduct(product => (
        {
          ...product,
          added: status
        }
      ))
    }, [status])

    

  return (
    <div className='w-50 h-96 bg-white rounded-xl p-2 flex flex-col items-center'>
     <div className='w-20 h-50'> <img src={product.image} alt={product.name} /></div>
     <div className='text-black text-xs'>{product.name}</div>
     <div className='text-black text-xs'>{product.category}</div>
     <div className='text-black text-xs'>{product.price}</div>
     <div className='text-black text-xs'>{product.rating.rate}</div>
    {
      product.added ? <div>IN THE CART</div> : 
      <button onClick={() => addProduct(product)}>ADD TO CART</button>
    }
    </div>
  )
}
