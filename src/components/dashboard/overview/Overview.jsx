"use client"
import NewsCard from "./NewsCard";
import DataTable from "./DataTable";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import Loader from "@/components/loading/Loader";

const Overview = () => {
  const { data, isLoading } = useGetAllNewsQuery({ page: 1 });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 mt-10 ml-5">
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const { data: news, pagination } = data;



  return (
    <div className="mt-5 px-10">
      <h1 className="text-4xl text-news-text font-medium font-title border-b pb-4">
        Dashboard
      </h1>

      <div className="mt-20">
        <NewsCard published={pagination.published} unpublished={pagination.unpublished} totalNews={pagination.total} />
        <DataTable allNews={news} />
      </div>
    </div>
  );
};

export default Overview;
