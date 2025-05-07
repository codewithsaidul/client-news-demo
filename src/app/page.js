"use client";
import Business from "@/components/Home/businessCategory/Business";
import CountryBranding from "@/components/Home/CountryBranding/CountryBranding";
import EconomyFinance from "@/components/Home/Economy and Finance/EconomyFinance";
import Entrepreneurs from "@/components/Home/Entrepreneurs/Entrepreneurs";
import {
  ForbesLife,
  ForbesLiveEvents,
  ForbesNetwork,
  ForbesWomen,
} from "@/components/Home/Forbes";
import Hero from "@/components/Home/Hero";
import HumanCapital from "@/components/Home/Human Capital/HumanCapital";
import LatestNews from "@/components/Home/latestNews/LatestNews";
import PersonalFinances from "@/components/Home/Personal Finances/PersonalFinances";
import Sustainability from "@/components/Home/Sustainability/Sustainability";
import Technology from "@/components/Home/Technology/Technology";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="px-4 md:px-8 mt-32 relative">
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
    </main>
  );
}
