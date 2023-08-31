"use client"
import React, { createContext, useContext, useState, ReactNode,Dispatch,SetStateAction } from "react";

interface CarContextType {
  selectedClass: string;
  selectedFuel: string;
  selectedYear: string;
  limit:number,
  setLimit:Dispatch<SetStateAction<number>>
  setSelectedClass: Dispatch<SetStateAction<string>>;
  setSelectedFuel: Dispatch<SetStateAction<string>>;
  setSelectedYear: Dispatch<SetStateAction<string>>;
}

const defaultCarContext: CarContextType = {
  selectedClass: "Nissan",
  selectedFuel: "Gas",
  selectedYear: "2015",
  limit:10,
  setLimit:()=>{},
  setSelectedClass: () => {},
  setSelectedFuel: () => {},
  setSelectedYear: () => {},
};

const queryContext = createContext<CarContextType>(defaultCarContext);

interface CarProviderProps {
  children: ReactNode;
}

const QueryProvider: React.FC<CarProviderProps> = ({ children }) => {
  const [selectedClass, setSelectedClass] = useState("Nissan");
  const [selectedYear, setSelectedYear] = useState("2015");
  const [selectedFuel, setSelectedFuel] = useState("Gas");
  const [limit,setLimit] = useState(10)
  const value: CarContextType = {
    selectedClass,
    selectedFuel,
    selectedYear,
    setSelectedClass,
    setSelectedFuel,
    setSelectedYear,
    limit,
    setLimit
  };

  return <queryContext.Provider value={value}>{children}</queryContext.Provider>;
};

const useQueryContext = (): CarContextType => {
  return useContext(queryContext);
};

export { QueryProvider, useQueryContext };
