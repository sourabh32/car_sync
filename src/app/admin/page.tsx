"use client"

import { useUserContext } from '@/context/UserContexr';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Ride = {
    _id: string; 
    pickUp: string;
    dropOff: string;
    selectedCar:object;
    startTime:string;
    endTime: string;
    paymentStatus: boolean;
  };
  
function Page() {
  const [rides, setRides] = useState<Ride[]>([]);
  const {user} = useUserContext()

  const fetchRides = async () =>{
    const response = await axios.get("/api/admin/fetch-rides")
    console.log(response)
  }
  
  useEffect(() => {
    
    if (user && user.role === 'admin') {
      fetchRides()
    }
  }, [user]);

  return (
    <div>
      {user && user.role === 'admin' ? (<p>Hi admin</p>
        // <div>
        
        //   {rides.map((ride) => (
        //     <div key={ride.startTime}>{ride.endTime}</div>
        //   ))}
        // </div>
      ) : (
        <p>You are not authorized to view this section.</p>
      )}
    </div>
  );
}

export default Page