import Heading from "@/components/SectionHeading/Heading";
import axios from "axios";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";

const EntrepreneursSection = async () => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/allNews?newsType=news&category=entrepreneurs`
  );

  const entrepreneursNews = data.data;

  return (
    <div className="mt-20">
      {entrepreneursNews.length > 4 && (
        <div>
          {/* ========================= Section Heading ====================== */}
          <Heading title="Entrepreneurs" link="/category/entrepreneurs" />
          {/* ========================= Section Heading ====================== */}

          <div className="relative min-h-screen grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-8 relative xl:order-2">
              {/* Left Column Content */}
              <div>
                <FeatureNews news={entrepreneursNews[0]} />
                <LeftNewsList allNews={entrepreneursNews} />
              </div>
            </div>
            <div className="xl:col-span-4 xl:order-1">
              <div className="sticky top-28">
                {/* Right Column Content */}
                <SidebarNews allNews={entrepreneursNews} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntrepreneursSection;
