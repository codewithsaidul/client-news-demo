import { useGetLatestNewsQuery } from "@/features/LatestNews/latestNewsAPI";
import LeftLatestNews from "./LeftLatestNews";
import RightLatestNews from "./RightLatestNews";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery();

  if (isLoading) return <div>Loading...</div>;

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
