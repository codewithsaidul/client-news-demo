


const Hero = () => {
    return (
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-200">
        {/* Background Image */}
        {/* <Image
          src="/news/download.jpg"
          alt="Featured News"
          width={600}
          height={600}
          className="absolute inset-0 w-full h-full object-cover"
        /> */}
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
  
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 py-8 text-white max-w-4xl mx-auto">
          <span className="text-sm md:text-base bg-red-600 px-3 py-1 inline-block w-fit rounded-md mb-3 uppercase tracking-wide">
            Breaking News
          </span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            মধ্যপ্রাচ্যের রাজনৈতিক পরিবর্তনে বাংলাদেশের প্রভাব
          </h1>
          <p className="text-base md:text-lg mb-6">
            সর্বশেষ পরিস্থিতি জানতে পড়ুন বিস্তারিত রিপোর্ট। এই বিশ্লেষণ আপনাকে দেবে পরিপূর্ণ ধারণা।
          </p>
          <button className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            বিস্তারিত পড়ুন
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  