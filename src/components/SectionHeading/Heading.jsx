import Link from "next/link";

const Heading = ({ title, link }) => {
  return (
    <div className="mb-16 flex items-center justify-center gap-3">
      <Link href={link} className="text-4xl font-title font-bold text-news-headline border-4 border-transparent duration-300 hover:border-b-news-dark hover:duration-300">
        {title}
      </Link>
      <div className="w-full h-1 mt-3 bg-news-headline"></div>
    </div>
  );
};

export default Heading;
