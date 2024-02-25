"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  tri: string | undefined;
  langData: any;
  theQuery:string[];
}

function FilterBtn({ tri, langData, theQuery }: Props) {
  const [filter, setFilter] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    let arr: string = "";
    filter.map((item: string, i: number) => {
      if (i != 0) {
        arr += `&filtre${i}=${item}`;
      } else {
        arr += `filtre${i}=${item}`;
      }
    });
    router.push(`?${arr}&tri=${tri}`);
    
  }, [filter]);
  return langData.map((item: any, i: number) => {
    return (
      <li key={i}>
        <button
          className={`hover:bg-thistle active:bg-thistle ${theQuery.includes(item) ? "bg-thistle focus:bg-thistle": "focus:bg-alice-blue"}`}
          onClick={() => {
            if (filter.includes(item)) {
              setFilter(filter.filter((val) => item !== val));
            } else {
              setFilter([...filter, item]);
            }
          }}
        >
          {item}
        </button>
      </li>
    );
  });
}

export default FilterBtn;
