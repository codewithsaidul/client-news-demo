import Image from "next/image";
import React from "react";
import { CarouselItem } from "../ui/carousel";

const PopularNewsItem = ({ item }) => {
  return (
    <CarouselItem
      className={
        "basis-full min-[700px]:basis-1/2 min-[930px]:basis-1/3 min-[1120px]:basis-1/4 cursor-pointer"
      }
    >
      <div className="bg-news-section-bg p-3 shadow-lg">
          <figure>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </figure>
    
          <h2 className="text-2xl font-bold font-title text-black mt-5">{item.excerpt}</h2>
      </div>
    </CarouselItem>
  );
};

export default PopularNewsItem;
