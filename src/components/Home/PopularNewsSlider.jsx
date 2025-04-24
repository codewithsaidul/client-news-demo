
import { useGetBreakingNewsQuery } from '@/features/BreackingNews/brackingNewsApi';
import React from 'react'
import PopularNewsItem from './PopularNewsItem';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';

const PopularNewsSlider = () => {
    const { data: breakingNews, isLoading } = useGetBreakingNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  return (
    //   33% of the carousel width.
    <div className="w-full px-12 md:px-8 mt-10">
      <Carousel
        opts={{
          align: "start",
          loop: true, // 🔁 This enables looping
        }}
      >
        <CarouselContent>
          {breakingNews.map((news) => (
            <PopularNewsItem key={news.id} item={news} />
          ))}
        </CarouselContent>

        <CarouselPrevious className="hover:bg-news-cta duration-500 hover:duration-500 hover:text-white" />
        <CarouselNext className="hover:bg-news-cta duration-500 hover:duration-500 hover:text-white" />
      </Carousel>
    </div>
  );
}

export default PopularNewsSlider