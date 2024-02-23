function DropDown() {
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
          <a className="font-font-titre text-base">Prix Ascendants</a>
        </li>
        <li>
          <a className="font-font-titre text-base">Prix Descendants</a>
        </li>
        <li>
          <a className="font-font-titre text-base">Nom (A-Z)</a>
        </li>
        <li>
          <a className="font-font-titre text-base">Nom (Z-A)</a>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
