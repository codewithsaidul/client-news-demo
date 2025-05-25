import { connectDB } from "@/lib/connectDB";
import { verifyAccess } from "@/lib/verifyAccess";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {


    const { id } = params

    // connected with mongodb database
    const db = await connectDB();
    const query = { _id: new ObjectId(id)}

    // insert news data on db
    const result = await db.collection("allNews").findOne(query);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
