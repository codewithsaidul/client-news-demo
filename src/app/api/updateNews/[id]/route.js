import { connectDB } from "@/lib/connectDB";
import { verifyAccess } from "@/lib/verifyAccess";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const errorResponse = verifyAccess(req);
    if (errorResponse) return errorResponse;

    // get news data from client side
    const updateData = await req.json();

    const { id } = params;
    const query = { _id: new ObjectId(id)}
    const updateDoc = {
      $set: updateData
    }

    console.log(id)

    // connected with mongodb database
    const db = await connectDB();

    // insert news data on db
    const result = await db.collection("allNews").updateOne(query, updateDoc);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
