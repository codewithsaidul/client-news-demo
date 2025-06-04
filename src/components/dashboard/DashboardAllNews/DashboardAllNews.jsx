"use client";
import Loader from "@/components/loading/Loader";
import PaginationPage from "@/components/Shared/PaginationPage";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import { useDeleteNewsMutation } from "@/features/deleteNews/deleteNewsAPI";
import { stripHtml } from "@/lib/stripHtml";
import { dateFormater } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge";


const DashboardAllNews = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetAllNewsQuery({ page });
  const [deleteNews] = useDeleteNewsMutation();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 mt-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const deleteNewsByID = async (slug) => {
    try {
      const { data } = await deleteNews(slug);
      if (data.acknowledged && data.deletedCount > 0) {
        Swal.fire({
          title: "News delete successfully!",
          icon: "success",
        });
      }
    } catch {
      Swal.fire({
        title: "News deleted unsuccessfully!",
        icon: "error",
      });
    }
  };

  const { data: allNews, pagination } = data;

  return (
    <div>
      {allNews.length > 0 ? (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Sl No</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>News Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allNews.slice(0, 20).map((news, index) => (
                <TableRow key={news._id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="text-xl font-title font-semibold truncate max-w-[300px]">
                    {news.title}
                  </TableCell>
                  <TableCell className="truncate max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis">
                    {stripHtml(news.description)}
                  </TableCell>
                  <TableCell className="capitalize">{news.category}</TableCell>
                  <TableCell className="capitalize">{news.newsType}</TableCell>
                  <TableCell>
                    <span
                      className={twMerge(
                        "p-2 rounded-lg capitalize",
                        news.status === "published"
                          ? "bg-[#00C62C]/10 text-[#00C62C]"
                          : "bg-[#FFA82E]/10 text-[#FFA82E]"
                      )}
                    >
                      {news.status}
                    </span>
                  </TableCell>
                  <TableCell>{dateFormater(news.createdAt)}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="bg-blue-500">
                      <Link href={`/dashboard/editNews/${news.slug}`}>Edit</Link>
                    </Button>
                    <Button
                      className="bg-red-600 cursor-pointer"
                      onClick={() => deleteNewsByID(news.slug)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div>
            <PaginationPage
              page={page}
              setPage={setPage}
              totalPages={pagination?.totalPages}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[80vh]">
          <p className="text-2xl font-medium font-title">No Data Found</p>
        </div>
      )}
    </div>
  );
};

export default DashboardAllNews;
