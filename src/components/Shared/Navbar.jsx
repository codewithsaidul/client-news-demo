"use client";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-news-headline py-6">
      <nav className="px-4 md:px-8">
       <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold cursor-pointer transition-all duration-1000">
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
  
          {/* =============== logo ================== */}
          <div>
            <Link href="/">
              <Image src="/logo.webp" alt="news logo" width={100} height={100} className="w-full h-full" />
            </Link>
          </div>
  
          {/* =============== search icon =================== */}
          <div>
            <span>
              <FaMagnifyingGlass size={24} color="#FFF" />
            </span>
          </div>
       </div>

        {/* ================= Side bar ==================== */}
      <div>
        <Sidebar isOpen={isOpen} />
      </div>
      </nav>

      
    </header>
  );
};

export default Navbar;
