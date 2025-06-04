import { connectDB } from "@/lib/connectDB";
import { verifyRoles } from "@/lib/verifyRoles";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    const auth = verifyRoles(req, ["superadmin", "editor"]);
    if (auth) return auth;

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
