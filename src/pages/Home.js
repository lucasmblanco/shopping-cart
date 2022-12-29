import React from 'react'
import ImageOne from '../assets/images/home/home-1.jpg'; 
import ImageTwo from '../assets/images/home/home-2.jpg';
import ImageThree from '../assets/images/home/home-3.jpg'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='h-[calc(100vh_-_15rem)] text-3xl font-inter flex justify-content'>
      <div className='absolute top-image-one-top left-image-one-left w-image-width  rounded-xl overflow-hidden z-10'>
        <img  src={ImageOne} alt='promo'></img>
      </div>
      <div className='absolute top-80 left-image-three-left w-image-width  rounded-xl overflow-hidden z-0'>
        <img src={ImageThree} alt="promo-three"/>
      </div>
      <div className='absolute top-72 left-image-two-left w-image-width rounded-xl overflow-hidden '>
        <img src={ImageTwo} alt="promo two"/>
      </div>
      <div className='h-44 w-div-home-width bg-red-accent rounded-xl z-20 text-left'>
        <p className='m-3 w-50'>WE MAKE THE FUTURE AVAILABLE</p>
        <div className='flex justify-between p-3 content-center'>
          <div className='flex items-center text-white ' >TODAY</div>
          <Link to='/shop' className='bg-black rounded-xl text-white p-3'>SHOW NOW</Link>
          </div>

      </div>
    </div>
  )
}
