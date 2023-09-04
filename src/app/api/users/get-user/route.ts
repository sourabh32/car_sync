// import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel"; 
import { connect } from "@/dbconfig/dbconfig"; 
import { getDataFromToken } from "@/utils/getDataFromToken";

connect();

export async function GET(request:NextRequest){

    try {
        
        const userId = await getDataFromToken(request);
        if(userId === ''){
            return NextResponse.json({
                message: "User don't exist or logged out",
                
            })
        }
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}