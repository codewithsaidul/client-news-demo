import Link from "next/link";

const Heading = ({ title, link }) => {
  return (
    <div className="mb-16 flex  items-center gap-3">
      <Link href={link} className="text-2xl min-[500px]:text-3xl min-sm:text-4xl inline font-title font-bold text-news-headline border-4 border-transparent duration-300 hover:border-b-news-dark hover:duration-300">
        {title}
      </Link>
      <div className="flex-1 h-1 mt-3 bg-news-headline"></div>
    </div>
  );
};

export default Heading;
