import Image from "next/image";
import Link from "next/link";

const FeatureBottom = ({ news }) => {
  return (
    <div className="relative w-full max-lg:border-b max-lg:pb-8">
      <Link href={`/${news.newsType}/${news.category}/${news._id}`} className="">
        <figure className="w-full relative aspect-square max-h-[400px] max-lg:hidden">
          <Image
            src={news.thumbnail}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="object-center rounded"
          />
        </figure>

        <div
          className="max-lg:hidden absolute bottom-0 w-full h-[70%] bg__gradient"
          style={{
            zIndex: 1, // To ensure overlay is above the background image
          }}
        />

        <div className="text-news-text lg:text-white lg:absolute lg:bottom-5 lg:left-5 px-5 lg:z-2  w-full h-fit">
          <span className="text-sm capitalize">{news.category}</span>
          <h2 className="text-2xl font-bold font-title my-1">{news.title}</h2>
          <p className="text-base">
            {/* <span className="max-lg:text-gray-500">by</span> {news.author.name} */}
            <span className="max-lg:text-gray-500">by</span> Forbes Admin
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FeatureBottom;
