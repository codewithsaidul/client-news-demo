import { useGetLatestNewsQuery } from "@/features/LatestNews/latestNewsAPI";
import Image from "next/image";
import Link from "next/link";

const RightLatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const filteredNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const dateFormater = (newsDate) => {
    const date = new Date(newsDate);

    // Format the date to "Apr 23, 2025"
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short", // Short month name (e.g., Apr)
      day: "2-digit", // 2-digit day (e.g., 23)
      year: "numeric", // Numeric year (e.g., 2025)
    });
    return formattedDate;
  };

  return (
    <div className="p-4 bg-news-white-bg shadow-[0_0px_4px_rgba(0,0,0,0.15)] rounded-lg h-fit">
      <h2 className="text-center text-2xl font-title font-semibold">
        Latest News
      </h2>

      <div className="grid grid-cols-1 gap-5 mt-16 w-full">
        {filteredNews.length > 0 &&
          filteredNews.slice(7, 14).map((news) => (
            <div
              key={news.id}
              className="w-full flex flex-row md:flex-col lg:flex-row items-center gap-2"
            >
              <figure>
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={250}
                  height={250}
                  className="w-full h-full"
                />
              </figure>
              <div className="mt-2 flex-1 flex justify-center">
                <div>
                  <Link href={"#"} className="text-xl font-title font-bold">
                    {news.title}
                  </Link>
                  <p className="text-base mt-0.5 text-news-text">
                    <span className="font-bold">{news.author.name}</span>

                    <span className="mx-2">|</span>

                    <span>{dateFormater(news.createdAt)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RightLatestNews;
