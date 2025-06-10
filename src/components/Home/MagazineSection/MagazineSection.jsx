import Heading from "@/components/SectionHeading/Heading";
import axios from "axios";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";

const MagazineSection = async () => {

  const { data } = await axios(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/allNews?page=1&newsType=magazine`
);


  const magazineNews = data.data;

  return (
    <div className="mt-20">
      {magazineNews.length > 5 && (
        <div>
          {/* ========================= Section Heading ====================== */}
          <Heading title="Magazine" link="/magazine" />
          {/* ========================= Section Heading ====================== */}

          <div className="relative min-h-screen grid grid-cols-1 xl:grid-cols-12 gap-10">
            <div className="xl:col-span-8 relative order-1">
              {/* Left Column Content */}
              <div>
                <FeatureNews news={magazineNews[0]} />
                <LeftNewsList allNews={magazineNews} />
              </div>
            </div>
            <div className="xl:col-span-4 order-2">
              <div className="sticky top-28">
                {/* Right Column Content */}
                <SidebarNews allNews={magazineNews} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MagazineSection;

