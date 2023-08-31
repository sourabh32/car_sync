"use client"

import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
 
}

interface CarContextType {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  cars: Car[];
  setCars: Dispatch<SetStateAction<Car[]>>; // Set specific type here
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
}

const carContext = createContext<CarContextType>({
  loading: true,
  setLoading: () => {},
  cars: [],
  setCars: () => {},
  error: false,
  setError: () => {}
});

const CarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const value = { cars, setCars, error, setError, loading, setLoading };
  return <carContext.Provider value={value}>{children}</carContext.Provider>;
};

export default CarProvider;

export function useCarContext(): CarContextType {
  return useContext(carContext);
}
