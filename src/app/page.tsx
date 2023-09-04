"use client"


import CarList from '@/components/CarList'
import Hero from '@/components/Hero'
import Wrapper from '@/components/Wrapper'
import React from 'react'



export default function Home() {





  return (
    <main className='p-5' >
      <div className='mx-2 sm:mx-10 py-10'>
      <Hero />
      </div>
      <div className='mx-2 sm:mx-10'>
        <h2 className="text-4xl font-bold mb-2">Car Catlouge</h2>
        <p className="text-xl  mb-4">Find your perfect fit!</p>
      <Wrapper />
    
      <CarList  />
      </div>
      
    </main>
  )
}
