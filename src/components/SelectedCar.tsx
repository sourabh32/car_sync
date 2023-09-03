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
        ><div className="w-full">
          <Image
            src={car.img}
            alt={"car"}
            width={400}
            height={400}

            
          />
          </div>
          <div className="p-4 w-full">
          <p className="text-gray-600">{car.year}</p>
        <p className="text-gray-600">Class: {car.class}</p>
        <p className="text-gray-600">Cylinders: {car.cylinders}</p>
        <p className="text-gray-600">Displacement: {car.displacement}</p>
        <p className="text-gray-600">Drive: {car.drive}</p>
        <p className="text-gray-600">Fuel Type: {car.fuel_type}</p>
        <p className="text-gray-600">City MPG: {car.city_mpg}</p>
        <p className="text-gray-600">Highway MPG: {car.highway_mpg}</p>
        <p className="text-gray-600">Combination MPG: {car.combination_mpg}</p>
        <p className="text-gray-600">Transmission: {car.transmission}</p>
        <p className="text-2xl font-semibold mt-2">{car.price}</p>
        <p className="text-2xl font-semibold mt-2">Per Hour: {car.perHour}</p>
          </div>
        </div>
     
    }</>
  );
};

export default SelectedCar;
