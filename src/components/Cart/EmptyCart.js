import React from 'react'
import {HiOutlineEmojiSad } from 'react-icons/hi'

export default function EmptyCart() {
  return (
    <div className='flex flex-col items-center justify-center text-lightest-blue-accent h-full text-2xl '>
                            <HiOutlineEmojiSad />
                            <div className='text-lg p-2'>Oops! Your cart is empty!</div>
    </div>
  )
}
