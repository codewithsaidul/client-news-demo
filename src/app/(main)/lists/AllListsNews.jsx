"use client"

import ArticaleCard from "@/components/CommonPageLayout/ArticaleCard";
import HeroSection from "@/components/CommonPageLayout/HeroSection";
import HightlightCard from "@/components/CommonPageLayout/HightlightCard";
import Loader from "@/components/loading/Loader";
import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";

const AllListsNews = () => {
    const { data, isLoading } = useGetAllNewsQuery();
  
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 mb-10">
          <Loader />
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </div>
      );
    }
  
    return (
      <div className="px-4 md:px-8 mt-20">
        <HeroSection news={data[0]} />
        <HightlightCard allNews={data} />
        <ArticaleCard allNews={data} />
      </div>
    );
}

export default AllListsNews