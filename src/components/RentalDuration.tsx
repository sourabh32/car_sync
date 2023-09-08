"use client"

import { useRideContext } from '@/context/RideContext';
import React,{useState,ChangeEvent} from 'react'

const RentalDuration = () => {

    
    const [timeDifferenceHours, setTimeDifferenceHours] = useState<number>(0);

    const {startTime,setStartTime,setEndTime,endTime} = useRideContext()
  
    const handleStartDateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newStartDate = event.target.value;
      
      setStartTime(newStartDate);
      calculateTimeDifference(newStartDate, endTime);
    };
  
    const handleEndDateChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newEndDate = event.target.value;
      setEndTime(newEndDate);
      calculateTimeDifference(startTime, newEndDate);
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
    <div className="flex   w-full  justify-between items-center flex-col sm:flex-row gap-4   py-2 text-black">
    <div className="flex items-center  ">
      <div className='w-full'>
      <label htmlFor="start-date" className='text-gray-400 text-[13px]'>Trip Start</label>
      <input
      onChange={(e)=>handleStartDateChange(e)}
        type="datetime-local"
        id="start-date"
        className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300 text-[14px]'
        min={new Date().toISOString().slice(0, 16)} 
      />
      </div>
    </div>
    <div className="flex items-center ">
    <div className='w-full'>
      <label htmlFor="end-date" className='text-gray-400 text-[13px]' >Trip End</label>
      <input
      onChange={(e)=>handleEndDateChange(e)}
        type="datetime-local"
        id="end-date"
        className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300 text-[14px]'
        min={new Date().toISOString().slice(0, 16)} 
      />
      </div>
    </div>
    <div className='w-full'>
        <p>Hours: <span className='text-red-600 font-bold'>{timeDifferenceHours}</span></p>
    </div>
  </div>
  
  
  )
}

export default RentalDuration