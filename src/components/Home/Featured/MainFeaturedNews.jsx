import Image from "next/image";
import Link from "next/link";
import FeatureBottom from "./FeatureBottom";

const MainFeaturedNews = ( { featuredNews } ) => {


  const { _id, title, description, category, thumbnail } = featuredNews[0];

  return (
    <div>
      <div className="border-b pb-10 w-full">
        <Link href={`/news/${category}/${_id}`} className="relative w-full">
          <figure className="relative w-full overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              width={450}
              height={200}
              className="w-full h-auto object-cover"
            />
          </figure>

          <div
            className="absolute bottom-0 w-full h-[80%] bg__gradient"
            style={{
              zIndex: 1, // To ensure overlay is above the background image
            }}
          />

          <div className="text-white absolute bottom-4 left-2 min-[540px]:bottom-12 min-[540px]:left-5 z-2 w-[90%] h-auto">
            {/* max-[430px]:text-xl */}
            <span className="text-base capitalize">{category}</span>
            <h2 className="text-xl sm:text-4xl md:text-4xl font-bold font-title my-2">
              {title}
            </h2>
            <p className="text-base font-medium line-clamp-2">{description}</p>
          </div>
        </Link>
      </div>

      <div className="mt-5 flex flex-col lg:flex-row max-lg:gap-8 gap-5">
        {featuredNews.slice(1, 3).map((news) => <FeatureBottom key={news._id} news={news} />)}
      </div>
    </div>
  );
};

export default MainFeaturedNews;
