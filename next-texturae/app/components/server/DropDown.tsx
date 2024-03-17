import { cookies } from "next/headers";
import Link from "next/link";

/**
 * composant de la barre pour trier les produits
 */

async function DropDown({theQuery, search}:{theQuery:string[], search:string}) {
  const en = cookies().get("lang")?.value;

  async function buildQuery() {
    let arr:any = {};
    theQuery.map((item: string, i: number) => {
      if(item == 'undefined'|| item.includes("asc") || item.includes("desc") ) return;
      arr[`filtre${i}`] = item;
    });
    arr['search'] = search;
    return arr;
  }
  const theQueryarr = await buildQuery();

  return (
    <div className="dropdown dropdown-bottom dropdown-end mr-5">
      <span tabIndex={0} role="button" className="btn m-1 font-font-titre text-xl font-medium border-2 border-thistle">
        {en ? "Sort" : "Trier"}
      </span>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 pr-5"
      >
        <li>
          <Link href={{query:{ ...theQueryarr, tri: "price-asc"}}}className={`font-font-titre text-base hover:bg-thistle active:bg-thistle ${theQuery.includes("price-asc") ? "bg-thistle focus:bg-thistle": "focus:bg-alice-blue"}`}>{en ? "Price Ascending": "Prix Ascendants"}</Link>
        </li>
        <li>
          <Link href={{query:{...theQueryarr, tri: "price-desc"}}} className={`font-font-titre text-base hover:bg-thistle active:bg-thistle ${theQuery.includes("price-desc") ? "bg-thistle focus:bg-thistle": "focus:bg-alice-blue"}`}>{en ? "Price Descending": "Prix Descendants"}</Link>
        </li>
        <li>
          <Link href={{query:{...theQueryarr, tri: "name-asc"}}} className={`font-font-titre text-base hover:bg-thistle active:bg-thistle ${theQuery.includes("name-asc") ? "bg-thistle focus:bg-thistle": "focus:bg-alice-blue"}`}>{en ? "Name (A-Z)": "Nom (A-Z)"}</Link>
        </li>
        <li>
          <Link href={{query:{...theQueryarr, tri: "name-desc"}}} className={`font-font-titre text-base hover:bg-thistle active:bg-thistle ${theQuery.includes("name-desc") ? "bg-thistle focus:bg-thistle": "focus:bg-alice-blue"}`}>{en ? "Name (Z-A)": "Nom (Z-A)"}</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
