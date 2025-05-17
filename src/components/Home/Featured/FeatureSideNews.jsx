import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const FeatureSideNews = ({ featuredNews }) => {

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 w-full">
        {featuredNews.length > 0 &&
          featuredNews.map((news) => (
            <div key={news.id} className="w-full flex items-center gap-3 border-b pb-10">
              <figure>
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </figure>
              <div className="mt-2">
                <Link href={"#"} className="text-3xl font-title text-news-headline font-semibold">
                  {news.title}
                </Link>
                <p className="text-lg mt-0.5 text-news-text">
                  <span className="font-bold">{news.author.name}</span>

                  <span className="mx-2">|</span>

                  <span>{dateFormater(news.createdAt)}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeatureSideNews;
