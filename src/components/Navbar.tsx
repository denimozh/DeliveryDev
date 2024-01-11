"use client";

import React from 'react'
import { Menu } from '.'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("about");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }

  return (
    <div className=' text-main-red p-4 pt-6 flex items-center justify-between md:px-20 xl:px-40'>
        <div className='md:hidden pr-5'>
            <Menu />
        </div>
        <div className='text-3xl font-bold'>
            <Link href={"/"}>
                RamenDev
            </Link>
        </div>
        <div className='hidden md:flex gap-5 border border-red-400 rounded-full px-6'>
            <Link href={"/menu"}>
                <div className='capitalize text-xl py-4 px-4'>
                    <div className='flex flex-row items-center gap-2'>
                        <MenuIcon />
                        <p>MENU</p>
                    </div>
                </div>
            </Link>
            <Link href={"/delivery"}>
                <div className='capitalize text-xl py-4 px-4'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <LocalShippingIcon />
                        <p>DELIVERY</p>
                    </div>
                </div>
            </Link>
            <div className='capitalize text-xl py-4 px-4'>
                <a href='contacts'>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <EmailIcon />
                        <p>CONTACTS</p>
                    </div>
                </a>
            </div>
        </div>
        <div className=''>
            <div className='flex flex-row gap-10 invisible lg:visible'>
                <Link href={'/login'}>
                    <div className='flex items-center gap-2 border-2 rounded-full p-2  border-red-500 hover:bg-red-600'>                
                        <PersonIcon sx={{ fontSize: 45 }} className='text-main-red hover:text-orange-100'/>
                    </div>
                </Link>
                <Link href={'/cart'}>
                    <div className='flex items-center gap-2 border-2 rounded-full p-2  border-red-500 hover:bg-red-600'>                
                            <ShoppingCartIcon sx={{ fontSize: 45 }} className='text-main-red hover:text-orange-100'/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar