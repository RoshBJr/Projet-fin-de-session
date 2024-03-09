import Link from "next/link";
import Drawer from "../../client/Drawer";
import InputThemeControllerIcon from "../../icons//InputThemeControllerIcon";
import SearchIcon from "../../icons/SearchIcon";
import AccountIcon from "../../icons/AccountIcon";
import CartIcon from "../../icons/CartIcon";
import LangManager from "../../client/LangManager";

const Header = () => {
  return (
    <>
      <header className="flex min-[320px]:justify-between  font-font-titre z-[102] w-screen text-platinum top-0 h-[80px] fixed navbar bg-paynes-gray">
        <div className="sm:navbar-start">
          <Drawer />
        </div>
        <div className="_ctn-header-title max-lg:_wide sm:navbar-center min-[320px]:flex-grow justify-end">
          <Link href="/" className="btn btn-ghost text-4xl font-medium">
            Texturae
          </Link>
        </div>
        <div className="min-[320px]:hidden md:flex navbar-end">
          <SearchIcon/>
          <AccountIcon style="h-5 w-5"/>
          <CartIcon/>
          <InputThemeControllerIcon style="h-5 w-5 fill-alice-blue"/>
          <LangManager/>
        </div>
        <div className="_mobile-nav-end min-[320px]:flex md:hidden sm:navbar-end">
          <SearchIcon/>
          <CartIcon/>
          <LangManager/>
        </div>
      </header>
    </>
  );
};

export default Header;
