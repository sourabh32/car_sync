import { NextRequest, NextResponse } from "next/server";



import jwt from "jsonwebtoken"


export async function GET(request: NextRequest) {
    try {


        const token = request.cookies.get("token")?.value || '';
        if(token === ''){
            return NextResponse.json({
                message: "User don't exist or logged out",
            })
        }
        const decodedToken:any = jwt.verify(token, process.env.NEXT_PUBLIC_TOKEN_SECRET!);
       console.log(decodedToken)
       
    //    const decodedToken = {
    //     id:"gdhdhdd",
    //     username:"mangal",
    //      role:"admin",
    //     email:"mangal@gmail.com"
    //    }
        
        return NextResponse.json({
            message: "User found",
            data: decodedToken
        } );
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
    }
}
