"use client"


import React from "react";
import {
  PaymentElement,
  
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

 
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

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        
        return_url: "http://localhost:5173",
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
    <form style={{width:"50%"}} id="payment-form" onSubmit={handleSubmit}>
     
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button disabled={isLoading || !stripe || !elements} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}