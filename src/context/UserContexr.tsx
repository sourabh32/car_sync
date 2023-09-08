"use client"


import axios from "axios";
import { createContext, useContext, useState, ReactNode, SetStateAction, Dispatch,useEffect } from "react";

type User = {
    id: string; 
    username: string;
    email: string;
    role:string;
  };

interface UserContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  authChanged:boolean;
  setAuthChanged:Dispatch<SetStateAction<boolean>>

}

const userContext = createContext<UserContextType>({
user:null,
setUser:()=>{},
authChanged:false,
setAuthChanged:()=>{}
});

  
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [authChanged, setAuthChanged] = useState<boolean>(false);
  

  const getUser = async () => {
    try {
      const response = await axios.get("/api/users/get-user");
      const userData = response.data.data;
   
      if (userData !== undefined) {
        
        setUser(userData);
      }
    } catch (error) {
      
      console.error(error);
    }
  }

  
  
  
  
  
  
useEffect(() => {
  
  getUser()

  
}, [authChanged])

  const value = { user,setUser,authChanged,setAuthChanged };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default UserProvider;

export function useUserContext(): UserContextType {
  return useContext(userContext);
}
