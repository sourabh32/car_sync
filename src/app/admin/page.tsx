"use client"

import { useUserContext } from '@/context/UserContexr';

import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type SelectedCar = {
  make:string;
  model:string;
  year:string;
  img:string
}

type Ride = {
    _id: string; 
    pickUp: string;
    dropOff: string;
    selectedCar:SelectedCar;
    startTime:string;
    endTime: string;
    paymentStatus: boolean;
    
    email:string;

  };
  
function Page() {
  const [rides, setRides] = useState<Ride[]>([]);
  const {user} = useUserContext()

  const fetchRides = async () =>{
    const response = await axios.get("/api/admin/fetch-rides")
    
    setRides(response.data.ridesData)
  }
  
  useEffect(() => {
    
    if (user && user.role === 'admin') {
      fetchRides()
    }
  }, [user]);

  return (
    <div className="w-full p-5 mt-4">
      <h2 className='mt-10  text-2xl text-center   font-bold'>Admin Panel</h2>
      <div className="table-responsive w-full" style={{ overflowX: "auto" }}>

      
      <table className="table table-bordered border mt-10">

        <thead>
        <tr>
              
              <th className="px-3">Email</th>
              <th className="px-3">Start Time</th>
              <th className="px-3">End Time</th>
              <th className="px-3">Payment Status</th>
              <th className="px-3">Pick Up</th>
              <th className="px-3">Drop Off</th>
              <th className="px-3">Car Image</th>
              <th className="px-3">Car Make</th>
              <th className="px-3">Car Model</th>
              <th className="px-3">Car Year</th>
            </tr>
        </thead>
        <tbody>
          {rides.map((ride) => (
            <tr key={ride._id}>
              
              <td>{ride.email}</td>
              <td>{ride.startTime}</td>
              <td>{ride.endTime}</td>
              <td>{ride.paymentStatus ? "Paid" : "Unpaid"}</td>
              <td>{ride.pickUp}</td>
              <td>{ride.dropOff}</td>
              <td>
                <Image
                  src={ride.selectedCar.img}
                  alt={ride.selectedCar.make}
                  className="img-fluid"
                  width={100}
                  height={100}
                />
              </td>
              <td>
              {ride.selectedCar.make}
              </td>
              <td>
              {ride.selectedCar.model}
              </td>
              <td>
              {ride.selectedCar.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Page