import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const lang:string = 'fr';

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
    <html lang={lang}>
      <body className="relative">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
