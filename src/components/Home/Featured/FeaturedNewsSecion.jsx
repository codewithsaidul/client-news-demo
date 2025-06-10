import Heading from "@/components/SectionHeading/Heading";
import axios from "axios";
import EditorsPick from "./EditorsPick";
import FeatureSideNews from "./FeatureSideNews";
import MainFeaturedNews from "./MainFeaturedNews";

const FeaturedNewsSecion = async () => {
    const { data } = await axios(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/news/allNews?priority=isFeatured`
  );

  const featuredNews = data?.data;


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
