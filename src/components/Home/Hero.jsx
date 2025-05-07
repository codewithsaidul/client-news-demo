"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import BreakingSlider from "./BreakingSlider";
import PopularNewsSlider from "./PopularNewsSlider";

const Hero = () => {
  return (
    <section className="my-20 min-h-[calc(100vh - 70px)]">
      {/* <div>
        <BreakingNewsDropDown />
        <div className="my-4 h-[1px] w-full bg-black/50" />

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
        </div>
      </div> */}

      <div
        className="relative w-full h-[calc(100vh-80px)] bg-cover"
        style={{
          background: `url("/images/news/hero.webp")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "cover",
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            zIndex: 1, // To ensure overlay is above the background image
          }}
        />

        <div className="absolute max-[767px]:top-[70%] left-0 max-md:p-2 min-md:bottom-16 min-md:left-5 text-white min-md:right-10 z-2 max-md:bg-news-dark h-fit space-y-3 min-lg:w-[60%]">
          {/* category */}
          <span className="max-[430px]:text-xs text-sm mb-3">Billionaires</span>
          <h1 className="max-[430px]:text-xl max-[649px]:text-2xl min-[650px]:text-4xl min-[960px]:text-6xl mt-3 mb-7 font-bold font-title">
            Inside Atlassian co-founder Scott Farquhar’s ‘next phase’
          </h1>
          <p className="max-[430px]:text-sm text-base lg:text-2xl">
            A decade after co-founding Pledge 1%, Atlassian’s Scott Farquhar is
            back at the helm—rallying unicorns and founders to bake giving into
            business from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
