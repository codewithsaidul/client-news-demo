import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

const categoryMap = {
  news: [
    "world-news",
    "innovation",
    "investing",
    "billionaires",
    "entrepreneurs",
    "leadership",
  ],
  life: ["wellness", "travel", "lifestyle", "property", "style", "motors"],
  list: ["top-10", "must-read", "editors-picks"],
  magazine: ["cover-story", "exclusive", "breaking-today"],
};


export const GET = async (req) => {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const priority = url.searchParams.get("priority") || "none";
    const category = url.searchParams.get("category") || "none";
    const newsType = url.searchParams.get("newsType") || "none";
    const limit = 20;
    const skip = (page - 1) * limit;

    const query = {};

    if (priority !== "none") query.priority = priority;

    if (newsType !== "none") {
      query.newsType = newsType;

      if (category !== "none") {
        // user specific category diyeche
        query.category = category;
      } else {
        // user category na diye thakle, newsType er shob categories diye filter
        query.category = { $in: categoryMap[newsType] };
      }
    } else {
      // newsType nai, category specified thakle filter add korun
      if (category !== "none") query.category = category;
    }


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
