import React from 'react'
import { useState } from 'react'

export default function Product({data, addProduct, quantity}) {
    const [product, setProduct] = useState({
        id: data.id,
        name: data.title,
        image: data.image,
        price: data.price,
        rating: data.rating,
        category: data.category,
        description: data.description,
        quantity: quantity,
        added: false,
      })

    function addToCart(data){
      setProduct({...data, added: true});
      addProduct(product)
    }

  return (
    <div className='w-50 h-96 bg-white rounded-xl p-2 flex flex-col items-center'>
     <div className='w-20 h-50'> <img src={product.image} alt={product.name} /></div>
     <div className='text-black text-xs'>{product.name}</div>
     <div className='text-black text-xs'>{product.category}</div>
     <div className='text-black text-xs'>{product.price}</div>
     <div className='text-black text-xs'>{product.rating.rate}</div>
    {
      product.added ? <div>IN THE CART</div> : 
      <button onClick={() => addToCart(product)}>ADD TO CART</button>
    }
    </div>
  )
}

//<div><img src={product.image} alt={product.name} /></div>
/*
<div className='text-black text-xs'>{data.name}</div>
<div>{data.category}</div>
<div>{data.price}</div>
<div>{data.rating}</div>
*/