import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import Heading from "@/components/SectionHeading/Heading";
import Loader from "@/components/loading/Loader";

const InvestingSection = () => {
  const { data, isLoading } = useGetAllNewsQuery();

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

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const investingNews = filterNews.filter(
    (news) => news.category === "Business"
  );

  if (!isLoading && investingNews <= 0) return null;

  return (
    <div className="mt-20">
      {/* ========================= Section Heading ====================== */}
      <Heading title="Investing" link="/category/investing" />
      {/* ========================= Section Heading ====================== */}

      <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative order-1">
          {/* Left Column Content */}
          {investingNews.length > 0 && (
            <div>
              <FeatureNews news={investingNews[0]} />
              <LeftNewsList allNews={investingNews} />
            </div>
          )}
        </div>
        <div className="md:col-span-4 order-2">
          <div className="sticky top-28">
            {/* Right Column Content */}
            {investingNews.length > 0 && <SidebarNews allNews={investingNews} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestingSection;
