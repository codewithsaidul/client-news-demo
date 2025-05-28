import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const search = url.searchParams.get("s") || "none";
    const limit = 20;
    const skip = (page - 1) * limit;

    const query = {};

    if (search !== "none") {
      query.title = { $regex: search, $options: "i" }; // case-insensitive search on title
    }

    console.log(query);

    // connecting with mongodb
    const db = await connectDB();
    const result = await db
      .collection("allNews")
      .find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const total = await db.collection("allNews").countDocuments(query);

    return NextResponse.json(
      {
        data: result,
        pagination: {
          total,
          page,
          limit,
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
