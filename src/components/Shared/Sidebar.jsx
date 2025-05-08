"use client";
import { navMenuList, socialLinks } from "@/constants/data";
import NavLink from "./NavLink";
import Link from "next/link";
import { twMerge } from "tailwind-merge";


// if need also can add type safty for this props
const Sidebar = ( { isOpen } ) => {

  return (
    <div className={twMerge(" h-screen bg-news-dark absolute top-20 right-0 overflow-y-auto sidebar transform transition-transform duration-500 ease-in-out z-[10000]",
        isOpen ? "translate-x-0 duration-500" : "translate-x-full"
    )}>
      <div className="px-8 py-12">
        {/* =========== nav secctions ============== */}
        <div>
          <ul className="flex flex-col gap-5">
            {navMenuList.map((menu) => (
              <NavLink key={menu.id} name={menu.name} link={menu.link} />
            ))}
          </ul>
        </div>

        {/* ============ social links =============== */}
        <div className="mt-7 mb-28 sm:mb-20 flex flex-wrap w-full items-center gap-5">
          {socialLinks.map((social) => (
            <Link
              key={social.id}
              href={social.link}
              aria-label={social.name}
              target="_blank"
              className="text-2xl"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
