import React from 'react';
import CarCard from './CarCard';
import { useCarContext } from '../context/CarContext';

const CarsList = () => {
 const {loading,error,cars} = useCarContext()
console.log(cars)
 
 if (loading) {
  return (
    <div className="flex justify-center items-center h-48">
      loading....
    </div>
  );
}

return (
  <div className='p-1 sm:p-5 border-[3px] gap-5 grid grid-cols-1 sm:grid-cols-2' >
    {cars.length > 0 ? (
      cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))
    ) : (
      <p>No cars available.</p>
    )}
  </div>
);

};

export default React.memo(CarsList);
