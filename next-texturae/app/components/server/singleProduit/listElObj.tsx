import { product } from "@/code/types";
import React from "react";

interface Props {
  data:[string];
  title:string;
}

function ListElObj({ data, title }: Props) {
  return data !== undefined ? (
    <div className="flex flex-col gap-4">
      <h2 className="font-font-titre text-4xl">{title}</h2>
      <div className="flex gap-3">
        {data.map((val) => (
          <div className="cursor-pointer border-2 py-2 px-4 rounded-[8px] border-thistle text-davys-gray font-font-titre text-xl" >{val}</div>
        ))}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ListElObj;
