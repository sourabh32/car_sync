

import { useRouter } from 'next/navigation';
import React from 'react';

const ErrorPage = () => {
    const router = useRouter()
    const handleClick = ()=>{
  router.push("/")
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Whoops! First, select a car to proceed.</h1>
        <button onClick={handleClick} className="mt-4 px-4 py-2 text-black bg-yellow-500 hover:bg-blue-600 rounded-md transition duration-300 ease-in-out">
         Select Car
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
