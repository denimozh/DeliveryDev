import React from 'react'
import Button from './Button'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';

const Hero = () => {
  return (
    <div className='pt-28 bg-hero-png bg-no-repeat bg-right-bottom pb-48 '>
        <div className='md:px-20'>
            <p className='text-5xl text-red-700 font-bold font lg:text-9xl'>YOUR ASIAN </p>
            <p className='text-4xl text-red-500 font-bold font pt-2 lg:text-9xl lg:pt-8 lg:text-red-700'>CULINARY DREAM</p>
        </div>
        <div className='md:px-20 flex flex-row pt-16'>
            <div className='flex flex-col basis-1/2'>
                <p className='text-3xl text-red-600 font-medium'>Welcome to our temporary - a place where every plate 
                of ramen becomes a real work of art that you can enjoy on your lips.</p>
                <div className='pt-24'>
                  <Button text='MAKE AN ORDER' containerStyles='animate-bounce-slow border-l-8 border-b-8 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-5 px-6 w-1/3 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero