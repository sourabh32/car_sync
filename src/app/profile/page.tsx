"use client";
import axios from "axios";

import React,{useState,useEffect} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import { useUserContext } from "@/context/UserContexr";
import Image from "next/image";

type User = {
  id: string; 
  username: string;
  email: string;
  role:string;
};
export default function ProfilePage() {
  const [user,setUser] = useState<User | null>(null)
    const router = useRouter()

    const getUser = async () => {
      try {
        const response = await axios.get("/api/users/get-user");
        const userData = response.data.data;
      console.log(userData)
        if (userData !== undefined) {
          console.log("from user adat",userData)
          setUser(userData);
        }
      } catch (error) {
        
        console.error(error);
      }
    }

    const {setAuthChanged,authChanged} =useUserContext()
    console.log("from",user)
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            setAuthChanged(!authChanged)
            router.push("/login")
           
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
  useEffect(()=>{
    getUser()
  },[])
    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
       
        {user !== null && user !== undefined && (
          <div className="flex flex-col items-center">
            <Image
              src="/user.png"
              alt="User Avatar"
              width={200}
              height={200}
            />
            <p className="text-xl font-semibold mb-2">{user.username}</p>
            <p className="text-gray-600 mb-4">{user.email}</p>
            {user.role === "admin" && (
              <button
                onClick={() => {
                  router.push("/admin")
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Go to Admin Panel
              </button>
            )}
          </div>
        )}
       
        <button
          onClick={logout}
          className="bg-red-500 my-2 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
  
    )
}