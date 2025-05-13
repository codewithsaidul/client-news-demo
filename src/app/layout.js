import Navbar from "@/components/Shared/Navbar";
import { ReduxProvider } from "@/provider/ReduxProvider";
import { Inter, Merriweather, Lora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Shared/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const merriWeather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});
const loraSerif = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Your Trusted News Source | Latest Updates & Breaking Stories",
  description:
    "Get the latest breaking news, in-depth analysis, and expert opinions on the top stories. Stay updated with a wide range of topics including politics, business, technology, entertainment, and more. Your go-to source for trustworthy and timely news.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriWeather.variable} ${loraSerif.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
