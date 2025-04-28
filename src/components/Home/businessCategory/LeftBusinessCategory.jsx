import { useGetAllNewsQuery } from "@/features/AllNews/allNewsAPI";
import BusinessFeature from "./BusinessFeature";
import BusinessAdverties from "./BusinessAdverties";

const LeftBusinessCategory = () => {
  const { data, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <div>Loading...</div>;

  const filterNews = data.filter(
    (news) => !news.isFeatured && !news.isBreaking
  );

  const businessNews = filterNews.filter(
    (news) => news.category === "Business"
  );


  return (
    <div>
      {businessNews.length > 0 && (
        <div>
          <BusinessFeature business={businessNews[0]} />
          <BusinessAdverties news={businessNews} />
        </div>
      )}
    </div>
  );
};

export default LeftBusinessCategory;
