import React from "react";
import Arrow from "./Arrow";
import { client } from "@/code/sanityClient";
import Link from "next/link";

async function FilterDropdown({tri}:{tri:string}) {
  const data: any = await client.fetch(`*[_type == "category"] {
        category_en,
        category_fr
      }`);

  return (
    <div className="dropdown dropdown-right ml-5">
      <div
        tabIndex={0}
        role="button"
        className="btn m-0 border-2 border-thistle _btn-filtre"
      >
        <span className="font-font-titre text-xl font-medium">Filtrer</span>
        <Arrow customCss="h-6 w-6" />
      </div>
      <ul
        tabIndex={0}
        className="_filtre dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[35rem] pb-0 flex flex-row flex-nowrap overflow-x-scroll px-3 -translate-y-[8px]"
      >
        {
            data[0].category_fr.map((item:any) => {
                return(
                    <li key={item} >
                        <Link
                          href={{
                            query: {
                              filtre: `${item}`,
                              tri: tri
                            }
                          }}
                          replace={false}
                        >
                          {item}
                        </Link>
                    </li>
                )
            })
        }
      </ul>
    </div>
  );
}

export default FilterDropdown;
