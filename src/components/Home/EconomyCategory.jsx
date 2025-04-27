import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const EconomyCategory = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  // console.log(data)

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const economyNews = filterNews.filter((news) => news.category === "Finance");

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
      {economyNews.length > 0 && (
        <div>
          <figure className="relative">
            <Image
              src={economyNews[0]?.thumbnail}
              alt={economyNews[0].title}
              width={1280}
              height={780}
              className="w-full h-96 object-cover"
            />
            <Button className="text-xl font-title py-5 px-7 absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              Economy & {economyNews[0].category}
            </Button>
          </figure>

          <div className="text-center mt-8">
            <Link
              href={"#"}
              className="text-3xl md:text-5xl font-bold font-title text-news-headline"
            >
              {economyNews[0].title}
            </Link>

            <p className="text-lg mt-5 text-news-text">
              <span className="font-bold">{economyNews[0].author.name}</span>

              <span className="mx-2">|</span>

              <span>{dateFormater(economyNews[0].createdAt)}</span>
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-5 mt-16 w-full">
        {economyNews.length > 0 &&
          economyNews.slice(1, 3).map((news) => (
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
                <Link href={"#"} className="text-2xl font-title font-bold">{news.title}</Link>
                <p className="text-lg mt-0.5 text-news-text">
                  <span className="font-bold">
                    {news.author.name}
                  </span>

                  <span className="mx-2">|</span>

                  <span>{dateFormater(news.createdAt)}</span>
                </p>
              </div>
            </div>
          ))}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 w-full">
        {economyNews.length > 0 &&
          economyNews.slice(4, 8).map((news) => (
            <div key={news.id} className="w-full flex items-center gap-2">
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
                  <Link href={"#"} className="text-xl font-title font-bold">{news.title}</Link>
                  <p className="text-base mt-0.5 text-news-text">
                    <span className="font-bold">
                      {news.author.name}
                    </span>
  
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

export default EconomyCategory;
