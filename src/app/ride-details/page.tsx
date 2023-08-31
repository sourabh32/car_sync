import LocationInput from '@/components/LocationInput'
import RentalDuration from '@/components/RentalDuration'
import React from 'react'

const page = () => {
  return (
    <main className='p-5 border-blue-700' >
        <RentalDuration />
        <LocationInput />
    </main>
  )
}

export default page