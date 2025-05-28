"use client";

import ArticaleCard from "@/components/CommonPageLayout/ArticaleCard";
import HeroSection from "@/components/CommonPageLayout/HeroSection";
import HightlightCard from "@/components/CommonPageLayout/HightlightCard";
import Loader from "@/components/loading/Loader";
import PaginationPage from "@/components/Shared/PaginationPage";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import { useState } from "react";

const BillionairesNews = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllNewsQuery({
    page: page,
    category: "billionaires",
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 my-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const { data: news, pagination } = data;

  const billionairesNews = news.filter((news) => news.priority === "none");

  return (
    <div className="px-4 md:px-8 mt-20">
      <HeroSection news={billionairesNews[0]} />
      <HightlightCard allNews={billionairesNews} />
      <ArticaleCard allNews={billionairesNews} />

      <div className="mt-7">
        <PaginationPage
          page={page}
          setPage={setPage}
          totalPages={pagination?.totalPages}
        />
      </div>
    </div>
  );
};

export default BillionairesNews;
