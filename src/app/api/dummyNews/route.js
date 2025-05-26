import { newsData } from "@/constants/data";
import { NextResponse } from "next/server";


export const GET = async () => {
    try {

        return NextResponse.json(newsData)
    } catch (error) {
        return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
    }
}