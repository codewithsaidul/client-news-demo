"use client";

import { Button } from "../ui/button";
import BreakingNewsDropDown from "./BreakingNewsOptions";
import BreakingSlider from "./BreakingSlider";
import Business from "./businessCategory/Business";
import CountryBranding from "./CountryBranding/CountryBranding";
import EconomyFinance from "./Economy and Finance/EconomyFinance";
import Entrepreneurs from "./Entrepreneurs/Entrepreneurs";
import { ForbesLife, ForbesLiveEvents, ForbesNetwork, ForbesWomen } from "./Forbes";
import HumanCapital from "./Human Capital/HumanCapital";
import LatestNews from "./latestNews/LatestNews";
import PersonalFinances from "./Personal Finances/PersonalFinances";
import PopularNewsSlider from "./PopularNewsSlider";
import Sustainability from "./Sustainability/Sustainability";
import Technology from "./Technology/Technology";

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
            <EconomyFinance />
            <PersonalFinances />
            <ForbesNetwork />
            <ForbesLife />
            <HumanCapital />
            <Technology />
            <ForbesLiveEvents />
            <CountryBranding />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
