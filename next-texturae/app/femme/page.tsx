"use server";
import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import ProductCard from "../components/server/ProductCard";
import DropDown from "../components/server/DropDown";
import FilterDropdown from "../components/icons/FilterDropdown";
import { cookies } from "next/headers";
import { femmeQ } from "@/code/SanityQueries";

/** 
 * composant de la page collection pour femme
*/

export default async function Feed({
  searchParams,
}: {
  searchParams: { filtre: string; tri: string; search: string };
}) {
  const en = cookies().get("lang")?.value;
  const searchQuery = searchParams.search;
  const sorting = searchParams.tri.split("-");
  const data: any = await client.fetch(femmeQ(searchQuery,en,sorting),
    undefined,
    { cache: "force-cache" }
  );
  const arrFilter = Object.values(searchParams).filter(
    (val) => val !== searchParams.search
  );

  return (
    <section className="overflow-x-hidden pt-[120px] bg-primary flex flex-col flex-grow">
        {data.length !== 0 ? (
          <>
            <div className="flex justify-between items-center">
              <FilterDropdown
                tri={searchParams.tri}
                search={searchParams.search}
                theQuery={arrFilter}
              />
              <DropDown search={searchParams.search} theQuery={arrFilter} />
            </div>
            <div className="p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {data.map((product: product) => {
                if (arrFilter.length == 1) {
                  return (
                    <ProductCard
                      key={product._id}
                      product={product}
                      theQuery={arrFilter}
                    />
                  );
                } else if (arrFilter.includes(product.category.fr)) {
                  return (
                    <ProductCard
                      key={product._id}
                      product={product}
                      theQuery={arrFilter}
                    />
                  );
                }
              })}
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center items-center flex-grow font-font-titre text-neutral">
              <h2 className="text-3xl">
                {en ? "Silence is Bliss" : "Le silence est un Bonheur"}
              </h2>
            </div>
          </>
        )}
    </section>
  );
}