"use client"

import React,{useState,ChangeEvent} from 'react'

const RentalDuration = () => {

    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [timeDifferenceHours, setTimeDifferenceHours] = useState<number>(0);
  console.log(timeDifferenceHours.toFixed())
    const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newStartDate = event.target.value;
      console.log(newStartDate)
      setStartDate(newStartDate);
      calculateTimeDifference(newStartDate, endDate);
    };
  
    const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newEndDate = event.target.value;
      setEndDate(newEndDate);
      calculateTimeDifference(startDate, newEndDate);
    };
  
    const calculateTimeDifference = (start: string, end: string) => {
      if (start && end) {
        const startTime = new Date(start);
        const endTime = new Date(end);
        const timeDifference = (endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60); 
        setTimeDifferenceHours(Math.ceil(timeDifference))
      }
    };
  


  return (
    <div className="flex mx-2 sm:mx-10 justify-around items-center flex-col sm:flex-row gap-4   p-2 text-black">
    <div className="flex items-center  space-x-4">
      <label htmlFor="start-date" className="font-semibold">Trip Start</label>
      <input
      onChange={(e)=>handleStartDateChange(e)}
        type="datetime-local"
        id="start-date"
        className="border rounded p-1"
        min={new Date().toISOString().slice(0, 16)} 
      />
    </div>
    <div className="flex items-center space-x-4">
      <label htmlFor="end-date" className="font-semibold">Trip End</label>
      <input
      onChange={(e)=>handleEndDateChange(e)}
        type="datetime-local"
        id="end-date"
        className="border rounded p-1"
        min={new Date().toISOString().slice(0, 16)} 
      />
    </div>
    <div>
        <p>Hours: <span className='text-red-600 font-bold'>{timeDifferenceHours}</span></p>
    </div>
  </div>
  
  
  )
}

export default RentalDuration