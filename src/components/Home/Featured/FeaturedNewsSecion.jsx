import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import MainFeaturedNews from "./MainFeaturedNews";
import { useGetLatestNewsQuery } from "@/features/LatestNews/latestNewsAPI";
import Loader from "@/components/loading/Loader";
import FeatureSideNews from "./FeatureSideNews";
import EditorsPick from "./EditorsPick";
import Heading from "@/components/SectionHeading/Heading";

const FeaturedNewsSecion = () => {
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
    );
  }

  const featuredNews = data.filter((news) => news.isFeatured);

  return (
    <section className="mb-20">
      {/* ================= Featured Heading ====================== */}
     <Heading title="Featured" link="#" />


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
