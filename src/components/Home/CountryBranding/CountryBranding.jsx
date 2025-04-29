import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import FeatureNews from "../NewsSection/FeatureNews";
import LeftNewsList from "../NewsSection/LeftNewsList";
import SidebarNews from "../NewsSection/SidebarNews";
import Heading from "@/components/SectionHeading/Heading";
import Loader from "@/components/loading/Loader";

const CountryBranding = () => {
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

  const countryBranding = filterNews.filter(
    (news) => news.category === "Forbes Women" // "Country Branding"
  );

  if (!isLoading && countryBranding <= 0) return null;

  return (
    <div className="mt-20">
      {/* ========================= Section Heading ====================== */}
      <Heading title="Country Branding" link="#" />
      {/* ========================= Section Heading ====================== */}

      <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-8 relative order-2">
          {/* Left Column Content */}
          {countryBranding.length > 0 && (
            <div>
              <FeatureNews news={countryBranding[0]} />
              <LeftNewsList allNews={countryBranding} />
            </div>
          )}
        </div>
        <div className="md:col-span-4 order-1">
          <div className="sticky top-28">
            {/* Right Column Content */}
            {countryBranding.length > 0 && <SidebarNews allNews={countryBranding} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryBranding;
