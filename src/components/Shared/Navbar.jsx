"use client";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { navMenuList } from "@/constants/data";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "../ui/input";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const pathName = usePathname();
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      router.push(`/search?s=${encodeURIComponent(query.trim())}`);
      setQuery("");
      setShowInput(false);
    }
  };

  let headerColor;

  if (
    pathName === "/" ||
    pathName === "/news" ||
    pathName === "/lists" ||
    pathName === "/life"
  ) {
    headerColor = "bg-news-headline";
  } else {
    headerColor = "bg-news-dark";
  }

  if (pathName === "/dashboard") return null;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-6 ${headerColor}`}>
      <nav className="px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* =============== logo ================== */}
          <div className="flex items-center gap-16">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="news logo"
                width={100}
                height={100}
                priority
                className="w-full h-full"
              />
            </Link>

            <div className="max-sm:hidden">
              <ul className="flex gap-5">
                {navMenuList.map(({ id, link, name }) => (
                  <li
                    key={id}
                    className="text-news-white-bg text-xl font-title max-sm:border-b max-sm:border-white/30 max-sm:pb-7"
                  >
                    <Link href={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =============== search icon =================== */}
          <div className="flex items-center gap-5">
            {showInput && (
              <div className="transition-all duration-500">
                <Input
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  placeholder="search here..."
                  className="text-white"
                />
              </div>
            )}
            <span
              onClick={() => setShowInput(!showInput)}
              className="cursor-pointer"
            >
              <FaMagnifyingGlass size={24} color="#FFF" />
            </span>
            <span className="text-3xl min-sm:hidden font-bold cursor-pointer transition-all duration-1000">
              {isOpen ? (
                <IoMdClose
                  size={36}
                  color="#FFF"
                  onClick={() => setIsOpen(!isOpen)}
                  className="transition-transform transform scale-100"
                />
              ) : (
                <IoMdMenu
                  size={36}
                  color="#FFF"
                  onClick={() => setIsOpen(!isOpen)}
                  className="transition-transform transform scale-105"
                />
              )}
            </span>
          </div>
        </div>

        {/* ================= Side bar ==================== */}
        <div>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
