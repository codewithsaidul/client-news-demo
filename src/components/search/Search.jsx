"use client"
import { useSearchParams } from "next/navigation";
import React from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("s");
  console.log(query)

  return <div>Search</div>;
};

export default Search;
