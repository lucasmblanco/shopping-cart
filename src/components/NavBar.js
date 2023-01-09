import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';

export default function NavBar({products,  deleteItem}){

  const [open, setOpen] = useState(false);

  function openCart(){
    setOpen(!open); 
  }

  return(
    <nav className=' sticky top-5 mx-auto w-96 h-16 rounded-xl flex bg-red-accent shadow-3xl items-center 
    justify-center shadow-xl border-solid border-light-red-accent border-2 z-40'>
      <ul className='flex'>
      {
        ['HOME', 'SHOP', 'CONTACT'].map(element => {
           return <li className='p-5' key={element}>
          <Link to={ element === 'HOME' ? '/' : `/${element.toLowerCase()}`} 
           className='text-white font-inter'>
            {element}
          </Link>
          </li>
        })
      }
      <li className='p-5'><button className='text-white font-inter' onClick={openCart}>CART</button></li>
      { open && <Cart products={products} deleteItem={deleteItem}/> }
      </ul>
    </nav>
  )
}