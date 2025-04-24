"use client";

import { useGetBreakingNewsQuery } from "@/features/BreackingNews/brackingNewsApi";
import BreakingNewsDropDown from "./BreakingNewsOptions";
import BreakingSlider from "./BreakingSlider";
import { Button } from "../ui/button";
import PopularNewsSlider from "./PopularNewsSlider";

const Hero = () => {
  const { data } = useGetBreakingNewsQuery();
  console.log(data);

  return (
    <section className="mt-24">
      <div>
        <BreakingNewsDropDown />
        <div className="my-4 h-px w-full bg-black/50" />

        <div>
          <div className="mb-5">
            <Button className="bg-red-500 hover:bg-red-500/90 text-2xl py-6 font-title font-semibold">Breaking News</Button>
          </div>
          <BreakingSlider />
          <PopularNewsSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
