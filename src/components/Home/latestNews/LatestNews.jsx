
import LeftLatestNews from "./LeftLatestNews";
import RightLatestNews from "./RightLatestNews";

const LatestNews = () => {

  return (
<div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
  <div className="md:col-span-8 relative">
    <div className="sticky top-28">
      {/* Left Column Content */}
      <LeftLatestNews />
    </div>
  </div>
  <div className="md:col-span-4">
    <RightLatestNews />
  </div>
</div>

  );
};

export default LatestNews;
