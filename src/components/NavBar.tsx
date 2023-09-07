"use client"
import { useUserContext } from '@/context/UserContexr'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React,{useState} from 'react'
import {toast} from 'react-hot-toast'

const NavBar = () => {
  const router = useRouter()
const {setAuthChanged,authChanged,user} = useUserContext()
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logOut = async () => {
    try {
        await axios.post('/api/users/logout')
        toast.success('Logout successful')
        setAuthChanged(!authChanged)
        router.push("/login")
        
        
    } catch (error:any) {
        console.log(error.message);
        toast.error(error.message)
    }
}

const toggleMobileMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
};
  return (
    <div className='flex justify-between py-2 fixed px-10 border-b-[1px] w-full items-center'>
  <Link href='/'>
    <div className='flex items-center gap-1'>
      <span className='text-3xl font-bold'>Car</span>
      <span className='text-3xl bg-gray-800 rounded-md text-yellow-500 px-1 font-bold'>Sync</span>
    </div>
  </Link>

  {/* Hamburger menu button for mobile */}
  <div className='md:hidden'>
    {!mobileMenuOpen ? (
      <button className='text-xl font-bold' onClick={toggleMobileMenu}>
        &#9776;
      </button>
    ) : (
      <button className='text-xl font-bold' onClick={toggleMobileMenu}>
        &#xd7;
      </button>
    )}
  </div>

  {user && (
    // Only render the mobile menu and desktop menu items if user exists
    <>
      {mobileMenuOpen && (
        <div className='md:hidden p-2 items-center justify-center flex flex-col absolute top-16 left-0 w-full bg-white border-t-[1px]'>
          <Link href='/rides'>
            <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>
              Rides
            </h2>
          </Link>
          <Link href='/profile'>
            <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>
              Account
            </h2>
          </Link>
          <button
            className='w-fit bg-yellow-400 py-1 px-4 rounded-md'
            onClick={logOut}
          >
            Log Out
          </button>
        </div>
      )}

      {/* Desktop menu items */}
      <div className='hidden md:flex gap-6'>
        <Link href='/rides'>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>
            Rides
          </h2>
        </Link>
        <Link href='/profile'>
          <h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>
            Account
          </h2>
        </Link>
        <button
          className='w-fit bg-yellow-400 py-1 px-4 rounded-md'
          onClick={logOut}
        >
          Log Out
        </button>
      </div>
    </>
  )}
</div>

    
    

  )
}

export default NavBar