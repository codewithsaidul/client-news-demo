import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import Heading from "@/components/SectionHeading/Heading";

const Sustainability = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const sustainability = filterNews.filter(
    (news) => news.category === "Forbes Women"  // "Sustainability"
  );

  if (!isLoading && sustainability <= 0) return null

  return (
    <div className="mt-20">
      {/* ========================= Section Heading ====================== */}
      <Heading title="Sustainability" link="#" />
      {/* ========================= Section Heading ====================== */}

      <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative order-2">
          {/* Left Column Content */}
          {sustainability.length > 0 && (
            <div>
              <FeatureNews news={sustainability[0]} />
              <LeftNewsList allNews={sustainability} />
            </div>
          )}
        </div>
        <div className="md:col-span-4 order-1">
          <div className="sticky top-28">
            {/* Right Column Content */}
            {sustainability.length > 0 && (
              <SidebarNews allNews={sustainability} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
