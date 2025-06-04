import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {


     const { slug } = await params

    // connected with mongodb database
    const db = await connectDB();
    const query = { slug: slug}

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
