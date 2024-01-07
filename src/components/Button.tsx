"use client";
import React from 'react'
import { ButtonProps } from '@/Types';
import Image from 'next/image';

const Button = ({ text, containerStyles, handleClick, btnType, textStyles, rightIcon, iconStyle, imgStyle}: ButtonProps) => {
    return (
      <button 
          className={`flex flex-row relative justify-center items-center outline-none; ${containerStyles}`} 
          type={btnType || 'button'} 
          onClick={handleClick}
          disabled={false} 
      >
        {rightIcon && (
            <div className={`relative ${iconStyle}`}>
              <Image src={rightIcon} alt='right icon' fill className={`${imgStyle}`}/>
            </div>
          )}
          <span className={`${textStyles}`}>
              {text}
          </span>
      </button>
    )
  }
  
  export default Button