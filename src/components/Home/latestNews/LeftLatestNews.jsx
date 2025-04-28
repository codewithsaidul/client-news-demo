import { useGetLatestNewsQuery } from "@/features/LatestNews/latestNewsAPI";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";

const LeftLatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const filterNews = data.filter(
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
    <div className="mb-20">
      {/* ================= Featured Economy & Finance Category ================= */}
      {filterNews.length > 0 && (
        <div>
          <figure className="relative">
            <Image
              src={filterNews[0]?.thumbnail}
              alt={filterNews[0].title}
              width={1280}
              height={780}
              className="w-full h-96 object-cover"
            />
            <Button className="text-base min-[350px]:text-xl font-title py-5 px-7 absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              Economy & {filterNews[0].category}
            </Button>
          </figure>

          <div className="text-center mt-8">
            <Link
              href={"#"}
              className="text-2xl min-[350px]:text-3xl md:text-5xl font-bold font-title text-news-headline"
            >
              {filterNews[0].title}
            </Link>

            <p className="text-lg mt-5 text-news-text">
              <span className="font-bold">{filterNews[0].author.name}</span>

              <span className="mx-2">|</span>

              <span>{dateFormater(filterNews[0].createdAt)}</span>
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-5 mt-16 w-full">
        {filterNews.length > 0 &&
          filterNews.slice(1, 3).map((news) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 w-full">
        {filterNews.length > 0 &&
          filterNews.slice(4, 8).map((news) => (
            <div
              key={news.id}
              className="w-full flex max-[450px]:flex-col flex-row md:flex-col lg:flex-row min-[451px]:items-center gap-2"
            >
              <figure>
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={150}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </figure>
              <div className="mt-2 flex-1 flex">
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

export default LeftLatestNews;
