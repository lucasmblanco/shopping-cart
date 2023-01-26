import React from 'react';
import { Link } from 'react-router-dom';
import ImageOne from '../assets/images/home/home-1.jpg';
import ImageTwo from '../assets/images/home/home-2.jpg';
import ImageThree from '../assets/images/home/home-3.jpg';

export default function Home() {
  return (
    <div
      data-testid="home-component"
      className="relative h-[calc(100vh_-_14rem)] text-3xl font-inter flex flex-col gap-6 desktop:grid auto-rows-auto
       grid-cols-1 desktop:grid-cols-2 place-items-center z-0 p-5">
      <img
        className="relative desktop:left-[13rem] sm:w-[15rem] sm:h-[50rem] desktop:w-image-width
      rounded-xl overflow-hidden z-0
      shadow-xl animate-fade-in-bck"
        src={ImageOne}
        alt="promo"
      />
      <img
        className=" relative desktop:right-[13rem] sm:w-[15rem] sm:h-[50rem]  desktop:w-image-width
      rounded-xl overflow-hidden z-0
      shadow-xl animate-fade-in-bck-2"
        src={ImageTwo}
        alt="promo"
      />

      <img
        className="relative  desktop:left-[28rem] sm:w-[15rem] sm:h-[50rem] desktop:bottom-[5rem] desktop:w-image-width
      rounded-xl overflow-hidden z-10
      shadow-xl animate-fade-in-bck-3"
        src={ImageThree}
        alt="promo"
      />

      <div
        className="relative desktop:right-[10rem] text-base desktop:text-2xl desktop:bottom-[5rem] h-[20rem] w-[17rem] desktop:h-44 desktop:w-div-home-width
       bg-red-accent rounded-xl z-20  shadow-xl border-solid border-light-red-accent border-2 animate-fade-in-bck-4 text-center p-2">
        <p className="m-3 w-50">
          WE MAKE THE <span className="text-white-accent">FUTURE</span>{' '}
          AVAILABLE
        </p>
        <div className="flex justify-center desktop:justify-evenly content-center mr-2">
          <div className="flex items-center text-white-accent text-xl desktop:text-2xl">
            TODAY
          </div>
          <Link
            to="/shop"
            preventScrollReset
            className="bg-black rounded-xl text-white-accent p-2 desktop:p-3
          shadow-xl transition-all duration-500 hover:bg-light-red-accent ml-2">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

