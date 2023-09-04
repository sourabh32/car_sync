import React, { useEffect,  } from 'react';
import {manufacturers,fuels,yearsOfProduction} from "@/static/index"
import DropDown from './DropDown'; 
import axios from "axios"


import CarsList from './CarList';
import { useQueryContext } from '@/context/QueryContext';
import { useCarContext } from '@/context/CarContext';





function Wrapper() {

  const {selectedClass,setSelectedClass,setSelectedFuel,selectedFuel,selectedYear,setSelectedYear} = useQueryContext()
  
 const {setLoading,setError,setCars} = useCarContext()
  const getCars = async ()=>{
    try {
      setLoading(true)
     
      const response = await axios.post(`api/search`,{selectedClass,selectedFuel,selectedYear})
      
      
      setCars(response.data.data)
    } catch (error:any) {
      setError(error.message)
    }
    finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    
  getCars()
  }, [selectedClass,selectedYear,selectedFuel])

  return (
    <div>
      <div className='mb-10  gap-5   grid grid-cols-2   w-full items-center justify-around'>
      <DropDown options={manufacturers} selected={selectedClass} setSelected={setSelectedClass} />
      <DropDown options={yearsOfProduction} selected={selectedYear} setSelected={setSelectedYear} />
      <DropDown options={fuels} selected={selectedFuel} setSelected={setSelectedFuel} />
      </div>
     
    </div>
  );
}

export default Wrapper;
