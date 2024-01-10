import Image from 'next/image'
import React from 'react'
import Button from './Button'

const AboutUs = () => {
  return (
    <div className='md:px-20 pt-48 pb-48'>
      <p className='text-7xl text-red-700 font-bold tracking-wider'>A TASTE OF <span className='underline underline-offset-2 text-red-500 '>ASIAN TRADITION</span> <br></br>IN EVERY SERVING</p>
      <div className='flex flex-row'>
        <div className='basis-1/2 pt-24'>
          <p className='text-2xl leading-normal text-red-600 font-medium'>Discover the magic of Asian cuisine with our times. Each serving is filled with authentic flavors and aromas of Asia
            , which attract visitors from different parts of the world. Immerse yourself in the world of unique recipes and tradition that
            give our novel its unique taste.
          </p>
          <p className='pt-14 text-2xl leading-normal text-red-600 font-medium'>Our novelties promise sweet, sour and spicy notes, an exquiste combination of ingredients and unusual textures to capture
            your imagination and satify the most demanding taste preferences.
          </p>
          <div className='pt-28'>
                  <Button text='MAKE AN ORDER' containerStyles=' border-l-8 border-b-8 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-5 px-6 w-1/3 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
                </div>
        </div>
        <div className='flex basis-1/2 justify-center items-center'>
          <div className='pl-10'>
            <img src='about-pic.png' className='bg-red-400 rounded-full p-24 animate-spin-slow'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs