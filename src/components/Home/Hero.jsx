"use client";

import { Button } from "../ui/button";
import BreakingNewsDropDown from "./BreakingNewsOptions";
import BreakingSlider from "./BreakingSlider";
import EconomyCategory from "./EconomyCategory";
import LatestNews from "./LatestNews";
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
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-12 md:col-span-8">
                <EconomyCategory />
              </div>
              <div className="col-span-12 md:col-span-4 p-4 h-fit bg-news-white-bg shadow-[0_0px_4px_rgba(0,0,0,0.15)] rounded-lg">
                <LatestNews />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
