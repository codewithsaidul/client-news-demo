import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen relative">
      <figure className="relative w-full aspect-square h-screen">
        <Image
          src="/images/banner/404-space.png"
          alt="404 Background"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </figure>

      <div className="absolute left-1/2 w-full -translate-x-1/2 bottom-24 z-10 text-center mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5 xl:text-6xl font-title font-bold mb-4 text-white">404 - Not Found</h1>
        <p className="text-white text-sm sm:text-lg mb-12">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="text-white mt-5 cursor-pointer border border-news-cta/40 rounded-full py-4 px-8 bg-news-cta/40 duration-700 hover:bg-news-cta/50 hover:duration-700 text-base sm:text-xl">Back to Home</Link>
      </div>
    </div>
  );
}
