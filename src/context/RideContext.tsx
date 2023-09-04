"use client"
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface RideContextType {
  selectedCar: object | null,
  startTime: string;
  endTime: string;
  pickUp: string;
  dropOff: string;
  setSelectedCar: Dispatch<SetStateAction<object>>;
  setStartTime: Dispatch<SetStateAction<string>>;
  setEndTime: Dispatch<SetStateAction<string>>;
  setPickUp: Dispatch<SetStateAction<string>>;
  setDropOff: Dispatch<SetStateAction<string>>;
}

const defaultRideContext: RideContextType = {
  selectedCar:null,
  startTime: "",
  endTime: "",
  pickUp: "",
  dropOff: "",
  setSelectedCar: () => {},
  setStartTime: () => {},
  setEndTime: () => {},
  setPickUp: () => {},
  setDropOff: () => {},
};

const rideContext = createContext<RideContextType>(defaultRideContext);

interface RideProviderProps {
  children: ReactNode;
}

const RideProvider: React.FC<RideProviderProps> = ({ children }) => {
  const [selectedCar, setSelectedCar] = useState<object | null>(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");

  const value: RideContextType = {
    selectedCar,
    startTime,
    endTime,
    pickUp,
    dropOff,
    setSelectedCar,
    setStartTime,
    setEndTime,
    setPickUp,
    setDropOff,
  };

  return <rideContext.Provider value={value}>{children}</rideContext.Provider>;
};

const useRideContext = (): RideContextType => {
  return useContext(rideContext);
};

export { RideProvider, useRideContext };
