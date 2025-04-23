"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetBreakingNewsQuery } from "@/features/BreackingNews/brackingNewsApi";
import SliderItem from "./SliderItem";
import { useEffect } from "react";

const BreakingSlider = () => {
  const { data: breakingNews, isLoading } = useGetBreakingNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    //   33% of the carousel width.
    <div className="w-full px-12 md:px-8">
      <Carousel
        opts={{
          align: "start",
          loop: true, // 🔁 This enables looping
        }}
      >
        <CarouselContent>
          {breakingNews.map((news) => (
            <SliderItem key={news.id} item={news} />
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default BreakingSlider;
