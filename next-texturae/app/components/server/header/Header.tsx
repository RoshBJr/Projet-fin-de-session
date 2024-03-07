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
      <header className="flex  font-font-titre z-[102] w-screen text-platinum top-0 h-[80px] fixed navbar bg-paynes-gray">
        <div className="lg:navbar-start">
          <Drawer />
        </div>
        <div className="lg:navbar-center min-[320px]:flex-grow min-[320px]:inline-flex justify-end">
          <Link href="/" className="btn btn-ghost text-4xl font-medium">
            Texturae
          </Link>
        </div>
        <div className="min-[320px]:hidden lg:flex navbar-end">
          <SearchIcon/>
          <AccountIcon/>
          <CartIcon/>
          <InputThemeControllerIcon />
          <LangManager/>
        </div>
        <div className="min-[320px]:flex lg:hidden lg:navbar-end">
          <SearchIcon/>
          <CartIcon/>
        </div>
      </header>
    </>
  );
};

export default Header;
