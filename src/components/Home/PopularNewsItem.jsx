import Image from "next/image";
import React from "react";
import { CarouselItem } from "../ui/carousel";

const PopularNewsItem = ({ item }) => {
  return (
    <CarouselItem
      className={
        "basis-full min-[700px]:basis-1/2 min-[930px]:basis-1/3 min-[1120px]:basis-1/4 cursor-pointer mt-5"
      }
    >
      <div className="h-fit p-3 bg-news-white-bg shadow-[0_0px_4px_rgba(0,0,0,0.15)] rounded-lg">
          <figure>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </figure>
    
          <h2 className="text-2xl font-bold font-title text-black mt-5 line-clamp-2">{item.excerpt}</h2>
      </div>
    </CarouselItem>
  );
};

export default PopularNewsItem;
