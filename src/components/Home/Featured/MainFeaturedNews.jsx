import Loader from "@/components/loading/Loader";
import { useGetLatestNewsQuery } from "@/features/LatestNews/latestNewsAPI";
import Image from "next/image";
import Link from "next/link";
import FeatureBottom from "./FeatureBottom";

const MainFeaturedNews = ( { featuredNews } ) => {


  const { id, title, excerpt, category, thumbnail } = featuredNews[0];

  return (
    <div>
      <div className="border-b pb-10">
        <Link href={`${id}`} className="relative">
          <figure className="w-full">
            <Image
              src={thumbnail}
              alt={title}
              width={450}
              height={200}
              className="w-full h-auto"
            />
          </figure>

          <div
            className="absolute bottom-0 w-full h-80 bg__gradient"
            style={{
              zIndex: 1, // To ensure overlay is above the background image
            }}
          />

          <div className="text-white absolute bottom-12 left-5  z-2  w-[70%] h-fit">
            <span className="text-xl">{category}</span>
            <h2 className="text-2xl md:text-4xl font-bold font-title my-5">
              {title}
            </h2>
            <p className="text-lg font-medium">{excerpt}</p>
          </div>
        </Link>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row max-lg:gap-8 gap-5">
        {featuredNews.slice(1, 3).map((news) => <FeatureBottom key={news.id} news={news} />)}
      </div>
    </div>
  );
};

export default MainFeaturedNews;
