import { newsData } from "@/constants/data";
import { NextResponse } from "next/server";

export const GET = (req) => {
    // Get the URL object from the request
    const url = new URL(req.url);  // This will parse the full URL of the incoming request

    // Get the 'sort' query parameter from the URL
    const sort = url.searchParams.get('sort');  
    
  // Sort the data based on the query parameter
  let sortedNews = [...newsData]; // Clone the array to avoid mutating original data

  if (sort === "asc") {
    sortedNews = sortedNews.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else if (sort === "desc") {
    sortedNews = sortedNews.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }

  return NextResponse.json(sortedNews);
};
