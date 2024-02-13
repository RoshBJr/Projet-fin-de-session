import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bob Dylan",
  description: "first next js project"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] bg-slate-800">
        <Navbar/>
        <ProfilePic/>
        {children}
      </body>
    </html>
  );
}
