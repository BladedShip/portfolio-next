import { Poppins } from "next/font/google";

import "./globals.css";
import "./App.scss";
import Navbar from "@/components/Navbar";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Adithyan Jayakumar",
  description: "Making dumb crap just because I can",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Socials/>
        <Footer/>
      </body>
    </html>
  );
}
