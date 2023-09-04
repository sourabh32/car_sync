"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false)
  const router = useRouter()
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
        console.log("login success", response.data);
        resetForm()
        router.push("/")
        
    } catch (error:any) {
        console.log("Signup failed", error.message);
       
    }finally {
        setLoading(false);
        
    }

  };

    


  return (
    <main className='p-5 w-full border max-w-sm mx-auto' >
    <form onSubmit={handleLogin} className="bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
      {loading? "loading":"Sign Up"} 
      </button>
    </form>
    </main>
  );
};

export default LoginForm;
