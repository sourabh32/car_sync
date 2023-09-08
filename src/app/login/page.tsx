"use client"

import { useUserContext } from '@/context/UserContexr';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {toast} from 'react-hot-toast';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false)
  const router = useRouter()
  const  {authChanged,setAuthChanged} =useUserContext()
  const resetForm = () =>{
    setEmail('')
    setPassword('')
    
  }
  const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      
      if (!password || password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }
      try {
        setLoading(true);
        const response = await axios.post("/api/users/login", {email,password});
        toast.success("LogIn Success")
        setAuthChanged(!authChanged)
        resetForm()
        router.push("/")
        
    } catch (error:any) {
        console.log("Login failed", error.message);
       
    }finally {
        setLoading(false);
        
    }

  };

    


  return (
<main className="p-5 h-full w-full mx-auto">
  <form onSubmit={handleLogin} className="bg-gray-100 my-20 p-6 rounded-lg lg:w-1/2 mx-auto">
    <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700">Email</label>
      <input
        type="email"
        id="email"
        className="w-full px-3 py-2 border rounded-md"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700">Password</label>
      <input
        type="password"
        id="password"
        className="w-full px-3 py-2 border rounded-md"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">
      {loading ? "Loading" : "Log In"}
    </button>
    <p className="text-center mt-4">
    Do not have an account? <Link href="/signup" className="text-yellow-500">Create an account</Link>
  </p>
  </form>
</main>

  );
};

export default LoginForm;
