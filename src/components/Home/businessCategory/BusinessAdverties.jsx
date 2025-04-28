import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BusinessAdverties = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 w-full">
      {news.length > 0 &&
        news.slice(1, 5).map((news) => (
          <div
            key={news.id}
            className="w-full flex flex-row items-center md:flex-col md:items-start lg:flex-row lg:items-center gap-2"
          >
            <figure>
              <Image
                src={news.thumbnail}
                alt={news.title}
                width={200}
                height={200}
                className="w-full h-full"
              />
            </figure>
            <div className="mt-2 flex-1 flex">
              <div>
                <Link href={"#"} className="text-xl font-title font-bold">
                  {news.title}
                </Link>
                <p className="text-base mt-0.5 text-news-text">
                  <span className="font-bold">{news.author.name}</span>

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

export default BusinessAdverties;
