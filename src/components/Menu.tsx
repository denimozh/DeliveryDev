"use client";

import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Links } from '@/constants';
import Link from 'next/link';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
        <div className='bg-red-100 rounded-xl p-1 hover:bg-red-200'>
            {!open ? <MenuIcon sx={{ fontSize: 40 }} onClick={() => setOpen(true)} className='text-red-600 hover:scale-110 sm:active:scale-110'/> :
            <CloseIcon sx={{ fontSize: 40 }} className='text-red-600 hover:scale-110' onClick={() => setOpen(false)}/>}
        </div>
        { open && (
        <div className='bg-red-400 text-white absolute left-0 top-0 h-screen w-3/4 flex flex-col gap-8 items-center justify-center z-10 shadow-2xl text-4xl '>
            <p className='text-3xl font-bold text-orange-100'>RamenDev</p>
            {Links.map(item => (
                <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                    <div className='flex items-center gap-2 w-56 justify-center border-2 border-red-200 rounded-full py-2 active:border-red-400 active:bg-red-600 '> 
                        <p className='text-center'>{item.title}</p>
                    </div>
                </Link>
            ))}
            <div className='flex flex-row gap-10 pt-5'>
                {!user ? <Link href={"/login"} onClick={() => setOpen(false)}>
                    <div className='flex items-center gap-2 border-2 rounded-full p-2 bg-orange-100 border-red-500 active:bg-red-600'>                
                        <PersonIcon sx={{ fontSize: 45 }} className='text-main-red active:text-orange-100'/>
                    </div>
                </Link>: 
                <Link href={"/login"} onClick={() => setOpen(false)}>
                    <div className='flex items-center gap-2 border-2 rounded-full p-2 bg-orange-100 border-red-500 active:bg-red-600'>                
                        <LocalShippingIcon sx={{ fontSize: 45 }} className='text-main-red active:text-orange-100'/>
                    </div>
                </Link>}
                <Link href={"/cart"} onClick={() => setOpen(false)}>
                    <div className='relative'>
                        <div className='flex items-center gap-2 border-2 rounded-full p-2 bg-orange-100 border-red-500 active:bg-red-600'>                
                            <ShoppingCartIcon sx={{ fontSize: 45 }} className='text-main-red active:text-orange-100'/>
                        </div>
                    </div>
                    
                </Link>
            </div>
        </div>)}
    </div>
  )
}

export default Menu