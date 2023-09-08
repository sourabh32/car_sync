"use client"

import { useRideContext } from "@/context/RideContext";
import Image from "next/image";
import React from "react";



const SelectedCar = () => {
    const {selectedCar} = useRideContext()
    
   const car :any ={...selectedCar}
   
  return (
    <>{
        selectedCar && 
        <div
          key={car.model}
          className="bg-white rounded-lg shadow-md  flex flex-col sm:flex-row overflow-hidden"
        ><div className="w-full bg-yellow-400">
          <Image
            src={car.img}
            alt={"car"}
            width={400}
            height={400}

            
          />
          </div>
          <div className="p-4 flex flex-col align-center justify-center w-full">
          

          <h1 className="text-2xl font-semibold">{car.make} {car.model} {car.year}</h1>
         
       
        
        
        
        <p className="text-xl  mt-2">Per Hour: {car.perHour}₹/hour</p>
          </div>
        </div>
     
    }</>
  );
};

export default SelectedCar;
