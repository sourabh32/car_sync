import { useRideContext } from '@/context/RideContext';
import { generateCarImageUrl } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
const CarCard = ({ car }:any) => {
    const {make,model,fuel_type,transmission,city_mpg,year}= car

    const {setSelectedCar} = useRideContext()
    const router = useRouter()
    const onSelect = ()=>{
      
      setSelectedCar({make,model,year,perHour:city_mpg*30,img:generateCarImageUrl(car,"29")})
      router.push("/ride-details")
    }
  return (
    <div className="w-full cursor-pointer hover:border-gray-200  border-2 p-4 shadow-lg rounded-lg overflow-hidden">
       <h2  className="text-xl font-semibold"> {make[0].toUpperCase() +make.substring(1)} {model[0].toUpperCase() +model.substring(1)}</h2>
          <div className='relative rounded-md bg-yellow-400 w-full h-40 my-2 object-contain'>
        <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
      </div>
    
      
      <div className='relative flex w-full mt-12'>
     
        <div className='flex  w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image  src={transmission === "a" ? "/automatic.png" : "/manual.png"} width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/fuel.png" width={20} height={20} alt="seat" />
            <p className="text-[14px] leading-[17px]">{fuel_type}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/milage.png" width={20} height={20} alt="seat" />
            <p className="text-[14px] leading-[17px]">{city_mpg} MPG</p>
          </div>
         
        </div>
        
        </div>
<div className=' w-full flex justify-end mt-5'>
        <button className='w-fit
         bg-yellow-400
        
         py-1
        px-4  rounded-md
        '
        onClick={onSelect}
        >Book <span className='text-[13px]  text-gray-800'>{city_mpg*30}₹/hour</span></button>
        </div>
  </div>
  
  );
};

export default CarCard;
