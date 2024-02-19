import Link from "next/link";
import MenuLink from "../client/MenuLink";
import { Happy_Monkey, Rubik } from "next/font/google";
import Drawer from "../client/Drawer";
import InputThemeController from "./InputThemeController";

export const font_hm = Happy_Monkey({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const font_rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
}) ;

const Header = () => {
  return (
<>
<header className="z-[99] w-screen text-platinum top-0 h-[80px] fixed navbar bg-paynes-gray">
  <div className="navbar-start">
    <Drawer/>
  </div>
  <div className="navbar-center">
    <Link href='/' className={`btn btn-ghost text-xl ${font_hm.className}`}>Texturae</Link>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

        <span className="badge badge-xs border-thistle bg-thistle indicator-item"></span>
      </div>
    </button>
    <InputThemeController/>
  </div>
</header>
</>
  )
}

export default Header;