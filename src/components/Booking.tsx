import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import RentalDuration from './RentalDuration'
import SelectedCar from './SelectedCar'




function Booking() {
  
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
       
        
        <button className='w-full
         bg-yellow-400
        p-1 rounded-md
        mt-4'>Book</button>
        
        </div> 
    </div>
  )
}

export default Booking