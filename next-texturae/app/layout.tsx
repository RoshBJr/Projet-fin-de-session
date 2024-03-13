import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/server/header/Header";
import Footer from "./components/server/footer/Footer";
import { Happy_Monkey, Rubik } from "next/font/google";
import { Suspense } from "react";

const font_hm = Happy_Monkey({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-monkey",
});
const font_rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Texturae",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme="mylighttheme"
      className={`${font_hm.variable} ${font_rubik.variable}`}
    >
      <body className="relative flex flex-col min-h-screen">
        <Header />
        <Suspense fallback={<div>Loading...</div>} >{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
