"use client";
import BillionairesSection from "@/components/Home/BillionairesSection/BillionairesSection";
import EntrepreneursSection from "@/components/Home/EntrepreneursSection/EntrepreneursSection";
import FeaturedNewsSecion from "@/components/Home/Featured/FeaturedNewsSecion";
import Hero from "@/components/Home/HeroSection/Hero";
import InnovationSection from "@/components/Home/InnovationSection/InnovationSection";
import InvestingSection from "@/components/Home/InvestingSection/InvestingSection";
import LeadershipSection from "@/components/Home/LeadershipSection/LeadershipSection";
import LifeSection from "@/components/Home/LifeSection/LifeSection";
import MagazineSection from "@/components/Home/MagazineSection/MagazineSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="px-4 md:px-8 mt-32 relative">
        <div className="mt-20">
          <FeaturedNewsSecion />
          <LifeSection />
          <MagazineSection />
          <EntrepreneursSection />
          <InnovationSection />
          <BillionairesSection />
          <InvestingSection />
          <LeadershipSection />
        </div>
      </div>
    </main>
  );
}
