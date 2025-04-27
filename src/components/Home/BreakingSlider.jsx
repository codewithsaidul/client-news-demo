"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import BreackingNewsItem from "./BreakingNewsItem";

const BreakingSlider = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const breakingNews = data.filter(news => news.isBreaking)

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
