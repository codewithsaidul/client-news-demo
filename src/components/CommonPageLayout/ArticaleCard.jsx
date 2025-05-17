import Image from "next/image";
import Link from "next/link";

const ArticaleCard = ({ allNews }) => {
  return (
    <div className="mt-16 grid grid-cols-1  gap-10">
      {allNews.slice(4, 8).map((news) => (
        <div key={news.id} className="border-b pb-10">
          <Link href={news.id} className="flex gap-5 items-center">
            <figure>
              <Image
                src={news.thumbnail}
                alt={news.title}
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
            </figure>

            <div className="mt-5 space-y-2">
              <h2 className="tex-xl sm:text-2xl font-title font-bold ">
                {news.title}
              </h2>
              <p className="text-lg font-medium text-gray-400">
                {news.excerpt}
              </p>
              <p className="flex items-center gap-1 text-gray-400">
                by
                <span className="font-bold font-title">{news.author.name}</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArticaleCard;
