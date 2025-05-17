"use client";
import Loader from "@/components/loading/Loader";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import { dateFormater } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

const DataTable = () => {
  const { data: allNews, isLoading } = useGetAllNewsQuery();

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

  return (
    <div className="mt-12">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Timestamp</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allNews.slice(0, 6).map((news) => (
            <TableRow key={news.id}>
              <TableCell className="font-medium">{news.id}</TableCell>
              <TableCell className="text-xl font-title font-semibold truncate">{news.title}</TableCell>
              <TableCell className="truncate">{news.content}</TableCell>
              <TableCell>{dateFormater(news.createdAt)}</TableCell>
              <TableCell className="text-right">
                <span className={twMerge("p-2 rounded-lg capitalize",
                    news.status === "published" ? "bg-[#00C62C]/10 text-[#00C62C]" : "bg-[#FFA82E]/10 text-[#FFA82E]"
                )}>
                    {news.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
