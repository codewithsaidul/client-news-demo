import RightLatestNews from "../latestNews/RightLatestNews";
import LeftBusinessCategory from "./LeftBusinessCategory";
import RightBusinessCategory from "./RightBusinessCategory";

const Business = () => {
  return (
    <div className="mt-20">

        <div className="mb-16 flex items-center justify-center gap-3">
            <h2 className="text-4xl font-title font-bold text-news-headline">Business</h2>
            <div className="w-full h-1 mt-3 bg-news-headline"></div>
        </div>

        <div className="relative min-h-screen grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-8 relative">
            {/* Left Column Content */}
            <LeftBusinessCategory />
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="sticky top-28">
              {/* Right Column Content */}
              <RightBusinessCategory />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Business;
