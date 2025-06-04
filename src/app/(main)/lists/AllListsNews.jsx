"use client";

import ArticaleCard from "@/components/CommonPageLayout/ArticaleCard";
import HeroSection from "@/components/CommonPageLayout/HeroSection";
import HightlightCard from "@/components/CommonPageLayout/HightlightCard";
import Loader from "@/components/loading/Loader";
import NoDataFound from "@/components/Shared/NoDataFound";
import PaginationPage from "@/components/Shared/PaginationPage";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import { useState } from "react";

const AllListsNews = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllNewsQuery({
    page: page,
    newsType: "list",
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 my-10 px-6">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const { data: news, pagination } = data;

  const listNews = news.filter(
    (nw) => nw.priority === "none" && nw.status === "published"
  );

  return (
    <div>
      {listNews.length > 0 ? (
        <div className="px-4 md:px-8 mt-20">
          <HeroSection news={listNews[0]} />
          <HightlightCard allNews={listNews} />
          <ArticaleCard allNews={listNews} />

          <div className="mt-7">
            <PaginationPage
              page={page}
              setPage={setPage}
              totalPages={pagination?.totalPages}
            />
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default AllListsNews;
