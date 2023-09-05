"use client"
import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import RentalDuration from './RentalDuration'
import SelectedCar from './SelectedCar'
import { useRouter } from 'next/navigation'

import axios from 'axios'
import { useRideContext } from '@/context/RideContext'
import ErrorPage from './ErrorPage'




function Booking() {
  const router = useRouter()
  const {selectedCar,dropOff,pickUp,startTime,endTime} = useRideContext()
  console.log(selectedCar)
 const visiblity = dropOff.length>0 && pickUp.length>0 && startTime.length>0 && endTime.length>0 
  const handleBook = async ()=>{
    
    const response = await axios.post("/api/create-payment-intent",{data:{amount:200}})
console.log(response)
    
   router.push(`/payment/${response.data}
   `)
  }
  return (
    <div className='p-5 '>

      {
        selectedCar ? (<>
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


        <button disabled={!visiblity}
        onClick={handleBook} className='w-full
         bg-yellow-400
        p-1 rounded-md
        disabled:opacity-50
        mt-4'>Book</button>
        
        </div> </>):(<ErrorPage />)
      }
         
    </div>
  )
}

export default Booking