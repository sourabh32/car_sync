"use client"
import { useRideContext } from '@/context/RideContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AutocompleteAddress() {

  const [startChange,setStartChange] = useState(false)
  const [endChange,setEndChange] = useState(false)

  const [addressData, setAddressData] = useState([]);
  const {pickUp,setPickUp,dropOff,setDropOff} = useRideContext()
  const fetchAddress = async (location: string, isStartLocation: boolean) => {
    if (location === "") {
      return;
    }

    try {
      const { data } = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=${process.env.NEXT_PUBLIC_GEOPIFY}`);
      setAddressData(data.features);
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleStartLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartChange(true)
    const location = e.target.value;
    setPickUp(location);
    fetchAddress(location, true);
  };

  const handleEndLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndChange(true)
    const location = e.target.value;
    setDropOff(location);

    fetchAddress(location, false);
    
  };

  const onAddressClick = (item: any, isStartLocation: boolean) => {
    const address = item?.properties.address_line1;
    if (isStartLocation) {
      setPickUp(address);
      setStartChange(false)

    } else {
      setDropOff(address);
      setEndChange(false)
    }
    setAddressData([])
  };

  return (
    <div className=''>
      <div className='relative'>
        <label className='text-gray-400 text-[13px]'>Pick Up</label>
        <input
          type="text"
          className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300 text-[14px]'
          value={pickUp}
          onChange={handleStartLocationChange}
        />
        {addressData.length > 0 && startChange && (
          <div className="suggestions">
            {addressData.map((item: any, index) => (
              <h2
                key={index}
                className='p-3 hover:bg-gray-100 cursor-pointer'
                onClick={() => onAddressClick(item, true)}
              >
                {item?.properties.address_line1}
                <span className='text-[10px]'>{item?.properties.address_line2}</span>
              </h2>
            ))}
          </div>
        )}
      </div>
      <div className='relative'>
        <label className='text-gray-400 text-[13px]'>Drop Off</label>
        <input
          type="text"
          className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300 text-[14px]'
          value={dropOff}
          onChange={handleEndLocationChange}
        />
        {addressData.length > 0 && endChange && (
          <div className="suggestions">
            {addressData.map((item: any, index) => (
              <h2
                key={index}
                className='p-3 hover:bg-gray-100 cursor-pointer'
                onClick={() => onAddressClick(item, false)}
              >
                {item?.properties.address_line1}
                <span className='text-[10px]'>{item?.properties.address_line2}</span>
              </h2>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutocompleteAddress;
