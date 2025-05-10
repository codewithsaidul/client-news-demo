"use client";
import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import React from "react";
import Loader from "../loading/Loader";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 mb-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const allNews = data[0];
  return (
    <div className="flex flex-col min-[900px]:flex-row min-[900px]:items-center gap-5">
      <Link href="#" className="w-full min-[900px]:w-[40%]">
        <h2 className="text-news-headline font-bold max-sm:text-4xl text-6xl xl:text-8xl font-title">
          {allNews.title}
        </h2>
        <p className="text-xl font-medium text-news-text">{allNews.content}</p>
        <p className="flex items-center gap-3">
          <span className="font-bold">by</span>
          {allNews.author.name}
        </p>
      </Link>

      <Link href="#" className="w-full min-[900px]:w-[60%]">
        <figure>
          <Image
            src={allNews.thumbnail}
            alt={allNews.title}
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
