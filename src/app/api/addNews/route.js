import { connectDB } from "@/lib/connectDB";
import { verifyAccess } from "@/lib/verifyAccess";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const errorResponse = verifyAccess(req);
    if (errorResponse) return errorResponse;

    // get news data from client side
    const data = await req.json();

    // connected with mongodb database
    const db = await connectDB();

    // add timestamp
    const newsData = {
      ...data,
      createdAt: new Date()
    }

    // insert news data on db
    const result = await db.collection("allNews").insertOne(newsData);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
