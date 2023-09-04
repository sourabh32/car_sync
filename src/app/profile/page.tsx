"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import { useUserContext } from "@/context/UserContexr";

type User = {
    id: string; 
    username: string;
    email: string;
  };
export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const {setAuthChanged,user,authChanged} =useUserContext()
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            setAuthChanged(!authChanged)
           
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Profile page</p>
            
            {
  user !== null && user !== undefined && <p>{user.email}</p>
}
        <hr />
        <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Logout</button>

        


            </div>
    )
}