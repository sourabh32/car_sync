import React from 'react'

const RentalDuration = () => {
  return (
    <div className="flex justify-between p-4 bg-gray-800 text-black">
    <div className="flex items-center space-x-4">
      <label htmlFor="start-date" className="font-semibold">Start Date & Time:</label>
      <input type="datetime-local" id="start-date" className="border rounded p-1" />
    </div>
    <div className="flex items-center space-x-4">
      <label htmlFor="end-date" className="font-semibold">End Date & Time:</label>
      <input type="datetime-local" id="end-date" className="border rounded p-1" />
    </div>
  </div>
  
  )
}

export default RentalDuration