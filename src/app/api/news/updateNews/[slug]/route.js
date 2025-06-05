import { connectDB } from "@/lib/connectDB";
import { verifyRoles } from "@/lib/verifyRoles";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const auth = verifyRoles(req, ["superadmin", "editor"]);
    if (auth) return auth;

    // get news data from client side
    const updateData = await req.json();

    const { slug: sg } = await params;
    const query = { slug: sg}



    // connected with mongodb database
    const db = await connectDB();


    const updateDoc = {
      $set: updateData,
    };




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
