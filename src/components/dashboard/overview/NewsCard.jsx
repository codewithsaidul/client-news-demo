import Image from "next/image";
import { FaNewspaper } from "react-icons/fa";

const NewsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-7">
      {/* ============ Card Item 1 ============= */}
      <div className="flex gap-5 bg-white border border-[#EDEDED]">
        <div className="p-5 bg-[#2E90FA]/20 flex items-center justify-center">
          <FaNewspaper size={36} color="#2E90FA" />
        </div>

        <div className="text-center py-2">
          <span className="text-2xl font-bold">150</span>
          <h3 className="text-xl text-news-text">Total News</h3>
        </div>
      </div>

      {/* ============ Card Item 2 ============= */}
      <div className="flex gap-5 bg-white border border-[#EDEDED]">
        <div className="p-5 bg-[#00C62C]/20 inline-block">
          <Image
            src="/icon/published.png"
            alt="publishd icon"
            width={40}
            height={40}
            className="object-cover h-auto"
          />
        </div>

        <div className="text-center py-2">
          <span className="text-2xl font-bold">120</span>
          <h3 className="text-xl text-news-text">Published</h3>
        </div>
      </div>

      {/* ============ Card Item 3 ============= */}    
      <div className="flex gap-5 bg-white border border-[#EDEDED]">
        <div className="p-5 bg-[#FFA82E]/20 inline-block">
          <Image
            src="/icon/unpublished.png"
            alt="publishd icon"
            width={40}
            height={40}
            className="object-cover h-auto"
          />
        </div>

        <div className="text-center py-2">
          <span className="text-2xl font-bold">30</span>
          <h3 className="text-xl text-news-text">Unublished</h3>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
