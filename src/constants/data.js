import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navMenuList = [
  {
    id: 1,
    name: "News",
    link: "/news",
  },
  {
    id: 2,
    name: "Lists",
    link: "/lists",
  },
  {
    id: 3,
    name: "Life",
    link: "/life",
  },
  {
    id: 4,
    name: "Magazine",
    link: "/magazine",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaFacebook size={28} color="#fff" />,
    link: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaXTwitter size={28} color="#fff" />,
    link: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaInstagram size={28} color="#fff" />,
    link: "https://www.instagram.com",
  },
  {
    id: 4,
    icon: <FaLinkedin size={28} color="#fff" />,
    link: "https://www.linkedin.com",
  },
  {
    id: 5,
    icon: <FaYoutube size={28} color="#fff" />,
    link: "https://www.youtube.com",
  },
];


export const categoryMap = {
  news: [
    "World News",
    "Innovation",
    "Investing",
    "Billionaires",
    "Entrepreneurs",
    "Leadership",
  ],
  life: ["Wellness", "Travel", "Lifestyle", "Property", "Style", "Motors"],
  list: ["Top 10", "Must Read", "Editors Picks"],
  magazine: ["Cover Story", "Exclusive", "Breaking Today"],
};
