import React, {useState } from 'react'
//import ProductInCart from './ProductInCart'
import ProductInCart from './ProductInCart';

export default function Cart({products, deleteProduct, addQuantity, total}) {

    const [open, setOpen] = useState(false);


    function openCart(){
        setOpen(!open); 
    }

    return (
        <> 
        <button className='text-white font-inter rounded-tr-xl rounded-br-xl bg-red-accent  border-light-red-accent border-t-2 border-b-2 border-r-2 p-4' onClick={openCart}>CART</button>
        { open && 
                <div className='absolute w-60 h-96 top-20 left-80 text-black rounded-xl backdrop-blur-xl font-inter text-center '>
                    <div className='p-2'>CART</div>
                    <hr className='p-2'/>
                    <div className='overflow-y-auto h-80'>
                        {
                            products.map((product) => {
                                return <ProductInCart key={product.id} product={product} deleteProduct={deleteProduct} addQuantity={addQuantity}/>
                            })
                        }
                    </div>
                    <hr className='p-2'/>
                    <div> El total es {total}</div>
            </div>
        }
        </>
        )
    }
