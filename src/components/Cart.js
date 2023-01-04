import React from 'react'



export default function Cart({cart}) {
    
    return (
            <div className='absolute w-60 h-96 top-20 left-80 text-black rounded-xl backdrop-blur-xl font-inter text-center '>
                <div className='p-2'>CART</div>
                <hr className='p-2'/>
            <div className='overflow-y-auto h-80'>
            {
                cart.map((element) => {
                    return <div className='text-xs text-left p-3 flex' key={element.id}>
                        <div>{element.name}</div>
                        <div>{element.price}</div>
                    </div>
                })
            }
            </div>
            </div>
        )
    }


