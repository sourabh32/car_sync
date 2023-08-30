import { generateCarImageUrl } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';

const CarCard = ({ car }:any) => {
    const {make,model,fuel_type,transmission,city_mpg}= car
  return (
    <div className="w-full cursor-pointer hover:border-gray-200 transition-all hover:animate-pulse border-2 p-4 bg-gray-50 shadow-lg rounded-lg overflow-hidden">
       <h2  className="text-xl font-semibold"> {make[0].toUpperCase() +make.substring(1)} {model[0].toUpperCase() +model.substring(1)}</h2>
          <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
      </div>


      <div className='relative flex w-full mt-2'>
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

    
  </div>
  
  );
};

export default CarCard;
