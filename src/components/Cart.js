import React, { useEffect, useState } from 'react'
import ProductInCart from './ProductInCart'

export default function Cart({products, deleteItem}) {

    const [cart, setCart] = useState(products)

  

    useEffect(() => {
        setCart(products)
    }, [products])
//  RECIBIR COMPONENTE PRODUCTO, CAMBIAR Y CREAR BOTONES Y DISEÑO SEGUN EN DONDE SE MUESTRE 
    /*
    function searchIndex(array, product){
        return  array.findIndex(element => element.name === product.name)
       }
  
*/


    
    return (
            <div className='absolute w-60 h-96 top-20 left-80 text-black rounded-xl backdrop-blur-xl font-inter text-center '>
                <div className='p-2'>CART</div>
                <hr className='p-2'/>
            <div className='overflow-y-auto h-80'>
            {
                cart.map((product) => {
                    return <ProductInCart key={product.id} product={product} deleteItem={deleteItem}/>
                })
            }
            </div>
            </div>
        )
    }


