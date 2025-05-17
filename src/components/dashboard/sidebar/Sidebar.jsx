import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUsers } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdAddBox, MdDashboard } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";

const navLinks = [
  {
    id: 1,
    title: "Back to Home",
    href: "/",
    icon: <FaHome size={32} />
  },
  {
    id: 2,
    title: "Overview",
    href: "/dashboard",
    icon: <MdDashboard size={32} />,
  },
  {
    id: 3,
    title: "All News",
    href: "/dashboard/allNews",
    icon: <GiNewspaper size={32} />
  },
  {
    id: 4,
    title: "Add News",
    href: "/dashboard/addNews",
    icon: <MdAddBox size={32} />,
  },
  {
    id: 5,
    title: "Users",
    href: "/dashboard/users",
    icon: <FaUsers size={32} />,
  },
];

const Sidebar = () => {
  return (
    <div className="mt-16 px-8 flex flex-col justify-between space-y-8">
      <div>
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="news logo"
            width={150}
            height={150}
            priority
            className="object-cover w-auto h-auto"
          />
        </Link>
      </div>

      {/* nav links */}
      <div className="mt-10">
        <ul className="flex flex-col gap-10">
          {navLinks.map((item) => (
            <li key={item.id} className="border-b border-white/20 pb-3">
              <Link
                href={item.href}
                className="flex items-center gap-2 text-white text-2xl"
              >
                <span>{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      {/* Logout */}
      <div className="mt-20">
          <p className="cursor-pointer text-white flex items-center gap-2 text-2xl">
            <span>
                <IoMdLogOut size={32} />
            </span>

            <span>Logout</span>
          </p>
      </div>
    </div>
  );
};

export default Sidebar;
