'use server';
import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import ProductCard from "../components/server/ProductCard";
import DropDown from "../components/server/DropDown";
import FilterDropdown from "../components/icons/FilterDropdown";
import { cookies } from "next/headers";

async function Feed({searchParams}:{searchParams:{filtre:string, tri:string, search:string}}) {
  const en = cookies().get('lang')?.value;
  const searchQuery = searchParams.search;
  const sorting = searchParams.tri.split('-');
  const data:any = await client.fetch(`*[gender.fr == "Femme" ${searchQuery ? `&& ${en ? `name.en match "*${searchQuery}*"`: `name.fr match "*${searchQuery}*"`}`:''} ] {
      _id,
      name,
      category,
      colors,
      description,
      gender,
      slug_en,
      slug_fr,
      price,
      defaultImg,
      image[]{ "imgUrl": asset->url }
    } | order(${sorting[0] !== "name"? "price" : en ? "lower(name.en)": "lower(name.fr)"} ${sorting[1]})`,undefined, {cache: 'force-cache'});
    const arrFilter = Object.values(searchParams).filter(val => val !== searchParams.search);
    
    
  return (
    <section className="overflow-x-hidden pt-[120px] bg-alice-blue flex flex-col">
      <div className="flex justify-between">
        <FilterDropdown
          tri={searchParams.tri}
          search={searchParams.search}
          theQuery={arrFilter}/>
        <DropDown
          search={searchParams.search}
          theQuery={arrFilter}/>
      </div>
      <div className="p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.map((product: product) => {
          if(arrFilter.length == 1) {
            return <ProductCard key={product._id} product={product} theQuery={arrFilter} />;
          } else if(arrFilter.includes(product.category.fr)) {
            return <ProductCard key={product._id} product={product} theQuery={arrFilter} />
          }
        })}
      </div>
    </section>
  );
}