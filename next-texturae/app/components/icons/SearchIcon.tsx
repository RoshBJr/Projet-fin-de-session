'use client'

import { sendSearchQuery } from "@/code/actionSendSearchQuery";
import { usePathname } from "next/navigation";

function SearchIcon() {
  const currPath = usePathname();
  return (
    <div className="h-[40px] max-w-60 w-60 relative">
      <input type="checkbox" id="searchInput" />
      <label
        className="_ctn z-10 absolute right-0 inline-flex justify-center items-center  w-[40px] h-[40px] btn-ghost rounded-full"
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
