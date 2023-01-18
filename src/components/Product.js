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
    <div className=' h-product-cards bg-white rounded-[calc(0.5rem_+_2px)] flex flex-col items-center shadow-xl border-solid border-2
     border-light-red-accent animate-fade-in-bck-open'>
     <div className='w-80 h-56 p-5 flex justify-center'><img className="h-full "src={product.image} alt={product.name} /></div>
    <div className=' flex justify-between flex-col basis-full items-center rounded-br-lg text-white rounded-bl-lg bg-red-accent h-full w-full text-center'>
      <div className=' text-sm text-center p-3 w-full '>{product.name}</div>
      <div className='text-gray-600 text-xs w-full'>{product.category.toUpperCase()}</div>
      <div className=' text-xs w-full'>{product.rating.rate + '/5'}</div>
      <div className=' text-2xl w-full m-none bg-red-500 p-3 tracking-wide'>{'$' + product.price}</div>
     
    {
      product.added ? <div className='text-lg bg-red-accent p-4 m-3 border-2 border-transparent'>IN THE CART</div> : 
      <button className='text-lg bg-red-accent p-4 m-3 rounded-xl hover:bg-light-red-accent border-light-red-accent hover:border-red-accent border-2 transition-all duration-500' onClick={() => addProduct(product)}>ADD TO CART</button>
    }
    </div>
    </div>
  )
}
