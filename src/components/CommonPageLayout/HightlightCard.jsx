"use client"
import Image from "next/image";
import Link from "next/link";

const HightlightCard = ( { allNews } ) => {

  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {allNews.slice(1, 4).map((news) => (
        <div key={news.id}>
          <Link href={news.id}>
            <figure>
              <Image
                src={news.thumbnail}
                alt={news.title}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />
            </figure>

            <div className="mt-5 space-y-2">
                <h2 className="tex-xl sm:text-2xl font-title font-bold ">{news.title}</h2>
                <p className="text-lg font-medium text-gray-400">{news.excerpt}</p>
                <p className="flex items-center gap-1 text-gray-400">
                    by
                    <span className="font-bold font-title">{news.author.name }</span>
                </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HightlightCard;
