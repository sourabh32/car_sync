"use client"


import React from 'react'


import Wrapper from "@/app/components/Wrapper"
import CarsList from './components/CarList'
import Hero from './components/Hero'
export default function Home() {





  return (
    <main className='p-5 border-blue-700' >
      <div className='mx-2 sm:mx-10 py-10'>
      <Hero />
      </div>
      <div className='mx-2 sm:mx-10'>
        <h2 className="text-4xl font-bold mb-2">Car Catlouge</h2>
        <p className="text-xl  mb-4">Find your perfect fit!</p>
      <Wrapper />
    
      <CarsList  />
      </div>
      
    </main>
  )
}
