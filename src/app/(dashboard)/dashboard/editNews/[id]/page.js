"use client";
import EditForm from "@/components/dashboard/updateNews/EditForm";
import { useGetSingleNewsQuery } from "@/features/getSingleNews/singleNewsAPI";
import { use } from "react";

const EditNews = ({ params }) => {
  const { id } = use(params);
  const { data: singleNews, isLoading } = useGetSingleNewsQuery(id);

  if (isLoading) {
    return <div>Loading...</div>;
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
