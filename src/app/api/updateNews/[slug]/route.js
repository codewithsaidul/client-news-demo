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

    const { id } = params;
    const query = { _id: new ObjectId(id)}



    // connected with mongodb database
    const db = await connectDB();

    // Define slug exists checker for this DB collection
    async function isSlugExists(slug) {
      // check slug in DB except current id (to avoid conflict with same doc)
      const existing = await db.collection("allNews").findOne({
        slug,
        _id: { $ne: new ObjectId(id) }
      });
      return existing ? true : false;
    }

    // Generate unique slug if title is provided
    if (updateData.title) {
      updateData.slug = await slugifyUnique(updateData.title, 50, isSlugExists);
    }
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
