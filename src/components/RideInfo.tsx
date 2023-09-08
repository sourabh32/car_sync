import Image from 'next/image';
import React from 'react';

const RideInfo = ({ ride }:any) => {
  return (
    <div className=" w-[95%]  mx-auto rounded-lg shadow-md p-2  ">
    <div className="flex  flex-wrap">
      <div className="w-full bg-yellow-400 rounded-md sm:w-1/2 pr-4">
        <Image src={ride.selectedCar.img} alt={`${ride.selectedCar.make} ${ride.selectedCar.model}`} className="w-full h-auto" width={200} height={200} />
      </div>
      <div className="w-full px-2  sm:w-1/2">
        <h2 className="text-xl font-semibold mb-2">{ride.username}</h2>
        <p>
          <strong>Pick-up Location:</strong> {ride.pickUp}
        </p>
        <p>
          <strong>Drop-off Location:</strong> {ride.dropOff}
        </p>
        <p>
          <strong>Start Time:</strong> {ride.startTime}
        </p>
        <p>
          <strong>End Time:</strong> {ride.endTime}
        </p>
        <div className="">
          <p>
            <strong>Selected Car:</strong>
          </p>
          <p>
            Make: {ride.selectedCar.make}, Model: {ride.selectedCar.model}, Year: {ride.selectedCar.year}
          </p>
        </div>
        <div className="">
          <p>
            <strong>Payment Status:</strong> {ride.paymentStatus ? 'Paid' : 'Pending'}
          </p>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default RideInfo;
