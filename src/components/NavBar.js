import React from 'react'
import { Link } from 'react-router-dom';
import { HiHome, HiOutlineShoppingBag, HiPhone } from 'react-icons/hi';

export default function NavBar() {
  return (
    <nav
      data-testid="navigation-bar"
      className="w-40 h-12 rounded-xl rounded-tr-none rounded-br-none flex bg-red-accent shadow-3xl items-center 
    justify-center border-solid border-light-red-accent border-t-2 border-b-2 border-l-2">
      <ul className="flex justify-around w-full ">
        <li className="text-white transition-all duration-500  hover:drop-shadow-nxl ">
          <Link data-testid="home-link" to={'/'} preventScrollReset={true}>
            <HiHome />
          </Link>
        </li>
        <li className="text-white transition-all duration-500 hover:drop-shadow-nxl">
          <Link data-testid="shop-link" to={'/shop'} preventScrollReset={true}>
            <HiOutlineShoppingBag />
          </Link>
        </li>

        <li className="text-white transition-all duration-500 hover:drop-shadow-nxl">
          <Link
            data-testid="contact-link"
            to={'/contact'}
            preventScrollReset={true}>
            <HiPhone />
          </Link>
        </li>
      </ul>
    </nav>
  );
} 