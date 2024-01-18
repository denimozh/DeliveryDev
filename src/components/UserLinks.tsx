"use client"

import Link from "next/link"
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import { signOut, useSession } from "next-auth/react";

const UserLinks = () => {
  const {status} = useSession()
  return (
    <div>
        {status ==="authenticated" ? (
            <div className="flex flex-row gap-8 items-center">
                <Link href={'/orders'}>
                    <div className='flex items-center gap-2 border-2 rounded-full p-2  border-red-500 hover:bg-red-500'>                
                        <InfoIcon sx={{ fontSize: 45 }} className='text-red-400 hover:text-orange-100'/>
                    </div>
                </Link>      
                <span onClick={()=>signOut()} className="cursor-pointer">Logout</span>     
             </div>
        ) : (
            <Link href={'/login'}>
                <div className='flex items-center gap-2 border-2 rounded-full p-2  border-red-500 hover:bg-red-600'>                
                    <PersonIcon sx={{ fontSize: 45 }} className='text-main-red hover:text-orange-100'/>
                </div>
            </Link>
        )}
    </div>
  )
}

export default UserLinks