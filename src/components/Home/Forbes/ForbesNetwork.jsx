import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import Heading from "@/components/SectionHeading/Heading";

const ForbesNetwork = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const forbesNetwork = filterNews.filter(
    (news) => news.category === "Forbes Women" // Forbes Network
  );

  if (!isLoading && forbesNetwork <= 0) return null

  return (
    <div className="mt-20">
      {/* ========================= Section Heading ====================== */}
      <Heading title="Forbes Network" link="#" />
      {/* ========================= Section Heading ====================== */}

      <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative order-1">
          {/* Left Column Content */}
          {forbesNetwork.length > 0 && (
            <div>
              <FeatureNews news={forbesNetwork[0]} />
              <LeftNewsList allNews={forbesNetwork} />
            </div>
          )}
        </div>
        <div className="md:col-span-4 order-2">
          <div className="sticky top-28">
            {/* Right Column Content */}
            {forbesNetwork.length > 0 && (
              <SidebarNews allNews={forbesNetwork} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForbesNetwork;
