import { useGetLatestNewsQuery } from "@/features/LatestNews/latestNewsAPI";
import LeftLatestNews from "./LeftLatestNews";
import RightLatestNews from "./RightLatestNews";
import Loader from "@/components/loading/Loader";


const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center gap-10 mb-10">
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    )
  }

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );
  

  return (
    <div className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-8 relative">
        <div className="sticky top-28">
          {/* Left Column Content */}
          <LeftLatestNews latestNews={filterNews} />
        </div>
      </div>
      <div className="md:col-span-4">
        <RightLatestNews latestNews={filterNews} />
      </div>
    </div>
  );
};

export default LatestNews;
