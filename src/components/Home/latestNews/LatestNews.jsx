import React from "react";
import LeftLatestNews from "./LeftLatestNews";
import RightLatestNews from "./RightLatestNews";

const LatestNews = () => {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-12 md:col-span-8">
        {/* Left Column Content */}
        <LeftLatestNews />
      </div>
      <div className="col-span-12 md:col-span-4">
        {/* Right Column Content */}
        <RightLatestNews />
      </div>
    </div>
  );
};

export default LatestNews;
