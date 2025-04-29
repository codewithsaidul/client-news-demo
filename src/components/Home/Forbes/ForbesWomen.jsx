import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import Heading from "@/components/SectionHeading/Heading";

const ForbesWomen = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const forbesWomen = filterNews.filter(
    (news) => news.category === "Forbes Women"
  );

  if (!isLoading && forbesWomen <= 0) return null

  return (
    <div className="mt-20">
      {/* ========================= Section Heading ====================== */}
      <Heading title="Forbes Women" link="#" />
      {/* ========================= Section Heading ====================== */}

      <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative">
          {/* Left Column Content */}
          {forbesWomen.length > 0 && (
            <div>
              <FeatureNews news={forbesWomen[0]} />
              <LeftNewsList allNews={forbesWomen} />
            </div>
          )}
        </div>
        <div className="md:col-span-4">
          <div className="sticky top-28">
            {/* Right Column Content */}
            {forbesWomen.length > 0 && (
              <SidebarNews allNews={forbesWomen} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForbesWomen;
