import { ProductType } from '@/Types'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  params:{category:string}
}

const getData = async (category:string) => {
  const res = await fetch(`https://ramen-dev.vercel.app/api/products?cat=${category}`, {cache:"no-store"})

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const CategoryPage = async ({params}:Props) => {

  const products:ProductType[] = await getData(params.category)
  return (
    <div className='h-full'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 pt-20 gap-8 px-40 pb-20'>
        {products.map((item) => (
          <Link className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-red-700 hover:border-b-8 hover:rounded-lg p-4' href={`/product/${item.id}`} key={item.id}>
              <div>
                <div className='flex flex-col'>
                  <div className='flex justify-center items-center pt-8 pb-4 group-hover:animate-spin-slow'>
                    <img src={`${item.image}`} />
                  </div>
                  <div className='pl-5 pt-7'>
                    <p className='text-red-700 text-3xl font-bold'>{item.title}</p>
                    <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>{item.description}</p>
                  </div>
                  <div className='px-8 flex justify-between items-center pt-8 pb-8'>
                    <p className='text-xl bg-red-500 rounded-full p-3 text-white border-l-2 border-b-4 border-red-700'>£{item.price}</p>
                    <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-3 px-8 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                        rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
                  </div>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage