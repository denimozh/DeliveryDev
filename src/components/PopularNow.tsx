import React from 'react'
import Button from './Button'
import { ProductType } from '@/Types';

const getData = async () => {
  const res = await fetch("https://ramen-dev.vercel.app/api/products", {cache:"no-store"})

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const PopularNow = async () => {
  const featuredProducts:ProductType[] = await getData();
  return (
    <div className='pt-10 xl:px-40 pb-36'>
      <p className='text-red-700 text-7xl font-bold'>POPULAR NOW</p>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-20 gap-8'>
        {featuredProducts.map((item) => (
          <div key={item.id} className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-l-8 hover:border-b-8 hover:rounded-lg'>
            <div className=' p-4 '>
              <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
                <img src={`./${item.image}`} className='w-[350px]'/>
              </div>
              <div className='pl-5 pt-7'>
                <p className='text-red-700 text-4xl font-bold'>{item.title}</p>
                <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>{item.description}</p>
              </div>
              <div className='px-8 flex justify-between items-center pt-8 pb-8'>
                <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£{item.price}</p>
                <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                    rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
              </div>
            </div>
          </div> 
        ))}
              
      </div>
    </div>
  )
}

export default PopularNow