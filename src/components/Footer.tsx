import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-16 p-4 text-white bg-main-red flex items-center text-center justify-center'>
      <Link href={"/"} className='font-bold text-xl'>RamenDev</Link>
    </div>
  )
}

export default Footer