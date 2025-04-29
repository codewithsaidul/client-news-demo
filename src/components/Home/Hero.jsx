"use client";

import { Button } from "../ui/button";
import BreakingNewsDropDown from "./BreakingNewsOptions";
import BreakingSlider from "./BreakingSlider";
import Business from "./businessCategory/Business";
import Entrepreneurs from "./Entrepreneurs/Entrepreneurs";
import ForbesWomen from "./Forbes/ForbesWomen";
import LatestNews from "./latestNews/LatestNews";
import PopularNewsSlider from "./PopularNewsSlider";
import Sustainability from "./Sustainability/Sustainability";

const Hero = () => {
  return (
    <section className="mt-24">
      <div>
        {/* <BreakingNewsDropDown />
        <div className="my-4 h-[1px] w-full bg-black/50" /> */}

        <div>
          <div className="mb-5">
            <Button className="bg-red-500 hover:bg-red-500/90 text-2xl py-6 font-title font-semibold">
              Breaking News
            </Button>
          </div>
          <div className="w-full">
            <BreakingSlider />
            <PopularNewsSlider />
          </div>

          <div className="mt-20">
            <LatestNews />
            <Business />
            <ForbesWomen />
            <Entrepreneurs />
            <Sustainability />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
