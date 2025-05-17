"use client";

import Image from "next/image";

const Hero = () => {

    // const { data, isLoading } = useGetAllNewsQuery();
  
    // if (isLoading) {
    //   return (
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full gap-10 mb-10">
    //       {/* <Loader />
    //       <Loader />
    //       <Loader />
    //       <Loader />
    //       <Loader /> */}
    //     </div>
    //   );
    // }
  
    // const breakingNews = data.filter((news) => news.isBreaking);

  return (
    <section className="my-20 min-h-[calc(100vh - 70px)]">

      <div
        className="relative w-full h-[calc(100vh-80px)] bg-cover"
      >
        <figure>
          <Image src="/images/news/hero.webp" alt="hero image" width={1920} height={1080} className="w-full h-[calc(100vh-80px)] object-cover" priority />
        </figure>
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            zIndex: 1, // To ensure overlay is above the background image
          }}
        />

        <div className="absolute max-[767px]:top-[70%] left-0 max-md:p-2 min-md:bottom-16 min-md:left-5 text-white min-md:right-10 z-2 max-md:bg-news-dark h-fit space-y-3 min-lg:w-[60%]">
          {/* category */}
          <span className="max-[430px]:text-xs text-sm mb-3">Billionaires</span>
          <h1 className="max-[430px]:text-xl max-[649px]:text-2xl min-[650px]:text-4xl min-[960px]:text-6xl mt-3 mb-7 font-bold font-title duration-500 hover:underline hover:duration-500">
            Inside Atlassian co-founder Scott Farquhar’s ‘next phase’
          </h1>
          <p className="max-[430px]:text-sm text-base lg:text-2xl">
            A decade after co-founding Pledge 1%, Atlassian’s Scott Farquhar is
            back at the helm—rallying unicorns and founders to bake giving into
            business from day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
