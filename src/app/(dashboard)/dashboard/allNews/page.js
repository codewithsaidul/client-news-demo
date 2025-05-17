import AllNews from "@/components/dashboard/allNews/AllNews";
import { Button } from "@/components/ui/button";
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
          <Button>
            <Link href="/dashboard/addNews">Add News</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16">
        <AllNews />
      </div>
    </div>
  );
};

export default page;
