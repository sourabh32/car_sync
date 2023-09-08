"use client"
import RideInfo from '@/components/RideInfo';
import { useUserContext } from '@/context/UserContexr'
import axios from 'axios'
import React,{useEffect, useState} from 'react'

// types.ts
interface SelectedCar {
    make: string;
    model: string;
    year: number;
    perHour: number;
    img: string;
  }
  
  interface Ride {
    dropOff: string;
    email: string;
    endTime: string;
    paymentStatus: boolean;
    pickUp: string;
    selectedCar: SelectedCar;
    startTime: string;
    username: string;
    __v: number;
    _id: string;
  }
  
 
  

const Page = () => {

    const [rides,setRides] = useState<Ride[] | []>([])
const {user} = useUserContext()

const data = user?.email || ''

    const getRides = async () =>{
      const response=  await axios.post("/api/users/get-rides",{data})
      
      setRides(response.data.ridesData)
    }
    useEffect(()=>{
        
            getRides()
        
    
    },[user])
  return (
    <main className='w-full pt-12 '>
   <div className='flex py-5   gap-5 flex-col'>

    {
        rides.length>0 &&
        rides.map((ride:Ride)=>(<RideInfo key={ride._id} ride={ride} />))
    }
   </div>

    </main>
  )
}

export default Page