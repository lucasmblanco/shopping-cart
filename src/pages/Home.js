import React from 'react'
import ImageOne from '../assets/images/home/home-1.jpg'; 
import ImageTwo from '../assets/images/home/home-2.jpg';
import ImageThree from '../assets/images/home/home-3.jpg'; 
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='relative h-[calc(100vh_-_14rem)] text-3xl font-inter grid grid-cols-home grid-rows-home-rows z-0'>
      <img className='top-image-one-top 
      left-image-one-left w-image-width  
      rounded-xl overflow-hidden z-10 
      col-start-10 col-span-6 row-start-12 
      row-span-18 shadow-xl animate-fade-in-bck' src={ImageOne} alt='promo'>
      </img>
      <img className='top-image-one-top 
      left-image-one-left w-image-width  
      rounded-xl overflow-hidden z-0
      col-start-14 col-span-6 row-start-3 
      row-span-18 shadow-xl animate-fade-in-bck-2' src={ImageTwo} alt='promo'>
      </img>
      <img className='top-image-one-top 
      left-image-one-left w-image-width  
      rounded-xl overflow-hidden z-0
      col-start-6 col-span-6 row-start-3 
      row-span-18 shadow-xl animate-fade-in-bck-3' src={ImageThree} alt='promo'>
      </img>
      <div className='h-44 w-div-home-width bg-red-accent rounded-xl z-20 col-start-15
       row-start-14 shadow-xl border-solid border-light-red-accent border-2 animate-fade-in-bck-4' >
        <p className='m-3 w-50'>WE MAKE THE <span className='text-white-accent'>FUTURE</span> AVAILABLE</p>
        <div className='flex justify-evenly content-center'>
          <div className='flex items-center text-white-accent'>TODAY</div>
          <Link to='/shop' preventScrollReset={true} className='bg-black rounded-xl text-white-accent p-3 
          shadow-xl transition-all duration-500 hover:bg-light-red-accent'>SHOP NOW</Link>
          </div>

      </div>
    </div>
  )
}

/*
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
}*/
