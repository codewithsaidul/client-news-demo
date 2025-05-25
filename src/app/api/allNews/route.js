import { newsData } from "@/constants/data"
import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"


export const GET = async () => {
    try {

        // const db = await connectDB();
        // const result = await db.collection("allNews").find().toArray();
        return NextResponse.json("result", { status: 200})
    } catch (error) {
        return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
    }
}