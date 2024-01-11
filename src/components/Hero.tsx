import React from 'react'
import Button from './Button'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';

const Hero = () => {
  return (
    <div className='relative pt-28 xl:px-40 bg-no-repeat bg-right-bottom pb-48 '>
        <div className=''>
            <p className='text-5xl text-red-700 font-bold font lg:text-9xl'>YOUR ASIAN </p>
            <p className='text-4xl text-red-500 font-bold font pt-2 lg:text-9xl lg:pt-8 lg:text-red-700'>CULINARY DREAM</p>
        </div>
        <div className='flex flex-row pt-16'>
            <div className='flex flex-col basis-1/2'>
                <p className='text-3xl text-red-600 font-medium'>Welcome to our temporary - a place where every plate 
                of ramen becomes a real work of art that you can enjoy <br></br>on your lips.</p>
                <div className='pt-24'>
                  <Button text='MAKE AN ORDER' containerStyles=' border-l-8 border-b-8 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-5 px-6 w-1/3 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
                </div>
            </div>
            <div className='absolute z-10 bottom-4 right-0 pl-5'>
              <img src='./hero-bg.png' className='scale-90 animate-wiggle'/>
            </div>
        </div>
    </div>
  )
}

export default Hero