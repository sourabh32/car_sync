import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { User } from "@/models/userModel"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()
export async function POST(request: NextRequest) {
    try {


        const {email,password}= await request.json()
      console.log(email,password)

        const user = await User.findOne({ email })

        if (!user) {
            return NextResponse.json({ error: "User do not exists!" }, { status: 400 })
        }
        console.log("user exists")


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
            email:user.email
        }

       
        const token = await jwt.sign(tokenData,process.env.NEXT_PUBLIC_TOKEN_SECRET!,{expiresIn:"1d"})

        const response = NextResponse.json({
            message:"logged in success",
            succes:true
        })

        response.cookies.set("token",token,{httpOnly:true})




        return response
    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, { status: 500 })
    }
}