import Heading from "@/components/SectionHeading/Heading";
import Loader from "@/components/loading/Loader";
import { useGetAllNewsQuery } from "@/features/news/allNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import axios from "axios";

const InvestingSection = async () => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/allNews?newsType=news&category=investing`
  );

  const investingNews = data?.data;

  return (
    <div className="mt-20">
      {investingNews.length > 4 && (
        <div>
          {" "}
          {/* ========================= Section Heading ====================== */}
          <Heading title="Investing" link="/category/investing" />
          {/* ========================= Section Heading ====================== */}
          <div className="relative min-h-screen grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-8 relative order-1">
              {/* Left Column Content */}
              <div>
                <FeatureNews news={investingNews[0]} />
                <LeftNewsList allNews={investingNews} />
              </div>
            </div>
            <div className="xl:col-span-4 order-2">
              <div className="sticky top-28">
                {/* Right Column Content */}
                <SidebarNews allNews={investingNews} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestingSection;
