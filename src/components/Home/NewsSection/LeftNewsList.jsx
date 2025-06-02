import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftNewsList = ({ allNews }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 w-full">
      {allNews.length > 0 &&
        allNews.slice(1, 5).map((news, index) => (
          <div
            key={index}
            className="w-full flex flex-row md:flex-col lg:flex-row  gap-2"
          >
            {/* ===================== image ========================== */}
            <figure className="max-w-96 max-h-96">
              <Image
                src={news.thumbnail}
                alt={news.title}
                width={150}
                height={350}
                className="w-24 md:w-full h-24 md:h-52 lg:w-28 lg:h-28 object-cover"
              />
            </figure>

            {/* =================== content ===================== */}
            <div className="mt-2 flex-1 flex">
              <div>
                <Link href={`/news/${news.category}/${news._id}`} className="text-base sm:text-xl font-title font-bold line-clamp-2">
                  {news.title}
                </Link>
                <p className="text-base mt-0.5 text-news-text">
                  {/* <span className="font-bold">{news.author.name}</span> */}
                  <span className="max-[400px]:text-sm font-bold">Forbes Admin</span>

                  <span className="mx-2">|</span>

                  <span className="max-[400px]:text-sm">{dateFormater(news.createdAt)}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LeftNewsList;
