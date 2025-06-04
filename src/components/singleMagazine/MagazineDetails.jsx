"use client";
import { useGetSingleNewsQuery } from "@/features/getSingleNews/singleNewsAPI";
import { use } from "react";
import Loader from "../loading/Loader";
import Image from "next/image";
import { dateFormater } from "@/lib/utils";
import { sanitizeHtml } from "@/lib/sanitizeHtml";





const MagazineDetails = ({ params }) => {
  const { slug } = use(params);
  const { data: news, isLoading } = useGetSingleNewsQuery(slug);

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


  const cleanDescription = sanitizeHtml(description, {
  allowedTags: ["p", "b", "i", "em", "strong", "ul", "ol", "li", "a", "img", "h1", "h2", "h3", "br"],
  allowedAttributes: {
    a: ["href", "target", "rel"],
    img: ["src", "alt", "width", "height", "style"],
  },
});

  return (
    <div className="mt-24">
      <div>
        <figure className="relative aspect-[3/4] max-w-[290px] sm:max-w-[500px] md:max-w-[600px] max-h-[1000px] px-4 mx-auto">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="object-center rounded"
          />
        </figure>

        <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32">
          <h1 className="my-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-title font-semibold">
            {title}
          </h1>

          <div className="flex items-center gap-5 mt-5">
            <div className="flex items-center gap-3 flex-wrap">
              {tags.map((tag, index) => (
                <span key={index} className="text-gray-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 min-[525px]:gap-8 mt-3">
            <p className="text-xl font-medium font-title capitalize">
              Category: <span>{category}</span>
            </p>
            <p className="text-lg font-normal">
              By <span className="font-title font-bold">Forbes Admin</span>
            </p>
            <span className="text-gray-500">{dateFormater(createdAt)}</span>
          </div>

          <p
            className="text-news-text text-lg mt-8 quill-content"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </div>
      </div>
    </div>
  );
};

export default MagazineDetails;
