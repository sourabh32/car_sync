import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-200">
      <Image src="/payment.png" alt="Ride Confirmed" height={200} width={200} />
      <h1 className="text-3xl font-semibold text-green-600 mb-4">Ride Confirmed</h1>
      <p className="text-lg text-gray-700 mb-8">Payment received</p>
      <button className="px-4 py-2 text-white bg-yellow-500 hover:bg-yellow-600 rounded-md transition duration-300 ease-in-out">
        <a href="/your-rides">Go to Your Rides</a>
      </button>
    </div>
  )
}

export default page