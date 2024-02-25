import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import ProductCard from "../components/server/ProductCard";
import DropDown from "../components/server/DropDown";
import FilterDropdown from "../components/icons/FilterDropdown";
import { cookies } from "next/headers";

async function Feed({searchParams}:{searchParams:{filtre:string, tri:string}}) {
  const en = cookies().get('lang')?.value;
  const sorting = searchParams.tri.split('-');
  const data:any = await client.fetch(`*[gender.fr == "Femme"] {
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
    } | order(${sorting[0] !== "name"? "price" : en ? "lower(name.en)": "lower(name.fr)"} ${sorting[1]})`);
    const arrFilter = Object.values(searchParams);
    
  return (
    <section className="pt-[120px] bg-alice-blue flex flex-col">
      <div className="flex justify-between">
        <FilterDropdown tri={searchParams.tri} theQuery={arrFilter}/>
        <DropDown filtre={searchParams.filtre} theQuery={arrFilter}/>
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

export default Feed;