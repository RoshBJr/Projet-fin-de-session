'use client'

import { sendSearchQuery } from "@/code/actionSendSearchQuery";
import { usePathname } from "next/navigation";

function SearchIcon() {
  const currPath = usePathname();
  return (
    <div className="_search-ctn md:h-[48px] min-[320px]:h-[30px] min-[320px]:min-w-[30px] lg:max-w-60 lg:w-60 relative">
      <input className="" type="checkbox" id="searchInput" />
      {/* label grands écrans */}
      <label
        onClick={() => {
          if(window.innerWidth > 768) return;
          document.querySelector('._ctn-header-title')?.classList.toggle("_hidden");
          const searchCtn = document.querySelector("._mobile-nav-end ._search-ctn");
          const searchBar = document.querySelector("._mobile-nav-end ._search");
          const crossIco = document.querySelector("._mobile-nav-end ._cross-icon");
          const searchIco = document.querySelector("._mobile-nav-end ._search-icon");
          searchBar?.classList.toggle('input-search-show')
          crossIco?.classList.toggle('cross-show');
          searchIco?.classList.toggle('search-hide');
          searchCtn?.classList.toggle('full-width');
        }}
        className="_ctn inline-flex z-10 absolute right-0 justify-center 
        items-center min-[320px]:w-[30px] min-[320px]:h-[30px] md:w-[48px] 
        md:h-[48px] btn-ghost rounded-full"
        htmlFor="searchInput"
      >
        {/* search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="_search-icon h-[20px] w-[20px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {/* cross icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="_cross-icon hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </label>
      <form
        action={async (formData) => {
          await sendSearchQuery(formData, currPath);
        }}
      >
        <button type="submit"></button>
        <input
          type="text"
          name="searchBar"
          className="_search opacity-0 pr-[40px] absolute left-0 top-1/2 h-[40px] -translate-y-1/2 
        outline-none right-0 rounded-[25px] caret-platinum pl-2 border-thistle border text-platinum"
        />
      </form>
    </div>
  );

}

export default SearchIcon;
