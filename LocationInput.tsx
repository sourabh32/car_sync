"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RentalDuration from './src/components/RentalDuration'

const LocationInput = () => {
    const [startLocation,setStartLocation] = useState("")
    const [endLocation,setEndLocation] = useState("")
    const [addressData,setAddressData] = useState([])
  const fetchAddress =  async ()=>{
    const {data} = await axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${startLocation}&apiKey=${process.env.NEXT_PUBLIC_GEOPIFY}`)
    console.log(data.features)
    setAddressData(data.features)
  }
    useEffect(()=>{
       const clearUp = setTimeout(()=>fetchAddress(),3000)

       return ()=> clearTimeout(clearUp)
    },[startLocation])
  return (
    <div className="flex items-center justify-between p-4">
    
    <div>
      <input onChange={(e)=>setStartLocation(e.target.value)} value={startLocation} type="text" placeholder="pick-up" className="px-2 py-1 border rounded" />
      {
        addressData.length >0 &&
        addressData.map((address: any)=> (<div className='w-50%'><p>{address.properties.address_line1} ,  {address.properties.city
        }</p></div>))
      }
      </div>
      <input onChange={(e)=>setEndLocation(e.target.value)} value={endLocation} type="text" placeholder="drop-off" className="px-2 py-1 border rounded" />
      
   
  </div>
  )
}

export default LocationInput