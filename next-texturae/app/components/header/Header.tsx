import Link from "next/link";
import MenuLink from "../client/MenuLink";
import Drawer from "../client/Drawer";
import InputThemeControllerIcon from "../icons/InputThemeControllerIcon";
import SearchIcon from "../icons/SearchIcon";
import AccountIcon from "../icons/AccountIcon";
import CartIcon from "../icons/CartIcon";
import LangManager from "../icons/LangManager";

const Header = () => {
  return (
    <>
      <header className="font-font-titre z-[99] w-screen text-platinum top-0 h-[80px] fixed navbar bg-paynes-gray">
        <div className="navbar-start">
          <Drawer />
        </div>
        <div className="navbar-center">
          <Link href="/" className="btn btn-ghost text-4xl font-medium">
            Texturae
          </Link>
        </div>
        <div className="navbar-end">
          <SearchIcon/>
          <AccountIcon/>
          <CartIcon/>
          <InputThemeControllerIcon />
          <LangManager/>
        </div>
      </header>
    </>
  );
};

export default Header;
