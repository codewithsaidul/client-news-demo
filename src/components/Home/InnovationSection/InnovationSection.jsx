import Heading from "@/components/SectionHeading/Heading";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import axios from "axios";

const InnovationSection = async () => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/allNews?newsType=news&category=innovation`
  );

  const innovationNews = data?.data;

  return (
    <div className="mt-20">
      {innovationNews.length > 4 && (
        <div>
          {" "}
          {/* ========================= Section Heading ====================== */}
          <Heading title="Innovation" link="/category/innovation" />
          {/* ========================= Section Heading ====================== */}
          <div className="relative min-h-screen grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-8 relative order-1">
              {/* Left Column Content */}

              <div>
                <FeatureNews news={innovationNews[0]} />
                <LeftNewsList allNews={innovationNews} />
              </div>
            </div>
            <div className="xl:col-span-4 order-2">
              <div className="sticky top-28">
                {/* Right Column Content */}
                i<SidebarNews allNews={innovationNews} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnovationSection;
