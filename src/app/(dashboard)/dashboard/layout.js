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
          <div className="flex min-h-screen">
            <div className="w-[20%] bg-news-dark pb-5">
              <div className="sticky top-10 h-screen">
                <Sidebar />
              </div>
            </div>


            <div className="w-[80%]">{children}</div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
