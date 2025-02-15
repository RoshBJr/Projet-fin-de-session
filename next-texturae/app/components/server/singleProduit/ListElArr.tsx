import Link from "next/link";

/** 
 * composant permettant de selectionner une taille pour un produit dans la page produit unique
*/

interface Props {
  data: [string | number];
  searchKey:string;
  title: string;
  selectValue:number;
  postQuery:string;
}

function ListElArr({ data,searchKey, title, selectValue,postQuery}: Props) {

  const selectVal = selectValue;
  

  return data ? (
    <div className="flex flex-col gap-4">
      <h2 className="font-font-titre min-[320px]:text-3xl md:text-4xl">{title}</h2>
      <div className="flex gap-3 ml-2 flex-wrap">
        {data.map((val, index) => (
          <Link
              key={val}
              href={
                `?${searchKey}=${index}${postQuery}`

              }
              scroll={false}
              replace
            className={`active:border-davys-gray
              active:bg-thistle active:text-alice-blue hover:border-davys-gray hover:bg-thistle
              hover:text-alice-blue  cursor-pointer border-2 py-2 px-4 rounded-[8px] font-font-titre min-[320px]:text-sm md:text-xl
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

export default ListElArr;
