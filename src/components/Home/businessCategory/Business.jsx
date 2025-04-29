import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import Heading from "@/components/SectionHeading/Heading";

const Business = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const businessNews = filterNews.filter(
    (news) => news.category === "Business"
  );

  return (
    <div className="mt-20">
      {/* ========================= Section Heading ====================== */}
      <Heading title="Business" link="#" />
      {/* ========================= Section Heading ====================== */}

      <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative">
          {/* Left Column Content */}
          {businessNews.length > 0 && (
            <div>
              <FeatureNews businessNews={businessNews[0]} />
              <LeftNewsList businessNews={businessNews} />
            </div>
          )}
        </div>
        <div className="md:col-span-4">
          <div className="sticky top-28">
            {/* Right Column Content */}
            {businessNews.length > 0 && (
              <SidebarNews businessNews={businessNews} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
