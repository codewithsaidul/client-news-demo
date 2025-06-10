import Heading from "@/components/SectionHeading/Heading";
import Loader from "@/components/loading/Loader";
import { useGetAllNewsQuery } from "@/features/news/allNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import axios from "axios";

const BillionairesSection = async () => {
  const { data } = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/allNews?newsType=news&category=billionaires`
  );

  const billionairesNews = data?.data;

  return (
    <div className="mt-20">
      {billionairesNews.length > 4 && (
        <div>
          {" "}
          {/* ========================= Section Heading ====================== */}
          <Heading title="Billionaires" link="/category/billionaires" />
          {/* ========================= Section Heading ====================== */}
          <div className="relative min-h-screen grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-8 relative xl:order-2">
              {/* Left Column Content */}
              <div>
                <FeatureNews news={billionairesNews[0]} />
                <LeftNewsList allNews={billionairesNews} />
              </div>
            </div>
            <div className="xl:col-span-4 xl:order-1">
              <div className="sticky top-28">
                {/* Right Column Content */}
                <SidebarNews allNews={billionairesNews} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillionairesSection;
