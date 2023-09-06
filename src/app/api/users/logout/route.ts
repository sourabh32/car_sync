import { NextResponse } from "next/server";


export async function GET() {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            },
            {
                headers: {
                   
                    "Cache-Control": "no-store, max-age=0",

                },
            }
        )
        response.headers.set("Cache-Control", "no-store, max-age=0");

        response.cookies.set("token", "", 
        { httpOnly: true, expires: new Date(0) 
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
        
    }