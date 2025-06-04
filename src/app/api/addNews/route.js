import { connectDB } from "@/lib/connectDB";
import { slugifyUnique } from "@/lib/slugify";
import { verifyRoles } from "@/lib/verifyRoles";

import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const auth = verifyRoles(req, ["superadmin", "editor"]);
    if (auth) return auth;

    // get news data from client side
    const data = await req.json();

    // connected with mongodb database
    const db = await connectDB();

    // function to check if slug exists in DB
    async function isSlugExists(slug) {
      const existing = await db.collection("allNews").findOne({ slug });
      return !!existing;
    }

    const uniqueSlug = await slugifyUnique(data.title, 50, isSlugExists);

    // add timestamp
    const newsData = {
      ...data,
      slug: uniqueSlug,
      createdAt: new Date(),
    };

    // insert news data on db
    const result = await db.collection("allNews").insertOne(newsData);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
