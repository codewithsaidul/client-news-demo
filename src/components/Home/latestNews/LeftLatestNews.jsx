import Image from "next/image";
import Link from "next/link";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import { dateFormater } from "@/lib/utils";

const LeftLatestNews = ({ latestNews }) => {
  return (
    <div className="mb-20">
      {/* ================= Latest Featured News ================= */}
      {latestNews.length > 0 && <FeatureNews news={latestNews[0]} />}

      {/* =============== Latest News Card ======================= */}
      <div className="flex flex-col md:flex-row gap-5 mt-16 w-full">
        {latestNews.length > 0 &&
          latestNews.slice(1, 3).map((news) => (
            <div key={news.id} className="w-full">
              <figure>
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </figure>
              <div className="mt-2">
                <Link href={"#"} className="text-2xl font-title font-bold">
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

      {/* =================== Latest Left News List ================== */}
      {latestNews.length > 0 && <LeftNewsList allNews={latestNews} />}
    </div>
  );
};

export default LeftLatestNews;
