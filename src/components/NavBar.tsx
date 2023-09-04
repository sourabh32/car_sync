import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between
    p-3 px-10 border-b-[1px] '>
       
        <div className='flex items-center gap-1'>
           <span className='text-3xl font-bold'>Car</span> <span className='text-3xl bg-gray-800 rounded-md text-yellow-500 px-1 font-bold'>Sync</span>
           </div>
           <div className='hidden md:flex gap-6'>
               <h2 className='hover:bg-gray-100 p-2
               rounded-md cursor-pointer transition-all'>Home</h2>
               <h2 className='hover:bg-gray-100 p-2
               rounded-md cursor-pointer transition-all'>History</h2>
               <h2 className='hover:bg-gray-100 p-2
               rounded-md cursor-pointer transition-all'>Help</h2>
           </div>
    
      
   </div>

  )
}

export default NavBar