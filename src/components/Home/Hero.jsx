"use client";

import { Button } from "../ui/button";
import BreakingNewsDropDown from "./BreakingNewsOptions";
import BreakingSlider from "./BreakingSlider";
import LatestNews from "./latestNews/LatestNews";
import PopularNewsSlider from "./PopularNewsSlider";


const Hero = () => {


  return (
    <section className="mt-24">
      <div>
        <BreakingNewsDropDown />
        <div className="my-4 h-px w-full bg-black/50" />

        <div>
          <div className="mb-5">
            <Button className="bg-red-500 hover:bg-red-500/90 text-2xl py-6 font-title font-semibold">
              Breaking News
            </Button>
          </div>
          <BreakingSlider />
          <PopularNewsSlider />

          <div className="mt-16">
            <LatestNews /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
