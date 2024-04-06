import { MenuType } from '@/Types';
import Link from 'next/link'
import React from 'react'

const getData = async () => {
  const res = await fetch("https://ramen-dev.vercel.app/api/categories", {cache:"no-store"})

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const MenuPage = async () => {
  const menu:MenuType = await getData()
  return (
    <div className='flex justify-center items-center xl:px-40 h-[96vh] pb-20'>
      <div className='flex flex-row sx:flex-col gap-8'>
        {menu.map((category) => (
          <Link href={`/menu/${category.slug}`} key={category.id} className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-red-700 hover:border-b-8 hover:rounded-lg p-8'>
            <div className='flex flex-col'>
              <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
                <img src={`./${category.image}`} className='w-[350px]'/>
              </div>
              <div className='pl-5 pt-7'>
                <p className='text-red-700 text-4xl font-bold'>{category.title}</p>
                <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>{category.description}</p>
              </div>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MenuPage