import Link from "next/link";

// If needed to add type safty name, link = string 
const NavLink = ( { name, link, setIsOpen } ) => {
  return (
    <li onClick={() => setIsOpen(false)} className="text-news-white-bg text-xl font-title max-sm:border-b max-sm:border-white/30 max-sm:pb-7">
      <Link href={link}>{name}</Link>
    </li>
  );
};

export default NavLink;
