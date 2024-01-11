import Link from 'next/link'
import React from 'react'

const MenuPage = () => {
  return (
    <div className='flex justify-center items-center xl:px-40 h-[96vh] pb-20'>
      <div className='flex flex-row sx:flex-col gap-8'>
      <Link href="/menu/ramen" className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-red-700 hover:border-b-8 hover:rounded-lg p-8'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
              <img src='./ChickenRamenSoup.png' className='w-[350px]'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-3xl font-bold'>Tasty Ramen</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Savour the taste of perfection with our exquisite homemade Ramen Menu</p>
            </div>
            
          </div>
        </Link>
        <Link href="/menu/soup" className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-red-700 hover:border-b-8 hover:rounded-lg p-8'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-14 pb-5 group-hover:animate-spin-slow'>
              <img src='./ThaiTomYamSoup.png' className='scale-125'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-3xl font-bold'>Fresh Soups</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Beautiful soups made healthy - combined with bold falvours and unique spices</p>
            </div>
            
          </div>
        </Link>
        <Link href="/menu/pho" className='group border-red-500 border-2 hover:bg-[#E8D8C7] hover:border-red-700 hover:border-b-8 hover:rounded-lg p-8'>
          <div className='flex flex-col'>
            <div className='flex justify-center items-center pt-10 pb-5 group-hover:animate-spin-slow'>
              <img src='./ChickenRamenSoup.png' className='w-[350px]'/>
            </div>
            <div className='pl-5 pt-7'>
              <p className='text-red-700 text-3xl font-bold'>Healthy Pho</p>
              <p className='text-red-500 text-xl pr-4 pt-5 leading-[1.9rem]'>Pho Paradise: Healthy, good tasting pho made out of fresh ingredients</p>
            </div>
            
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MenuPage