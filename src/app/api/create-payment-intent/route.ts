import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  typescript: true,
  apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest) {
  const { data } = await req.json();
  const { amount } = data;
  
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100,
      currency: "INR",
      payment_method_types:['card']
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 400,
    });
  }
}