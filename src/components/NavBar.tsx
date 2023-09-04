"use client"
import { useUserContext } from '@/context/UserContexr'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import {toast} from 'react-hot-toast'

const NavBar = () => {
const {setAuthChanged,authChanged} = useUserContext()
  const logOut = async () => {
    try {
        await axios.get('/api/users/logout')
        toast.success('Logout successful')
        setAuthChanged(!authChanged)
        
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
    }
}
  return (
    <div className='flex justify-between py-2 fixed px-10 border-b-[1px] w-full '>



<Link href="/">
      <div className='flex items-center gap-1'>
        <span className='text-3xl font-bold'>Car</span> <span className='text-3xl bg-gray-800 rounded-md text-yellow-500 px-1 font-bold'>Sync</span>
      </div>
      </Link>
      <div className='hidden md:flex gap-6'>
      <Link href="/rides">
        <h2 className='hover:bg-gray-100 p-2
               rounded-md cursor-pointer transition-all'>Rides</h2>
               </Link>
               <Link href="/profile">
        <h2 className='hover:bg-gray-100 p-2
               rounded-md cursor-pointer transition-all'>Account</h2>
               </Link>
        <button className='w-fit
         bg-yellow-400 py-1
        px-4  rounded-md
        '
  onClick={logOut}
        >Log Out</button>
      </div>

    </div>
    
    

  )
}

export default NavBar