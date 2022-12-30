import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar(){
  return(
    <nav className=' sticky top-5 mx-auto w-96 h-16 rounded-xl flex bg-red-accent shadow-3xl items-center justify-center shadow-xl border-solid border-light-red-accent border-2'>
      <ul className='flex'>
      {
        ['HOME', 'SHOP', 'CONTACT', 'CART'].map(element => {
           return <li className='p-5' key={element}>
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