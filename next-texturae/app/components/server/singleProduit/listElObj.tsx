import { product } from "@/code/types";
import Link from "next/link";
import React from "react";

interface Props {
  data:[string];
  searchKey:string;
  title:string;
  selectValue:number;
  postQuery:string;
}

function ListElObj({ data, title, selectValue, searchKey, postQuery }: Props) {
  const selectVal = selectValue;

  return data !== undefined ? (
    <div className="flex flex-col gap-4">
      <h2 className="font-font-titre text-4xl">{title}</h2>
      <div className="flex gap-3 ml-2">
        {data.map((val, index) => (
          <Link
          key={val}
          href={
            `?${searchKey}=${index}${postQuery}`

          }
          replace
        className={`active:border-davys-gray active:bg-thistle active:text-alice-blue hover:border-davys-gray hover:bg-thistle hover:text-alice-blue  cursor-pointer border-2 py-2 px-4 rounded-[8px] font-font-titre text-xl
          ${index == selectVal ? "border-davys-gray bg-thistle text-alice-blue": "border-thistle bg-alice-blue text-davys-gray"} duration-200`} >
          {val}
      </Link>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ListElObj;
