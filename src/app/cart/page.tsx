import Button from '@/components/Button'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] flex flex-row text-red-700 gap-10 px-20 pb-10'>
      <div className='w-1/2 p-4 flex flex-col justify-center gap-8'>
        <div className='flex items-center justify-between mb-4'>
          <img src='/ChickenRamenSoup.png' alt='' className='w-[200px] h-[200px]'/>
          <h1 className='text-xl font-bold'>Chicken Ramen Soup</h1>
          <h2 className='font-bold'>$24.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <img src='/ChickenRamenSoup.png' alt='' className='w-[200px] h-[200px]'/>
          <h1 className='text-xl font-bold'>Chicken Ramen Soup</h1>
          <h2 className='font-bold'>$24.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <img src='/ChickenRamenSoup.png' alt='' className='w-[200px] h-[200px]'/>
          <h1 className='text-xl font-bold'>Chicken Ramen Soup</h1>
          <h2 className='font-bold'>$24.90</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      <div className='w-1/2 p-10 flex flex-col gap-8 justify-center text-white bg-red-400 rounded-[100px]'>
        <div className='flex justify-between'>
          <span className='text-xl'>Subtotal</span>
          <span className='text-xl font-bold'>$24.90</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-xl'>Service Cost</span>
          <span className='text-xl font-bold'>$5.00</span>
        </div>
        <div className='flex justify-between'>
          <span className='text-xl'>Delivery Cost</span>
          <span className='text-xl font-bold'>FREE</span>
        </div>
        <hr className='my-2'/>
        <div className='flex justify-between'>
          <span className='text-xl'>TOTAL COST(INCL. VAT)</span>
          <span className='text-xl font-bold'>$32.40</span>
        </div>
        <div className='flex justify-center pt-10'>
          <Button text='CHECKOUT' containerStyles='w-1/2 border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-5 px-7 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1'/>
        </div>
      </div>
    </div>
  )
}

export default CartPage