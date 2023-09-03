"use client"
import React,{useEffect,useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "@/components/PaymentForm";
import axios from "axios";



// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState("");

  const secret = async () =>{
    const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 200 },
      });
      const clientSecret = data;
      setClientSecret(clientSecret)
    
  }
  React.useEffect(() => {

secret()
   
   
  }, []);

  const appearance = {
    theme: 'stripe',
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
