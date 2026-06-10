import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavContainer from "@/Components/Home/Navbar/NavContainer";
import Footer from "@/Components/Home/Footer/Footer";
import ScrollToTop from "@/Components/Helper/ScrollToTop";

const font = Inter({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Corporate Landingpage",
  description: "A corporate landing page built with Next.js and Tailwind CSS  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className={`${font.className} antialiased bg-[#1f242c]`}>
        <NavContainer/>
        {children}
        <Footer/>
      <ScrollToTop/>
        </body>
    </html>
  );
}
