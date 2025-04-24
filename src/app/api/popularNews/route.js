import { newsData } from "@/constants/data";
import { NextResponse } from "next/server";

export async function GET() {
  // Sort by views (descending)
  const sortedNews = newsData.sort((a, b) => b.views - a.views);

  // Optional: only top 5 or 10
  const topNews = sortedNews.slice(0, 4);

  return NextResponse.json(topNews);
}
