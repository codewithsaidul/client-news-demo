
import { useGetAllNewsQuery } from '@/features/AllNews/allNewsAPI';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel';
import PopularNewsItem from './PopularNewsItem';

const PopularNewsSlider = () => {
    const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;


  const featuredNews = data.filter(news => news.isFeatured)


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
          {featuredNews.map((news) => (
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