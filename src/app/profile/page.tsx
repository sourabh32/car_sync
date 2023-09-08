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
  
    const router = useRouter()

    

    const {setAuthChanged,authChanged,user,setUser} =useUserContext()
   
    const logout = async () => {
        try {
            await axios.post('/api/users/logout')
            toast.success('Logout successful')
            setAuthChanged(!authChanged)
            setUser(null)
            router.push("/login")
           
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
 
    

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