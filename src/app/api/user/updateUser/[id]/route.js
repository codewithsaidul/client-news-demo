import { connectDB } from "@/lib/connectDB";
import { verifyRoles } from "@/lib/verifyRoles";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (req, { params }) => {
  try {
    const auth = verifyRoles(req, ["superadmin"]);
    if (auth) return auth;

    // get news data from client side
    const updateData = await req.json();

    const { id } = await params;
    const query = { _id: new ObjectId(id)}



    // connected with mongodb database
    const db = await connectDB();


    const updateDoc = {
      $set: updateData,
    };


    // iupdate user info on db
    const result = await db.collection("users").updateOne(query, updateDoc);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
