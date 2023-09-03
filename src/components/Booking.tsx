"use client"
import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import RentalDuration from './RentalDuration'
import SelectedCar from './SelectedCar'
import { useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'



const stripePromise =  loadStripe(process.env.
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
function Booking() {
  const router = useRouter()

 
  const handleBook = async ()=>{
    
    const response = await axios.post("/api/create-payment-intent",{data:{amount:200}})
console.log(response)
    
   router.push(`/payment/${response.data}
   `)
  }
  return (
    <div className='p-5 '>
         <h2 className='text-[20px] font-semibold'>Selected Car</h2>
        <div className='border-[1px] p-5 
        rounded-md mb-5' >
            
        <SelectedCar />
        
        </div>
        <h2 className='text-[20px] font-semibold'>Booking</h2>
        <div className='border-[1px] p-5 
        rounded-md' >
            <RentalDuration />
        <AutocompleteAddress/>
       
        
        <button 
        onClick={handleBook} className='w-full
         bg-yellow-400
        p-1 rounded-md
        mt-4'>Book</button>
        
        </div> 
    </div>
  )
}

export default Booking