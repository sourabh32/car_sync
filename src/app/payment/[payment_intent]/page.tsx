"use client"
import React,{useEffect,useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "@/components/PaymentForm";
import axios from "axios";
import { useRouter } from "next/navigation";




const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Payment({params}:any) {
 
   console.log(params.payment_intent)
const clientSecret =params.payment_intent
const appearance = {
  theme: 'night',
  labels: 'floating'
};
  const options:any = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}
