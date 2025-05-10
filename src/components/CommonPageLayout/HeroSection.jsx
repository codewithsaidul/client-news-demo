"use client";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({news}) => {

  return (
    <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-center gap-5">
      <Link href="#" className="w-full min-[900px]:w-[40%]">
        <h2 className="text-news-headline font-bold max-sm:text-4xl text-6xl xl:text-8xl font-title">
          {news.title}
        </h2>
        <p className="text-xl font-medium text-news-text my-3">{news.content}</p>
        <p className="flex items-center gap-1 text-base">
          <span className="font-bold">by</span>
          {news.author.name}
        </p>
      </Link>

      <Link href="#" className="w-full min-[900px]:w-[60%]">
        <figure>
          <Image
            src={news.thumbnail}
            alt={news.title}
            width={1200}
            height={1200}
            className="w-full h-auto object-cover"
          />
        </figure>
      </Link>
    </div>
  );
};

export default HeroSection;
