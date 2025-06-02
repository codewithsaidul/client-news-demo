"use client";

import Loader from "@/components/loading/Loader";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const { data: news, isLoading } = useGetAllNewsQuery({
    priority: "isBreaking",
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-10 my-20">
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const breakingNews = news.data[0];

  return (
    <section className="my-20 min-h-screen relative">
      <Link
        href={`/news/${breakingNews.category}/${breakingNews._id}`}
        className="w-full h-auto"
      >
        <figure className="relative w-full h-screen aspect-video">
          <Image
            src={breakingNews.thumbnail}
            alt="hero image"
            fill
            className="object-center  h-screen"
            priority
          />
        </figure>

        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            zIndex: 1, // To ensure overlay is above the background image
          }}
        />

        <div className="absolute max-[767px]:top-[70%] left-0 max-md:p-2 min-md:bottom-16 min-md:left-5 text-white min-md:right-10 z-2 max-md:bg-news-dark h-fit space-y-3 min-lg:w-[60%]">
          {/* ========================= category ======================= */}
          <span className="max-[430px]:text-xs text-sm mb-3 capitalize">
            {breakingNews.category}
          </span>

          {/* ========================= title ======================= */}
          <h1 className="max-[430px]:text-xl max-[649px]:text-2xl min-[650px]:text-4xl min-[960px]:text-6xl mt-3 mb-7 font-bold font-title duration-500 hover:underline hover:duration-500 line-clamp-2">
            {breakingNews.title}
          </h1>

          {/* ========================= description ======================= */}
          <p className="max-[430px]:text-sm text-base lg:text-2xl line-clamp-2">
            {breakingNews.description}
          </p>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
