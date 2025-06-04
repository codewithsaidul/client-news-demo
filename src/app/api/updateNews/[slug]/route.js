import { connectDB } from "@/lib/connectDB";
import { slugifyUnique } from "@/lib/slugify";
import { verifyAccess } from "@/lib/verifyAccess";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const errorResponse = verifyAccess(req);
    if (errorResponse) return errorResponse;

    // get news data from client side
    const updateData = await req.json();

    const { slug: sg } = await params;
    const query = { slug: sg}



    // connected with mongodb database
    const db = await connectDB();


    const updateDoc = {
      $set: updateData,
    };

    console.log(updateDoc)


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
