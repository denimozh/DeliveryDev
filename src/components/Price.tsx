"use client";

import { ProductType } from '@/Types';
import { Checkbox } from '@mui/material'
import { red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'

const Price = ({ product }: { product: ProductType }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [total, setTotal] = useState(product.price);
  const [price, setPrice] = useState(product.price);
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    setTotal(
        product.price + product.addOn[clicked].additionalPrice
    )
  }, [clicked, product])

  return (
    <div className='grid grid-cols-3 gap-10 p-10'>
            {product.addOn?.map((option, index) =>(
              <div className='flex items-center' >
                <Checkbox {...label} onClick={() => setClicked(index)} sx={{'& .MuiSvgIcon-root': { fontSize: 28 }, color: red[800], '&.Mui-checked': {color: red[600],},}}/>
                <p className='text-lg text-red-500'>{option.title}</p>
                <div className='flex pl-8 text-lg text-red-600'>
                  +{option.additionalPrice}$
                  
                </div>
              </div>
            ))}
    </div>

  )
}

export default Price