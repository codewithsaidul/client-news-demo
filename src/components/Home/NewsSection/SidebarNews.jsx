import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SidebarNews = ( { allNews } ) => {

  return (
    <div className="min-[500px]:p-4 bg-news-white-bg min-[500px]:shadow-[0_0px_4px_rgba(0,0,0,0.15)] rounded-lg h-fit">
      <div className="flex flex-col gap-5 w-full">
        {allNews.length > 0 &&
          allNews.slice(6, 8).map((news) => (
            <div key={news.id} className="w-full pr-4">
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
    </div>
  );
};

export default SidebarNews;
