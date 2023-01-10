import React from 'react'
import { Link } from 'react-router-dom';
//import Cart from './Cart';

export default function NavBar(){

  return(
    <nav className='w-80 h-16 rounded-xl rounded-tr-none rounded-br-none flex bg-red-accent shadow-3xl items-center 
    justify-center border-solid border-light-red-accent border-t-2 border-b-2 border-l-2 z-40'>
      <ul className='flex'>
      {
        ['HOME', 'SHOP', 'CONTACT'].map(element => {
           return <li className=' w-20 text-center m-2 ' key={element}>
          <Link to={ element === 'HOME' ? '/' : `/${element.toLowerCase()}`} 
           className='text-white font-inter'>
            {element}
          </Link>
          </li>
        })
      }
      </ul>
    </nav>
  )
}