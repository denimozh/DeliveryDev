
import React from 'react'
import {  singleProduct } from '@/constants'
import Button from '@/components/Button'
import { Checkbox } from '@mui/material';
import { red } from '@mui/material/colors';
import { ProductType } from '@/Types';
import Price from '@/components/Price';
import DeleteButton from '@/components/DeleteButton';

const getData = async (id:string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {cache:"no-store"})

  if(!res.ok){
    throw new Error("Failed!");
  }

  return res.json()
}

const SingleProduct = async ({params}:{params:{id:string}}) => {

  const singleProduct : ProductType = await getData(params.id)

  return (
    <div className='flex flex-row gap-10 xl:px-40 py-16 relative'>
      <div className='basis-1/2 flex-col border-2 border-red-500'>
        <div className='flex items-center justify-center p-20'>
          <img src={singleProduct.image} className=' pb-14 scale-125 pt-10'/>
        </div>
        <div className='flex flex-row border-t-2 border-red-500'>
          <div className='basis-1/4  border-red-500 p-4'>
            <p className='text-red-600 text-xl'>PROTIENS</p>
            <p className='text-red-600 font-bold text-2xl pt-1'>{singleProduct.protiens} g</p>
          </div>
          <div className='basis-1/4 border-l-2 border-red-500 p-4'>
            <p className='text-red-600 text-xl'>FAT</p>
            <p className='text-red-600 font-bold text-2xl pt-1'>{singleProduct.fat} g</p>
          </div>
          <div className='basis-1/4 border-l-2 border-red-500 p-4'>
            <p className='text-red-600 text-xl'>CARBOHYDRATES</p>
            <p className='text-red-600 font-bold text-2xl pt-1'>{singleProduct.carbs} g</p>
          </div>
          <div className='basis-1/4 border-l-2 border-red-500 p-4'>
            <p className='text-red-600 text-xl'>CALORIES</p>
            <p className='text-red-600 font-bold text-2xl pt-1'>{singleProduct.calories} kcal</p>
          </div>
        </div>
      </div>
      <div className='basis-1/2'>
        <p className='text-5xl text-red-600 font-medium underline decoration-4 underline-offset-[28px] pb-16'>{singleProduct.title}</p>
        <p className='text-xl text-red-700'>{singleProduct.description}</p>
        <p className='py-8 text-2xl text-red-700'>Approx Weight: {singleProduct.weight}g</p>
        <Price product={singleProduct}/>
      </div>
      <div className='pt-10'>
        <DeleteButton id={singleProduct.id}/>
      </div>
    </div>
  )
}

export default SingleProduct