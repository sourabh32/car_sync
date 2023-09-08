import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()
export async function POST(request: NextRequest) {
    try {


        const {email,password}= await request.json()
     

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ error: "User do not exists!" }, { status: 400 })
        }
        


        const validPassword = await bcryptjs.compare(password, user.password)

        if (!validPassword) {
            return NextResponse.json({
                error: "Wrong Password",
            }, {
                status: 400
            })
        }
      

        const tokenData = {
            id:user._id,
            username:user.username,
            email:user.email,
            role:user.role
        }

       
        const token = await jwt.sign(tokenData,process.env.NEXT_PUBLIC_TOKEN_SECRET!,{expiresIn:"1w"})

        const response = NextResponse.json({
            message:"logged in success",
            success:true
        })

        response.cookies.set("token",token ,{httpOnly:true,maxAge:604800})




        return response
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}