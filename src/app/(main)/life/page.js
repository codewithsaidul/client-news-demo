import Banner from "@/components/Shared/Banner";
import React from "react";
import AllLifeNews from "./AllLifeNews";
import PageTabs from "@/components/Shared/PageTabs";



const tabs = [
  { name: "All Life", href: "/life" },
  { name: "Wellness", href: "/life/Wellness" },
  { name: "Travel", href: "/life/Travel" },
  { name: "Lifestyle", href: "/life/Lifestyle" },
  { name: "Property", href: "/life/Property" },
  { name: "Style", href: "/life/Style" },
  { name: "Motors", href: "/life/Motors" },
];




const page = () => {
  return (
    <div>
      <Banner title="life" image="/images/banner/LifeBanner.webp" />
      <div className="mt-20">
        <PageTabs tabs={tabs} />
      </div>
      <AllLifeNews />
    </div>
  );
};

export default page;
