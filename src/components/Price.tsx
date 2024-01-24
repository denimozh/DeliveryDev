"use client"
import { Checkbox } from '@mui/material'
import { red } from '@mui/material/colors'
import React, {useEffect, useState} from 'react'
import Button from './Button'
import { ProductType } from '@/Types'
import { useCartStore } from '@/utils/store'
import { toast } from 'react-toastify'

const Price = ({product} : {product: ProductType}) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [total, setTotal] = useState(product.price);
  const [selected, setSelected] = useState(0);
  const [checked, setChecked] = useState(false);

  const {addToCart} = useCartStore();

  useEffect(() => {
    setTotal(
        checked ? product.price + product.addOns[selected].additionalPrice : product.price - product.addOns[selected].additionalPrice
    );
  }, [selected, product])

  const handleCart =() => {
    addToCart({id: product.id, title: product.title, img: product.image, price: total,
    })

    toast.success("Item Added to Cart")
  }
  
  return (
    <div>
        <div className='flex flex-row items-center gap-16 pb-16'>
            <div onClick={handleCart}>
                <Button text='ADD TO CART' containerStyles='w-fit border-l-2 border-b-4 hover:bg-red-500 hover:border-red-800 active:bg-red-700 border-red-700 bg-red-500 py-5 px-7 rounded-full' textStyles='pl-4 pr-4 text-white font-bold' 
                  rightIcon='/menu.svg' iconStyle='p-2 rounded-lg w-8 h-8 bg-red-600' imgStyle='p-1' />
            </div>
          <p className='text-3xl text-red-600 font-bold'>${total}</p>
        </div>
        <div className='border-2 border-red-600'>
          <div className='flex flex-row'>
            <div className='basis-1/3 p-3 bg-red-500 font-bold'>
              <p className='text-xl text-white'>Additive</p>
            </div>
            <div className='basis-1/3 p-3 text-red-400 font-bold border-r-2 border-b-2 border-red-600'>
              <p className='text-xl'>Beverages</p>
            </div>
            <div className='basis-1/3 p-3 text-red-400 font-bold border-r-2 border-b-2 border-red-600'>
              <p className='text-xl'>Mochi</p>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-15 p-10'>
            {product.addOns?.map((addon, index) =>(
              <div className='flex items-center' >
                <Checkbox {...label}  onClick={() => {setSelected(index); !setChecked}} sx={{'& .MuiSvgIcon-root': { fontSize: 28 }, color: red[800], '&.Mui-checked': {color: red[600],},}}/>
                <p className='text-lg text-red-500'>{addon.title}</p>
                <div className='flex pl-8 text-lg text-red-600'>
                  +{addon.additionalPrice}$
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Price