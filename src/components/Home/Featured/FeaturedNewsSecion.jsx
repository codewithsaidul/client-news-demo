import Loader from "@/components/loading/Loader";
import Heading from "@/components/SectionHeading/Heading";
import { useGetAllNewsQuery } from "@/features/allNews/allNewsAPI";
import EditorsPick from "./EditorsPick";
import FeatureSideNews from "./FeatureSideNews";
import MainFeaturedNews from "./MainFeaturedNews";

const FeaturedNewsSecion = () => {
  const { data: news, isLoading } = useGetAllNewsQuery({ priority: "isFeatured"});

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

  const featuredNews = news.data;

  return (
    <section className="mb-20">
      {/* ================= Featured Heading ====================== */}
     <Heading title="Featured" link="news" />


     {/* ====================== Feature Container =========================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-20">
        <div className="lg:col-span-7">
          <MainFeaturedNews featuredNews={featuredNews} />
        </div>

        <div className="lg:col-span-5 h-screen w-full">
          <FeatureSideNews featuredNews={featuredNews.slice(3, 5)} />
          <EditorsPick />
        </div>
      </div>
    </section>
  );
};

export default FeaturedNewsSecion;
