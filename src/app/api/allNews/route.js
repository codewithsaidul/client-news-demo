import { newsData } from "@/constants/data"
import { NextResponse } from "next/server"


export const GET = () => {
    return NextResponse.json(newsData)
}