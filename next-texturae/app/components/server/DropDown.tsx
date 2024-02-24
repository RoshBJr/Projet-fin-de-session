import Link from "next/link";

function DropDown({filtre}:{filtre:string}) {
  return (
    <div className="dropdown dropdown-bottom dropdown-end mr-5">
      <span tabIndex={0} role="button" className="btn m-1 font-font-titre text-xl font-medium border-2 border-thistle">
        Trier
      </span>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 pr-5"
      >
        <li>
          <Link href={{query:{tri:'price-asc', filtre: `${filtre}`}}} className="font-font-titre text-base">Prix Ascendants</Link>
        </li>
        <li>
          <Link href={{query:{tri:'price-desc', filtre: `${filtre}`}}} className="font-font-titre text-base">Prix Descendants</Link>
        </li>
        <li>
          <Link href={{query:{tri:'name-a', filtre: `${filtre}`}}} className="font-font-titre text-base">Nom (A-Z)</Link>
        </li>
        <li>
          <Link href={{query:{tri:'name-z', filtre: `${filtre}`}}} className="font-font-titre text-base">Nom (Z-A)</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
