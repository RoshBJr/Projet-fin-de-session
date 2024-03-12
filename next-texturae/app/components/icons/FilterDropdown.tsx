import Arrow from "./Arrow";
import { client } from "@/code/sanityClient";
import { cookies } from "next/headers";
import FilterBtn from "../client/FilterBtn";

async function FilterDropdown({tri, theQuery, search}:{tri:string, theQuery:string[], search:string}) {

  const en = cookies().get("lang")?.value;

  const data: any = await client.fetch(`*[_type == "category"] {
        category_en,
        category_fr
      }`);
  const langData = en ? data[0].category_en: data[0].category_fr;
  
  return (
    <div className="dropdown lg:dropdown-right min-[320px]:dropdown-bottom ml-5">
      <div
        tabIndex={0}
        role="button"
        className="btn m-0 border-2 border-thistle _btn-filtre"
      >
        <span className="font-font-titre text-xl font-medium">{en ? "Filter": "Filtrer"}</span>
        <Arrow customCss="h-6 w-6" />
      </div>
      <ul
        tabIndex={0}
        className="_filtre dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box min-[320px]:w-[70vw] min-[320px]:mt-3 lg:w-[35rem] pb-0 flex flex-row flex-nowrap overflow-x-scroll px-3 -translate-y-[8px] gap-1"
      >
        <FilterBtn search={search} tri={tri} theQuery={theQuery} langData={langData}/>
      </ul>
    </div>
  );
}

export default FilterDropdown;
