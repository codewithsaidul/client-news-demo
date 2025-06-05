"use client";
import { useSearchParams } from "next/navigation";
import Loader from "../loading/Loader";
import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import PaginationPage from "../Shared/PaginationPage";
import { useState } from "react";
import { useGetSearchNewsQuery } from "@/features/news/searchNews/searchNewsAPI";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("s");
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetSearchNewsQuery({searchTerm: query, page: page});

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 mt-32">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const { data: allNews, pagination } = data;


  return (
    <div className="mt-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-72">
      <div className="border-b pb-10 border-orange-400/50">
        <p className="text-xl font-title font-medium">
          Showing {pagination.total} result for:{" "}
        </p>
        <p className="mt-5 text-3xl md:text-4xl font-semibold font-title">
          {query}
        </p>
      </div>

      {allNews.length > 0 ? (
        <div>
          <div className="mt-24 grid grid-cols-1 max-[850px]:gap-y-20 gap-10">
            {allNews.map((news) => (
              <div key={news._id} className="border-b pb-12">
                <div className="flex max-[850px]:flex-col flex-row max-[850px]:order-2 gap-7">
                  {/* news date */}
                  <div className="max-[850px]:w-full max-[850px]:order-3 w-[10%]">
                    <span>{dateFormater(news.createdAt)}</span>
                  </div>

                  {/* news tite & description */}
                  <div className="max-[850px]:w-full max-[850px]:order-2 w-[65%] space-y-3">
                    <Link href={`/news/${news.category}/${news._id}`}>
                      <h2 className="text-2xl font-title hover:underline mb-5">
                        {news.title}
                      </h2>
                    </Link>
                    <p className="line-clamp-3">{news.description}</p>
                    <p className="text-lg">
                      By <span className="font-bold">Forbes Admin</span>
                    </p>
                  </div>

                  <figure className="max-[850px]:w-full max-[850px]:order-1 w-[20%]">
                    <Link href={`/news/${news.category}/${news._id}`}>
                      <Image
                        src={news.thumbnail}
                        alt={news.title}
                        width={300}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <PaginationPage
              page={page}
              setPage={setPage}
              totalPages={pagination?.totalPages}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[60vh]">
          <p className="text-2xl text-center text-gray-600">
            No results match your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
