import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import {User} from "@/models/userModel"
import bcryptjs from "bcryptjs"

connect()
export async function POST(request:NextRequest){
    try {

        
        const reqBody = await request.json()
        const {email,password,username} = reqBody

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)

        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password:hashedPassword
        })

        const savedUser = await newUser.save()

     
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    } catch (error:any) {
        return NextResponse.json({
            error :error.message
        },{status:500})
    }
}