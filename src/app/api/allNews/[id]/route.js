import { connectDB } from "@/lib/connectDB";
import { verifyAccess } from "@/lib/verifyAccess";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const errorResponse = verifyAccess(req);
    if (errorResponse) return errorResponse;

    // get news data from client side
    // const data = await req.json();

    const { id } = params

    console.log(id)

    // connected with mongodb database
    // const db = await connectDB();

    // insert news data on db
    // const result = await db.collection("allNews").insertOne(data);

    return NextResponse.json({ "received": id}, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
