import Heading from "@/components/SectionHeading/Heading";
import axios from "axios";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";

const LifeSection = async () => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/allNews?page=1&newsType=life`
  );

  const filterNews = data?.data;

  return (
    <div className="max-[450px]:mt-60 max-[600px]:mt-60 mt-56">
      {filterNews.length > 4 && (
        <div>
          {/* ========================= Section Heading ====================== */}
          <Heading title="Life" link="/life" />
          {/* ========================= Section Heading ====================== */}

          <div className="relative min-h-screen grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-8 relative xl:order-2">
              {/* Left Column Content */}
              <div>
                <FeatureNews news={filterNews[0]} />
                <LeftNewsList allNews={filterNews} />
              </div>
            </div>
            <div className="xl:col-span-4 xl:order-1">
              <div className="sticky top-28">
                {/* Right Column Content */}
                <SidebarNews allNews={filterNews} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LifeSection;


