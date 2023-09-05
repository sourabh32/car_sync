import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";

import {Ride}  from "@/models/rideModel"


connect()
export async function POST(request:NextRequest){
   
    try {

        
        const reqBody = await request.json()
         console.log(reqBody)
         const {selectedCar,pickUp,dropOff,startTime,endTime,email,username} = reqBody
  
        // const user = await User.findOne({email})

        // if(user){
        //     return NextResponse.json({error: "User already exists"}, {status: 400})
        // }

        // const salt = await bcryptjs.genSalt(10)

        // const hashedPassword = await bcryptjs.hash(password,salt)

        const newRide = new Ride({
            selectedCar,
            pickUp,
            dropOff,
            startTime,
            endTime,
            paymentStatus:true,
            username,
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