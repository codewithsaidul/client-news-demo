"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const tabs = [
  { name: "All News", href: "/news" },
  { name: "Innovation", href: "/category/innovation" },
  { name: "Entrepreneurs", href: "/category/entrepreneurs" },
  { name: "Leadership", href: "/category/leadership" },
  { name: "Investing", href: "/category/investing" },
  { name: "Billionaires", href: "/category/billionaires" },
];

export default function PageTabs() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <nav className="relative w-full border-b border-gray-300 pb-5">
      <div className="flex gap-x-16 relative px-4 lg:px-8">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.name}
              href={tab.href}
              className={twMerge(
                "inline-block py-3 font-medium text-xl text-center",
                isActive ? "text-rose-500" : "text-gray-500"
              )}
            >
              {tab.name}
            </Link>
          );
        })}

        {/* Active Tab Full-Width Border */}
        <div
          className={twMerge(
            "absolute -bottom-5 left-5 h-1 bg-rose-500 transition-all duration-300",
            pathname === "/news"
              ? "w-[calc(7%)]"
              : pathname === "/category/innovation"
              ? "w-[calc(6%)]"
              : pathname === "/category/entrepreneurs"
              ? "w-[calc(6%)]"
              : pathname === "/category/leadership"
              ? "w-[calc(6%)]"
              : pathname === "/category/investing"
              ? "w-[calc(6%)]"
              : pathname === "/category/billionaires"
              ? "w-[calc(6%)]"
              : "w-0"
          )}
        />
      </div>
    </nav>
  );
}
