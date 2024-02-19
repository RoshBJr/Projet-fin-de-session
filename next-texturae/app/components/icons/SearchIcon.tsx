function SearchIcon() {
  return (
    <>
      <input type="checkbox" id="searchInput" />
      <label className="_ctn btn btn-ghost btn-circle w-auto" htmlFor="searchInput">
        <div className="h-auto w-full relative">
          {/* search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="_search-icon h-5 w-5 checked:h-0 checked:w-0"
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
            className="_cross-icon w-0 h-0 checked:w-5 checked:h-5 checked:absolute checked:top-1/2
              checked:-translate-y-1/2 checked:right-0 checked:mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <input
            type="text"
            className="_search opacity-0 absolute top-0 bottom-0 right-0 left-0 
        outline-none rounded-[25px] caret-platinum pl-2 border-thistle border text-platinum"
          />
        </div>
      </label>
    </>
  );
}

export default SearchIcon;
