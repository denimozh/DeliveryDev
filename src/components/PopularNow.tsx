import React from 'react'
import Button from './Button'

const PopularNow = () => {
  return (
    <div className='pt-10 px-20 pb-36'>
      <p className='text-red-700 text-7xl font-bold'>POPULAR NOW</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-20 gap-8'>
        <div className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-l-8 hover:border-b-8 hover:rounded-lg'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
              <img src='./ChickenRamenSoup.png' className='w-[350px]'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-4xl font-bold'>CHICKEN RAMEN SOUP</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Spicy broth - based on chicken broth, coconut, milk, ramen paste, lemongrass, lime leaves. Contains
              carrots, 2 eggs and vegtables</p>
            </div>
            <div className='px-8 flex justify-between items-center pt-8 pb-8'>
              <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£32</p>
              <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
            </div>
          </div>
        </div>
        <div className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-l-8 hover:border-b-8 hover:rounded-lg'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
              <img src='./MisoRamen.png' className='scale-[1.15] w-[350px]'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-4xl font-bold'>MISO RAMEN SOUP</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Spicy Miso - based on chicken broth, mushrooms, oil paste, ramen paste, lemongrass, herbs. Contains
              deep fired ramen, 2 eggs and vegtables</p>
            </div>
            <div className='px-8 flex justify-between items-center pt-8 pb-8'>
              <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£32</p>
              <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
            </div>
          </div>
        </div>
        <div className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-l-8 hover:border-b-8 hover:rounded-lg'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
              <img src='./SeafoodTomYumSoup.png' className='scale-105 w-[350px]'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-4xl font-bold'>SEAFOOD TOM YUM SOUP</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Contains Seafood - Shrimp, Salmon, Milk, Seafood paste, lemongrass, lime leaves. Contains
              sweet and sour rice and vegtables</p>
            </div>
            <div className='px-8 flex justify-between items-center pt-8 pb-8'>
              <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£32</p>
              <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
            </div>
          </div>
        </div>
        <div className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-l-8 hover:border-b-8 hover:rounded-lg'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-16 group-hover:animate-spin-slow'>
              <img src='./ShrimpPoke.png' className='scale-125 w-[350px]'/>
            </div>
            <div className='pl-5 pt-10'>
              <p className='text-red-700 text-4xl font-bold'>POKE WITH SHRIMP</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Fresh Shrimp - based with white sauce, bell peppers, green pepers, lemongrass, lime leaves, herbs. Contains
              and is filled with boiled white rice</p>
            </div>
            <div className='px-8 flex justify-between items-center pt-8 pb-8'>
              <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£32</p>
              <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
            </div>
          </div>
        </div>
        <div className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-l-8 hover:border-b-8 hover:rounded-lg'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
              <img src='./ThaiTomYamSoup.png'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-4xl font-bold'>THAI TOM YAM SOUP</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Thai Spicy broth - based on chicken broth, coconut, milk, ramen paste, lemongrass, lime leaves. Contains
              carrots, 2 eggs and vegtables</p>
            </div>
            <div className='px-8 flex justify-between items-center pt-8 pb-8'>
              <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£32</p>
              <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
            </div>
          </div>
        </div>
        <div className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-l-8 hover:border-b-8 hover:rounded-lg'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
              <img src='./VietnamesePho.png'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-4xl font-bold'>VIETNAMESE PHO</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Rich Natural Duck Broth - based on Duck broth, coconut, milk, ramen paste, lemongrass, lime leaves. Contains
              carrots and vegtables</p>
            </div>
            <div className='px-8 flex justify-between items-center pt-8 pb-8'>
              <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£32</p>
              <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center pt-16'>
        <Button text='SHOW MENU' containerStyles=' border-l-8 border-b-8 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-5 px-6 w-1/6 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
      </div>
    </div>
  )
}

export default PopularNow