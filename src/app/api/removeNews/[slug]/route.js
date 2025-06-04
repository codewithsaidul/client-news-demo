import { connectDB } from "@/lib/connectDB";
import { verifyAccess } from "@/lib/verifyAccess";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    const errorResponse = verifyAccess(req);
    if (errorResponse) return errorResponse;

    const { slug } = params;

    // connected with mongodb database
    const db = await connectDB();
    const query = { slug: slug};

    // insert news data on db
    const result = await db.collection("allNews").deleteOne(query);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
