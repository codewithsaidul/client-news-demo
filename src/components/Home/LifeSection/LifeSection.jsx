import Heading from "@/components/SectionHeading/Heading";
import Loader from "@/components/loading/Loader";
import { useGetDummyNewsQuery } from "@/features/dummyNews/dummyNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";

const LifeSection = () => {
  const { data: news, isLoading } = useGetAllNewsQuery( { page: 2 } );

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-10 mb-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const filterNews = news.data
  return (
    <div className="mt-20">
      {/* ========================= Section Heading ====================== */}
      <Heading title="Life" link="/life" />
      {/* ========================= Section Heading ====================== */}

      <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative order-2">
          {/* Left Column Content */}
          {filterNews.length > 0 && (
            <div>
              <FeatureNews news={filterNews[0]} />
              <LeftNewsList allNews={filterNews} />
            </div>
          )}
        </div>
        <div className="md:col-span-4 order-1">
          <div className="sticky top-28">
            {/* Right Column Content */}
            {filterNews.length > 0 && <SidebarNews allNews={filterNews} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSection;
