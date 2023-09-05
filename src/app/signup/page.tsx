"use client"

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const SignupForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] = useState(false)
  const router = useRouter()


  const resetForm = () =>{
    setEmail('')
    setPassword('')
    setUserName('')
  }
  const handleSignup = async (e:React.FormEvent<HTMLFormElement>) => {
    console.log("clicked")
    e.preventDefault();
    if (!userName || userName.length < 4) {
        alert('Username must be at least 4 characters long.');
        return;
      }
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
        const response = await axios.post("/api/users/signup", {email,userName,password});
        console.log("Signup success", response.data);
        resetForm()
        router.push("/login")
        
    } catch (error:any) {
        console.log("Signup failed", error.message);
       
    }finally {
        setLoading(false);
        
    }

  };

  return (
    <main className="p-5 h-full w-full border mx-auto">
    <form onSubmit={handleSignup} className="bg-gray-100 mx-auto my-20 p-6 lg:w-1/2 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="userName" className="block text-gray-700">Username</label>
        <input
          type="text"
          id="userName"
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Choose a username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </div>
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
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">
       {loading? "loading":"Sign Up"} 
      </button>
      <p className="text-center mt-4">
    Already have an account? <Link href="/login" className="text-yellow-500">Sign in</Link>
  </p>
     
    </form>

    </main>
  );
};

export default SignupForm;
