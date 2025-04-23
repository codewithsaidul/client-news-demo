// app/api/news/route.ts
import { NextResponse } from 'next/server';
import { newsData } from '@/constants/data';

// Handle GET request
export async function GET() {

    // Filter breaking news if isBreaking is true
    const breakingNews = newsData.filter(news => news.isBreaking);
    return NextResponse.json(breakingNews);
}
