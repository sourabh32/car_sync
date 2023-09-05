

import { NextRequest, NextResponse } from "next/server";
import { Ride } from "@/models/rideModel"; 
import { connect } from "@/dbconfig/dbconfig"; 



connect();

export async function GET(request:NextRequest){

    try {
        
        const ridesData = await Ride.find({}).exec();
        
        return NextResponse.json({
            message: "you are authorised to access this data!",
            ridesData
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}