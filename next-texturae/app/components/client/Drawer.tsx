'use client';
import MenuLink from "./MenuLink";

function Drawer() {
  return (
    <div className="cursor-pointer explorer" onMouseOver={() => {
        const drawer = document.querySelector('._drawer');
        drawer?.classList.add('show');
        drawer?.classList.remove('hide');
    }}
        onMouseOut={() => {
            const drawer = document.querySelector('._drawer');
            drawer?.classList.remove('show');
            drawer?.classList.add('hide');}}
    >
    <div className="_menu_link relative overflow-hidden">
    <span className="text-xl">Explorer</span>
    <span className="_bottom_bar h-px w-full bg-platinum absolute bottom-0 left-0 -translate-x-full duration-200"></span>
    </div>
    <div className="pointer-events-none _drawer w-[50vw] bg-platinum absolute top-0 left-0  min-h- translate-y-[80px] -translate-x-full min-h-[100vh] duration-200">
      <ul className="menu menu-vertical text-paynes-gray">
        <li>
            <MenuLink slug="homme"/>
        </li>
        <li>
            <MenuLink slug="femme"/>
        </li>
      </ul>
    </div>
  </div> 
  )
}

export default Drawer