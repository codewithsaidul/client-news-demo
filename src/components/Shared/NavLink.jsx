import Link from "next/link";

// If needed to add type safty name, link = string 
const NavLink = ( { name, link } ) => {
  return (
    <li className="text-news-white-bg text-xl font-title">
      <Link href={link}>{name}</Link>
    </li>
  );
};

export default NavLink;
