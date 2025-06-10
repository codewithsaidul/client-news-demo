import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const LeftNewsList = ({ allNews }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16 w-full">
      {allNews.slice(1, 5).map((news, index) => (
        <div
          key={index}
          className="w-full flex flex-row md:flex-col lg:flex-row  gap-2"
        >
          {/* ===================== image ========================== */}
          <figure className="relative w-full aspect-square overflow-hidden max-w-32 max-h-32">
            <Image
              src={news.thumbnail}
              alt={news.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              className="object-center rounded"
            />
          </figure>

          {/* =================== content ===================== */}
          <div className="mt-2 flex-1 flex">
            <div>
              <Link
                href={`/${news.newsType}/${news.category}/${news.slug}`}
                className="text-base sm:text-xl font-title font-bold line-clamp-2"
              >
                {news.title}
              </Link>
              <p className="text-base mt-0.5 text-news-text">
                <span className="font-bold max-sm:text-sm">
                  {news.author.name}
                </span>

                <span className="mx-2">|</span>

                <span className="max-sm:text-sm">
                  {dateFormater(news.createdAt)}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftNewsList;
