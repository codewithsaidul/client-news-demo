"use client";
import { navMenuList, socialLinks } from "@/constants/data";
import NavLink from "./NavLink";
import Link from "next/link";
import { twMerge } from "tailwind-merge";


// if need also can add type safty for this props
const Sidebar = ( { isOpen } ) => {
  const sectionsMenu = navMenuList.sections;
  const editionsMenu = navMenuList.editions;

  return (
    <div className={twMerge("w-[90%] min-[480px]:w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] h-screen bg-news-dark absolute top-20 left-0 overflow-y-auto sidebar transform transition-transform duration-500 ease-in-out z-[10000]",
        isOpen ? "translate-x-0 duration-500" : "-translate-x-full"
    )}>
      <div className="px-8 py-12">
        {/* =========== nav secctions ============== */}
        <div>
          <h2 className="text-2xl font-title text-news-white-bg font-bold">
            Sections
          </h2>
          <ul className="pl-6 mt-7 flex flex-col gap-5">
            {sectionsMenu.map((menu) => (
              <NavLink key={menu.id} name={menu.name} link={menu.link} />
            ))}
          </ul>
        </div>

        {/* =========== nav editions ============== */}
        <div className="mt-10">
          <h2 className="text-2xl font-title text-news-white-bg font-bold">
            Editions
          </h2>
          <ul className="pl-6 mt-7 flex flex-col gap-5">
            {editionsMenu.map((menu) => (
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
