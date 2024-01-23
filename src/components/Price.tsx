"use client";

import { ProductType } from '@/Types';
import { Checkbox } from '@mui/material'
import { red } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'


const Price = ({ product, price }: { product: ProductType, price:number }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [total, setTotal] = useState(product.price);
  const [checked, setChecked] = useState<boolean[]>([]);

  const handleCheckboxClick = (index: number) => {
    const newCheckedState = [...checked];
    newCheckedState[index] = !newCheckedState[index];
    setChecked(newCheckedState);
  };

  const handleClick = (index: number) => {
    setTotal(product.price + product.addOns[index].additionalPrice)
  }

  return (
    <div className='grid grid-cols-3 gap-15 p-10'>
            {product.addOns?.map((addon, index) =>(
              <div className='flex items-center' >
                <Checkbox {...label}  onChange={() => {handleCheckboxClick(index);handleClick(index);}}sx={{'& .MuiSvgIcon-root': { fontSize: 28 }, color: red[800], '&.Mui-checked': {color: red[600],},}}/>
                <p className='text-lg text-red-500'>{addon.title}</p>
                <div className='flex pl-8 text-lg text-red-600'>
                  +{addon.additionalPrice}$
                  
                </div>
              </div>
            ))}
    </div>

  )
}

export default Price