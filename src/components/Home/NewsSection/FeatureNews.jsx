import { Button } from "@/components/ui/button";
import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureNews = ({ news }) => {
  return (
    <div>
      <figure className="relative">
        <Image
          src={news?.thumbnail}
          alt={news.title}
          width={1280}
          height={780}
          className="w-full h-96 object-cover"
        />
        <Button className="text-xl font-title py-5 px-7 absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          {news.category === "Finance"
            ? "Economy and Finance"
            : news.category}
        </Button>
      </figure>

      <div className="text-center mt-8">
        <Link
          href={"#"}
          className="text-2xl min-[350px]:text-3xl md:text-5xl font-bold font-title text-news-headline"
        >
          {news.title}
        </Link>

        <p className="text-lg mt-5 text-news-text">
          <span className="font-bold">{news.author.name}</span>

          <span className="mx-2">|</span>

          <span>{dateFormater(news.createdAt)}</span>
        </p>
      </div>
    </div>
  );
};

export default FeatureNews;
