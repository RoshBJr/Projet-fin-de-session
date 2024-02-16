import Link from "next/link";

const Header = () => {
  return (
<>
<header className="w-screen text-platinum  h-[80px] fixed navbar bg-paynes-gray">
  <div className="navbar-start">
  <div className="cursor-pointer explorer">
    {/* Page content here */}
    <div className="_menu_link relative overflow-hidden">
    <span className="text-xl">Explorer</span>
    <span className="_bottom_bar h-px w-full bg-platinum absolute bottom-0 left-0 -translate-x-full duration-300"></span>
    </div>
    <div className="_drawer w-[50vw] bg-white absolute top-0 left-0  min-h- translate-y-[80px] min-h-[100vh] duration-200 -translate-x-full">
      <ul className="menu menu-vertical text-paynes-gray">
        {/* Navbar menu content here */}
        <li><a>Navbar Item 1</a></li>
        <li><a>Navbar Item 2</a></li>
      </ul>
    </div>
  </div> 
</div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Texturae</a>
  </div>
  <div className="navbar-end">
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

        <span className="badge badge-xs border-thistle bg-thistle indicator-item"></span>
      </div>
    </button>
  </div>
</header>
</>
  )
}

export default Header;