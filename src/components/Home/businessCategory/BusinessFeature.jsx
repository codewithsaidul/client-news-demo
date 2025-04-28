import { Button } from "@/components/ui/button";
import { dateFormater } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BusinessFeature = ({ business }) => {


  return (
    <div>
      <figure className="relative">
        <Image
          src={business?.thumbnail}
          alt={business.title}
          width={1280}
          height={780}
          className="w-[90%] h-96 object-cover"
        />
        <Button className="text-xl font-title py-5 px-7 absolute -bottom-4 left-1/2 transform -translate-x-1/2">
          {business.category}
        </Button>
      </figure>

      <div className="text-center mt-8">
        <Link
          href={"#"}
          className="text-3xl md:text-5xl font-bold font-title text-news-headline"
        >
          {business.title}
        </Link>

        <p className="text-lg mt-5 text-news-text">
          <span className="font-bold">{business.author.name}</span>

          <span className="mx-2">|</span>

          <span>{dateFormater(business.createdAt)}</span>
        </p>
      </div>
    </div>
  );
};

export default BusinessFeature;
