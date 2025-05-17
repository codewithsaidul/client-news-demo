import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center border-b pb-7">
        <h2 className="text-3xl font-bold font-title">All News</h2>
        <div className="flex items-center gap-4">
            <div>
                <Input type="text" placeholder="Search here..." />
            </div>
            <Link href="/dashboard/addNews">Add News</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
