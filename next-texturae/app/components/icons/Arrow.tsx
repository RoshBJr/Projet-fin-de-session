import React from "react";

interface Props {
    height:string;
    width:string;
    rotate:boolean;
}

function Arrow({height, width, rotate}:Props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`h-${height} w-${width} ${rotate ? "rotate-180": ""}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </>
  );
}

export default Arrow;
