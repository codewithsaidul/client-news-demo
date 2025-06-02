import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const FeatureSideNews = ({ featuredNews }) => {

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 w-full">
        {featuredNews.length > 0 &&
          featuredNews.map((news) => (
            <div key={news._id} className="w-full flex items-center gap-3 border-b pb-10">
              <figure className="max-w-24 max-h-24">
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={150}
                  height={150}
                  className="w-fit h-fit"
                />
              </figure>
              <div className="mt-2">
                <Link href={`/news/${news.category}/${news._id}`} className="text-sm min-[450px]:text-xl font-title text-news-headline font-semibold line-clamp-2">
                  {news.title}
                </Link>
                <p className="text-lg mt-0.5 text-news-text">
                  {/* <span className="font-bold">{news.author.name}</span> */}
                  <span className="font-bold text-sm">Forbes Admin</span>

                  <span className="mx-2">|</span>

                  <span className="text-sm">{dateFormater(news.createdAt)}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeatureSideNews;
