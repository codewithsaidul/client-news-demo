"use client";
import { useGetSingleNewsQuery } from "@/features/getSingleNews/singleNewsAPI";
import { use } from "react";
import Loader from "../loading/Loader";
import Image from "next/image";
import { dateFormater } from "@/lib/utils";
const NewsDetails = ({ params }) => {
  const { id } = use(params);
  const { data: news, isLoading } = useGetSingleNewsQuery(id);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 my-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const { title, description, thumbnail, tags, category, createdAt } = news;

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 mt-32">
      <div>
        <figure>
          <Image
            src={thumbnail}
            alt={title}
            width={1200}
            height={780}
            className="w-full h-[800px] object-cover rounded-xl"
          />
        </figure>

        <div>
          <div className="flex items-center gap-5 mt-5">
            <p>Tags: </p>

            <div className="flex items-center gap-3">
              {tags.map((tag, index) => (
                <span key={index} className="text-gray-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 mt-3">
            <p className="text-xl font-medium font-title capitalize">
              Category: <span>{category}</span>
            </p>
            <p className="text-lg font-normal">
              By <span className="font-title font-bold">Forbes Admin</span>
            </p>
            <span className="text-gray-500">{dateFormater(createdAt)}</span>
          </div>

          <h1 className="my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-semibold">
            {title}
          </h1>

          <p className="text-news-text text-lg">
            {description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
