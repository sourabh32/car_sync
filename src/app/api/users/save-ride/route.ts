import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";

import {Ride}  from "@/models/rideModel"


connect()
export async function POST(request:NextRequest){
   
    try {

        
        const reqBody = await request.json()
         
         const {selectedCar,pickUp,dropOff,startTime,endTime,email} = reqBody
  
         
        const newRide = new Ride({
            selectedCar,
            pickUp,
            dropOff,
            startTime,
            endTime,
            paymentStatus:true,
           
            email
        })

        const savedRide = await newRide.save()
        
     
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedRide
            
        })
    } catch (error:any) {
        
        return NextResponse.json({
            error :error.message
        },{status:500})
       
    }
}