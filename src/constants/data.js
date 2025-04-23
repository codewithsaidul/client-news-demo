import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";





export const navMenuList = {
  sections: [
    {
      id: 1,
      name: "Human Capital",
      link: "#"
    },
    {
      id: 2,
      name: "Business",
      link: "#"
    },
    {
      id: 3,
      name: "Technology",
      link: "#"
    },
    {
      id: 4,
      name: "Forbes Network",
      link: "#"
    },
    {
      id: 5,
      name: "Forbes Life",
      link: "#"
    },
    {
      id: 6,
      name: "Forbes Women",
      link: "#"
    },
  ],
  editions: [
    {
      id: 1,
      name: "Mexico",
      link: "#"
    },
    {
      id: 2,
      name: "Dominican Republic",
      link: "#"
    },
    {
      id: 3,
      name: "Peru",
      link: "#"
    },
    {
      id: 4,
      name: "Chili",
      link: "#"
    },
    {
      id: 5,
      name: "Central America",
      link: "#"
    },
  ],
};


export const socialLinks = [
    {
        id: 1,
        icon: <FaFacebook size={36} color="#fff" />,
        link: "https://www.facebook.com"
    },
    {
        id: 2,
        icon: <FaXTwitter size={36} color="#fff" />,
        link: "https://www.twitter.com"
    },
    {
        id: 3,
        icon: <FaInstagram size={36} color="#fff" />,
        link: "https://www.instagram.com"
    },
    {
        id: 4,
        icon: <FaYoutube size={36} color="#fff" />,
        link: "https://www.youtube.com"
    },
];


