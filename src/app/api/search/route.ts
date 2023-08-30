import { NextRequest, NextResponse } from "next/server";
import {fetchCars} from "@/utils/utils"

export async function POST(request:NextRequest){
    try {

        const rebBody = await request.json()
        const {selectedClass,selectedFuel,selectedYear} = rebBody
        const data = await fetchCars(selectedClass,selectedYear,selectedFuel)
       
        return NextResponse.json({data:data,
        query:selectedClass})
    } catch (error:any) {
        return NextResponse.json({error:error.message},{
            status:500
        })
    }
}