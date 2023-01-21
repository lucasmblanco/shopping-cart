import React from 'react';
import {
  RiInstagramFill,
  RiFacebookCircleFill,
  RiGithubFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { HiLocationMarker } from 'react-icons/hi';
import storeFront from '../assets/images/contact/electronic-things-store.jpg';

export default function Contact() {
  return (
    <div
      data-testid="contact-component"
      className=" flex flex-col items-center justify-center h-[calc(100vh_-_14rem)] text-3xl font-inter">
      <img
        className="w-[60rem] h-[30rem] m-6 overflow-hidden rounded-xl animate-fade-in-bck-open shadow-xl"
        src={storeFront}
        alt="Store front"
      />
      <div
        className="flex flex-col justify-center items-center relative
      top-[-60px] bg-red-accent rounded-xl p-4 text-white-accent shadow-xl border-2 border-light-red-accent animate-fade-in-bck-open">
        <span className="inline-box p-2">FIND US</span>
        <div className="flex items-center justify-center text-sm">
          <HiLocationMarker />
          <span className="text-sm pl-2">Rodeo Drive 42, Los Angeles USA</span>
        </div>
        <div className="flex w-full justify-around m-4">
          <a
            className="transition-all duration-500  hover:drop-shadow-nxl"
            href="https://github.com/lucasmblanco"
            target="_blank"
            rel="noreferrer">
            <RiGithubFill />
          </a>
          <a
            className="transition-all duration-500  hover:drop-shadow-nxl"
            href="https://www.youtube.com/watch?v=G1IbRujko-A"
            target="_blank"
            rel="noreferrer">
            <RiInstagramFill />{' '}
          </a>
          <a
            className="transition-all duration-500  hover:drop-shadow-nxl"
            href="https://www.youtube.com/watch?v=G1IbRujko-A"
            target="_blank"
            rel="noreferrer">
            <RiFacebookCircleFill />
          </a>
          <a
            className="transition-all duration-500  hover:drop-shadow-nxl"
            href="https://www.youtube.com/watch?v=G1IbRujko-A"
            target="_blank"
            rel="noreferrer">
            <RiTwitterFill />
          </a>
        </div>
      </div>
    </div>
  );
}
