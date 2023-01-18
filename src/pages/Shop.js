import React from 'react'
import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { AiOutlineLoading } from "react-icons/ai";

export default function Shop({addProduct, checkProductStatus}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData(){
      try{
        const response = await fetch('https://fakestoreapi.com/products/category/electronics');
        const  data  = await response.json(); 
        setProducts([...data]); 
        setIsLoading(false)
      } catch(err){
        console.log(err); 
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };

  }, []); 

  if(isLoading){
    return <div className='flex items-center justify-center min-h-[calc(100vh_-_14rem)]'>
              <div className='backdrop-blur-xl backdrop-blur-3xl backdrop-brightness-50 text-white-accent p-3 rounded-xl animate-fade-in-bck-open'><span className='inline-block animate-spin'><AiOutlineLoading /></span></div>
            </div>
  }
  
  return (
    <div className='min-h-[calc(100vh_-_14rem)] flex justify-center'>
    <div className='w-10/12 text-3xl font-inter grid grid-cols-3 grid-rows-2 gap-10 p-10'>
    {
      products.map(product => {
        const status = checkProductStatus(product.id); 
        return <Product key={product.id} data={product} addProduct={addProduct} quantity={1} status={status}/> 
      })
     }
    </div>
    </div>
  )
}