export const newsData = [
  {
    id: "nws001",
    title: "Global Politics Takes a New Turn",
    slug: "global-politics-new-turn",
    content: "<p>Full content of the news article goes here...</p>",
    excerpt: "World leaders meet to discuss the future of international relations.",
    thumbnail: "/images/thumbs/politics1.jpg",
    bannerImage: "/images/banners/politics1.jpg",
    category: "International",
    tags: ["Politics", "World", "Diplomacy"],
    author: {
      id: "auth001",
      name: "John Doe",
      avatar: "/images/authors/john.jpg"
    },
    createdAt: "2025-04-20T08:00:00Z",
    updatedAt: "2025-04-21T10:00:00Z",
    isFeatured: true,
    isBreaking: true,
    views: 2541,
    status: "published"
  },
  {
    id: "nws002",
    title: "Tech Giants Compete Over AI Domination",
    slug: "ai-domination-tech-giants",
    content: "<p>AI advancements are creating fierce competition...</p>",
    excerpt: "Google, Microsoft, and OpenAI in a heated race to lead the AI revolution.",
    thumbnail: "/images/thumbs/tech1.jpg",
    bannerImage: "/images/banners/tech1.jpg",
    category: "Technology",
    tags: ["AI", "Tech", "Innovation"],
    author: {
      id: "auth002",
      name: "Jane Smith",
      avatar: "/images/authors/jane.jpg"
    },
    createdAt: "2025-04-21T12:30:00Z",
    isFeatured: false,
    isBreaking: false,
    views: 1345,
    status: "published"
  },
  {
    id: "nws003",
    title: "Economic Forecast Predicts Slow Recovery",
    slug: "economic-forecast-2025",
    content: "<p>Experts believe inflation will gradually ease...</p>",
    excerpt: "Markets remain volatile amid uncertain global outlook.",
    thumbnail: "/images/thumbs/economy1.jpg",
    category: "Business",
    tags: ["Economy", "Forecast", "Finance"],
    author: {
      id: "auth003",
      name: "Richard Lee",
      avatar: "/images/authors/richard.jpg"
    },
    createdAt: "2025-04-19T09:15:00Z",
    isFeatured: false,
    isBreaking: false,
    views: 876,
    status: "published"
  },
  {
    id: "nws004",
    title: "Champions League Final Set to Thrill Fans",
    slug: "champions-league-final-2025",
    content: "<p>Two legendary teams will face off in the biggest football event...</p>",
    excerpt: "Europe’s top football clubs clash in the ultimate showdown.",
    thumbnail: "/images/thumbs/sports1.jpg",
    category: "Sports",
    tags: ["Football", "Champions League", "Final"],
    author: {
      id: "auth004",
      name: "Alex Morgan",
      avatar: "/images/authors/alex.jpg"
    },
    createdAt: "2025-04-18T14:45:00Z",
    isFeatured: true,
    isBreaking: false,
    views: 3112,
    status: "published"
  },
  {
    id: "nws005",
    title: "Oscars 2025: Top Contenders Revealed",
    slug: "oscars-2025-contenders",
    content: "<p>The Academy announces this year’s most awaited films...</p>",
    excerpt: "From drama to sci-fi, these films are leading the race for awards.",
    thumbnail: "/images/thumbs/entertainment1.jpg",
    category: "Entertainment",
    tags: ["Oscars", "Movies", "Hollywood"],
    author: {
      id: "auth005",
      name: "Emma Thomas",
      avatar: "/images/authors/emma.jpg"
    },
    createdAt: "2025-04-17T11:20:00Z",
    isFeatured: false,
    isBreaking: false,
    views: 920,
    status: "published"
  },
  {
    id: "nws006",
    title: "NASA Plans New Lunar Mission",
    slug: "nasa-lunar-mission-2025",
    content: "<p>NASA aims to establish permanent base on the moon by 2030...</p>",
    excerpt: "Next step in space exploration: Moon base in development.",
    thumbnail: "/images/thumbs/space1.jpg",
    category: "Science",
    tags: ["NASA", "Moon", "Space"],
    author: {
      id: "auth006",
      name: "Neil Carter",
      avatar: "/images/authors/neil.jpg"
    },
    createdAt: "2025-04-22T09:00:00Z",
    isFeatured: true,
    isBreaking: false,
    views: 1987,
    status: "published"
  },
  {
    id: "nws007",
    title: "Climate Change Impacts Crop Production",
    slug: "climate-change-agriculture",
    content: "<p>Farmers face uncertainty due to erratic weather...</p>",
    excerpt: "Changing climate threatens global food security.",
    thumbnail: "/images/thumbs/environment1.jpg",
    category: "Environment",
    tags: ["Climate", "Agriculture", "Environment"],
    author: {
      id: "auth007",
      name: "Linda Green",
      avatar: "/images/authors/linda.jpg"
    },
    createdAt: "2025-04-20T16:40:00Z",
    isFeatured: false,
    isBreaking: true,
    views: 1450,
    status: "published"
  },
  {
    id: "nws008",
    title: "Stock Market Sees Sudden Drop",
    slug: "stock-market-drop-2025",
    content: "<p>Unexpected sell-off hits major global indices...</p>",
    excerpt: "Investors react to latest inflation data and Fed comments.",
    thumbnail: "/images/thumbs/finance1.jpg",
    category: "Finance",
    tags: ["Stock Market", "Inflation", "Economy"],
    author: {
      id: "auth003",
      name: "Richard Lee",
      avatar: "/images/authors/richard.jpg"
    },
    createdAt: "2025-04-23T06:10:00Z",
    isFeatured: false,
    isBreaking: false,
    views: 1104,
    status: "published"
  },
  {
    id: "nws009",
    title: "Meta Launches New VR Headset",
    slug: "meta-vr-headset-2025",
    content: "<p>New features include retina tracking and haptic feedback...</p>",
    excerpt: "The tech giant redefines virtual reality experience.",
    thumbnail: "/images/thumbs/vr1.jpg",
    category: "Technology",
    tags: ["Meta", "VR", "Gadgets"],
    author: {
      id: "auth002",
      name: "Jane Smith",
      avatar: "/images/authors/jane.jpg"
    },
    createdAt: "2025-04-22T13:25:00Z",
    isFeatured: false,
    isBreaking: false,
    views: 1675,
    status: "published"
  },
  {
    id: "nws010",
    title: "UK Elections: Close Race Expected",
    slug: "uk-election-2025",
    content: "<p>Polls suggest a tight contest between parties...</p>",
    excerpt: "Public opinion divided ahead of key national vote.",
    thumbnail: "/images/thumbs/uk-election.jpg",
    category: "Politics",
    tags: ["Elections", "UK", "Politics"],
    author: {
      id: "auth001",
      name: "John Doe",
      avatar: "/images/authors/john.jpg"
    },
    createdAt: "2025-04-23T08:15:00Z",
    isFeatured: true,
    isBreaking: true,
    views: 2110,
    status: "published"
  }
];

