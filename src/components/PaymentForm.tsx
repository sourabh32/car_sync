"use client"


import React from "react";
import {
  PaymentElement,
  
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useRideContext } from "@/context/RideContext";
import {toast} from 'react-hot-toast'
import { useUserContext } from "@/context/UserContexr";
import Image from "next/image";
export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const  {pickUp,dropOff,endTime,startTime,selectedCar} = useRideContext()
  const {user} = useUserContext()
 
const email = user?.email;

  


 
  const [message, setMessage] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);
 
  React.useEffect(() => {
    if (!stripe) {
      return;
    }
   
    const clientSecret = new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
      );

    if (!clientSecret) {
      return;
    }

     stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }:any) => {
      
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  const ride = {pickUp,dropOff,endTime,startTime,selectedCar,email}
 
  const saveRide = async  ()=>{
   try {
     const response = await axios.post("/api/users/save-ride",ride)
     
     toast.success("ride saved")
   } catch (error) {
    console.log(error)
   }
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }
    
    setIsLoading(true);
    saveRide()

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        
        return_url: "https://carsync.vercel.app/payment-success",
      },
    });
   
    
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(String(error.message));
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions:any = {
    layout: "tabs",
  };

  return (
    <form  className="mt-10" id="payment-form" onSubmit={handleSubmit}> 
      <Image className="mx-auto" src={"/transaction.png"} alt={"payment"} height={70} width={70} />
     
      <PaymentElement className="mt-10" id="payment-element" options={paymentElementOptions} />
      <div className="w-full flex justify-center">
      <button className="w-fit bg-yellow-400 py-2 px-4 rounded-md my-2 " disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? "Processing..." : "Pay now"}
        </span>
      </button>
      </div>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}