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
            className="w-full flex max-[450px]:flex-col flex-row md:flex-col lg:flex-row min-[451px]:items-center gap-2"
          >
            <figure>
              <Image
                src={news.thumbnail}
                alt={news.title}
                width={150}
                height={350}
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="mt-2 flex-1 flex">
              <div>
                <Link href={`/news/${news.category}/${news._id}`} className="text-xl font-title font-bold">
                  {news.title}
                </Link>
                <p className="text-base mt-0.5 text-news-text">
                  {/* <span className="font-bold">{news.author.name}</span> */}
                  <span className="font-bold">Forbes Admin</span>

                  <span className="mx-2">|</span>

                  <span>{dateFormater(news.createdAt)}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LeftNewsList;
