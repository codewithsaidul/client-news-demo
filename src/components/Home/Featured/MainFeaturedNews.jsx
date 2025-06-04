import Image from "next/image";
import Link from "next/link";
import FeatureBottom from "./FeatureBottom";
import { stripHtml } from "@/lib/stripHtml";

const MainFeaturedNews = ({ featuredNews }) => {
  const { _id, title, description, category, newsType, thumbnail } = featuredNews[0];

  return (
    <div>
      <div className="border-b pb-10 relative w-full">
        <Link href={`/${newsType}/${category}/${_id}`} className="w-full">
          <figure className="w-full relative aspect-square max-h-[600px] overflow-hidden">
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              className="object-center rounded"
            />
          </figure>

          <div
            className="absolute bottom-0 w-full h-[80%] bg__gradient z-[1]"
          />

          <div className="text-white absolute bottom-4 left-2 min-[540px]:bottom-12 min-[540px]:left-5 z-2 w-[90%] h-auto">
            {/* max-[430px]:text-xl */}
            <span className="text-base capitalize">{category}</span>
            <h2 className="max-[350px]:text-base sm:text-3xl md:text-4xl font-bold font-title my-2 leading-snug break-words">
              {title}
            </h2>

            <p className="text-base font-medium line-clamp-2">{stripHtml(description)}</p>
          </div>
        </Link>
      </div>

      <div className="mt-16 flex flex-col lg:flex-row max-lg:gap-8 gap-5">
        {featuredNews.slice(1, 3).map((news) => (
          <FeatureBottom key={news._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default MainFeaturedNews;
