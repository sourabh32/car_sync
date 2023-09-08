import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
        <div className='pt-8 '>
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-semibold">
          Select car, pick time-slot, rent a car—quick and super easy!
        </h1>

        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        </div>
        <div  >
        <Image width={1000} priority  height={600} alt="car" src={"/rolls.png"} />
        </div>
    </div>
  )
}

export default Hero