"use client"

import ArticaleCard from "@/components/CommonPageLayout/ArticaleCard";
import HeroSection from "@/components/CommonPageLayout/HeroSection";
import HightlightCard from "@/components/CommonPageLayout/HightlightCard";
import Loader from "@/components/loading/Loader";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import { useGetDummyNewsQuery } from "@/features/dummyNews/dummyNewsAPI";

const InnovationNews = () => {
   const { data: news, isLoading } = useGetAllNewsQuery( { category: "innovation" } );
 
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

   const innovationNews = news.data;

   console.log(innovationNews)
 
   return (
     <div className="px-4 md:px-8 mt-20">
       <HeroSection news={innovationNews[0]} />
       <HightlightCard allNews={innovationNews} />
       <ArticaleCard allNews={innovationNews} />
     </div>
   );
}

export default InnovationNews