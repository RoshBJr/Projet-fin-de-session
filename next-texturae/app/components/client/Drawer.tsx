"use client";
import { cookies } from "next/headers";
import MenuLink from "./MenuLink";
import { useEffect, useState } from "react";
import BurgerIcon from "../icons/BurgerIcon";
import AccountIcon from "../icons/AccountIcon";
import LangManager from "./LangManager";
import InputThemeController from "../icons/InputThemeControllerIcon";

function Drawer() {
  const [en, setEn] = useState<boolean>(false);

  useEffect(() => {
    if (document !== undefined) {
      setEn(document.cookie.includes("lang=en"));
    }
  });

  return (
    <div
      className="md:cursor-pointer explorer min-[320px]:pointer-events-none md:pointer-events-auto"
      onMouseOver={() => {
        if(window.innerWidth < 768) return;
        const drawer = document.querySelector("._drawer");
        drawer?.classList.add("show");
        drawer?.classList.remove("hide");
        
      }}
      onMouseOut={() => {
        if(window.innerWidth < 768) return;
        const drawer = document.querySelector("._drawer");
        drawer?.classList.remove("show");
        drawer?.classList.add("hide");
      }}
    >
      <div className="_menu_link relative overflow-hidden">
        <BurgerIcon/>
        <span className="text-xl min-[320px]:hidden lg:flex">{en ? "Explore" : "Explorer"}</span>
        <span className="_bottom_bar min-[320px]:hidden md:flex h-px w-full bg-platinum absolute bottom-0 left-0 -translate-x-full duration-200"></span>
      </div>
      <div className="_nav pointer-events-none _drawer md:w-[50vw] min-[320px]:w-full bg-platinum absolute top-0 left-0 translate-y-[80px] -translate-x-full duration-200 min-[320px]:flex min-[320px]:flex-col justify-between">
        <ul className="menu menu-vertical text-paynes-gray min-[320px]:text-xl">
          <li>
            <MenuLink slug="homme" menuTitre="Homme" menuTitreEn="Man" />
          </li>
          <li>
            <MenuLink slug="femme" menuTitre="Femme" menuTitreEn="Woman" />
          </li>
          <li>
            <MenuLink
              slug="Feed"
              menuTitre="Toute les collections"
              menuTitreEn="All collections"
            />
          </li>
        </ul>
        <div className="self-end mb-2 mr-2">
          <AccountIcon style="stroke-davys-gray h-6 w-6"/>
          <InputThemeController style="fill-davys-gray h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Drawer;