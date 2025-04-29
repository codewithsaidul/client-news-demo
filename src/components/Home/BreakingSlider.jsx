"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import BreackingNewsItem from "./BreakingNewsItem";
import Loader from "../loading/Loader";

const BreakingSlider = () => {
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

  const breakingNews = data.filter((news) => news.isBreaking);

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
            <BreackingNewsItem key={news.id} item={news} />
          ))}
        </CarouselContent>

        <CarouselPrevious className="hover:bg-news-cta duration-500 hover:duration-500 hover:text-white" />
        <CarouselNext className="hover:bg-news-cta duration-500 hover:duration-500 hover:text-white" />
      </Carousel>
    </div>
  );
};

export default BreakingSlider;
