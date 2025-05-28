import Navbar from "@/components/Shared/Navbar";
import "../globals.css";
import Footer from "@/components/Shared/Footer";


// export const metadata = {
//   title: "Your Trusted News Source | Latest Updates & Breaking Stories",
//   description:
//     "Get the latest breaking news, in-depth analysis, and expert opinions on the top stories. Stay updated with a wide range of topics including politics, business, technology, entertainment, and more. Your go-to source for trustworthy and timely news.",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
