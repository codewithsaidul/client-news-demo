import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const priority = url.searchParams.get("priority") || "none";
    const category = url.searchParams.get("category") || "none";
    const limit =  20;
    const skip = (page - 1) * limit;


    const query = {};

    if (priority !== "none") query.priority = priority;
    if (category !== "none") query.category = category;


    console.log(query)

    // isEditorsPick isFeatured isBreaking

    // connecting with mongodb
    const db = await connectDB();
    const result = await db
      .collection("allNews")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

      const total = await db.collection("allNews").countDocuments();
    
    return NextResponse.json({
        data: result,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
};
