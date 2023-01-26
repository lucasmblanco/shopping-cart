import React from 'react'
import logo from '../assets/logo-et.png';

export default function Header() {
  return (
    <div className=" h-32 lg:h-44 flex justify-center">
      <img className="m-10 object-cover" src={logo} alt="company-logo"></img>
    </div>
  );
}
