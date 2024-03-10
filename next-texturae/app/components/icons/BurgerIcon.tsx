import React from "react";

function BurgerIcon() {
  return (
    <svg
      onClick={() => {
        const drawer = document.querySelector("._drawer");
        if (drawer?.classList.contains("show")) {
          drawer?.classList.remove("show");
          drawer?.classList.add("hide");
        } else {
          drawer?.classList.add("show");
          drawer?.classList.remove("hide");
        }
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="min-[320px]:ml-1 md:ml-3 _burger min-[320px]:w-6 min-[320px]:h-6 md:h-8 md:w-8 lg:hidden pointer-events-auto z-50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

export default BurgerIcon;
