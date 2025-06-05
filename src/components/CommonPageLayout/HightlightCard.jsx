"use client";
import { stripHtml } from "@/lib/stripHtml";
import Image from "next/image";
import Link from "next/link";

const HightlightCard = ({ allNews }) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {allNews.slice(1, 4).map((news) => (
        <div key={news._id}>
          <Link href={`/${news.newsType}/${news.category}/${news.slug}`}>
            <figure className="relative aspect-square w-full max-h-[400px]  overflow-hidden rounded-lg">
              <Image
                src={news.thumbnail}
                alt={news.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-center"
              />
            </figure>

            <div className="mt-5 space-y-2">
              <h2 className="tex-xl sm:text-2xl font-title font-bold ">
                {news.title}
              </h2>
              <p className="text-lg font-medium text-gray-400 line-clamp-4">
                {stripHtml(news.description)}
              </p>
              <p className="flex items-center gap-1 text-gray-400">
                by
                <span className="font-bold font-title">{news.author.name }</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HightlightCard;
