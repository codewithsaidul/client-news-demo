"use client";
import EditForm from "@/components/dashboard/updateNews/EditForm";
import Loader from "@/components/loading/Loader";
import { useGetSingleNewsQuery } from "@/features/getSingleNews/singleNewsAPI";
import { use, useEffect } from "react";

const EditNews = ({ params }) => {
  const { slug } = use(params);
  const { data: singleNews, isLoading, refetch } = useGetSingleNewsQuery(slug, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  // যখন প্রয়োজন হবে তখন
  useEffect(() => {
    if (slug) {
      refetch();
    }
  }, [slug, refetch]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 my-10 px-6">
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="border-b pb-5">
        <h2 className="text-4xl font-title font-bold">Update News</h2>
      </div>

      <div className="mt-16">
        <EditForm singleNews={singleNews} />
      </div>
    </div>
  );
};

export default EditNews;
