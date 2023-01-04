import React from 'react'
import { useEffect, useState } from 'react';
import Product from '../components/Products'; 

export default function Shop({addProduct}) {
  const [products, setProducts] = useState([])
 // const [isLoading, SetIsLoading] = useState(false); 

  useEffect( () => {
    async function fetchData(){
      try{
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        const  data  = await response.json(); 
        setProducts([...data]); 
      } catch(err){
        console.log(err); 
      }
    }
    fetchData();
  }, []); 
  

  return (
    <div className='min-h-[calc(100vh_-_15rem)] flex justify-center'>
    <div className='w-6/12 text-3xl font-inter grid grid-cols-3 grid-rows-2  gap-20 p-10'>
    {products.map(product => {
      return <Product key={product.id} data={product} addProduct={addProduct}/> 
     })}
    </div>
    </div>
  )
}
