import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const priority = url.searchParams.get("priority") || "none";
    const category = url.searchParams.get("category") || "none";
    const limit = 20;
    const skip = (page - 1) * limit;

    const query = {};

    if (priority !== "none") query.priority = priority;
    if (category !== "none") query.category = category;

    // connecting with mongodb
    const db = await connectDB();

    const total = await db.collection("allNews").countDocuments(query);
    
    const result = await db
      .collection("allNews")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();


    // Count published and unpublished with same filters
    const publishedCount = await db
      .collection("allNews")
      .countDocuments({ ...query, status: "published" });
    const unpublishedCount = total - publishedCount;

    return NextResponse.json(
      {
        data: result,
        pagination: {
          total,
          page,
          limit,
          published: publishedCount,
          unpublished: unpublishedCount,
          totalPages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
