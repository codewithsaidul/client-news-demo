import { ReduxProvider } from "@/provider/ReduxProvider";
// import { Inter, Merriweather, Lora } from "next/font/google";
import "../../globals.css";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
// });

// const merriWeather = Merriweather({
//   variable: "--font-merriweather",
//   subsets: ["latin"],
//   weight: ["300", "400", "700", "900"],
// });
// const loraSerif = Lora({
//   variable: "--font-lora",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

export const metadata = {
  title:
    "Admin DashBoard - Your Trusted News Source | Latest Updates & Breaking Stories",
  description:
    "Get the latest breaking news, in-depth analysis, and expert opinions on the top stories. Stay updated with a wide range of topics including politics, business, technology, entertainment, and more. Your go-to source for trustworthy and timely news.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className="flex items-center justify-between">
            <div className="w-[20%] h-screen bg-news-dark pb-5">
              <Sidebar />
            </div>
            <div className="w-[80%] h-screen">
              {children}
            </div>
          </div>
          
        </ReduxProvider>
      </body>
    </html>
  );
}
