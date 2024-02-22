import ListElArr from "@/app/components/server/singleProduit/ListElArr";
import ListElObj from "@/app/components/server/singleProduit/listElObj";
import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import Image from "next/image";

async function page({ searchParams }: { searchParams: { id: string, color:string, size:string,material:string, pattern:string } }) {
  const data: [product] = await client.fetch(`*[_id == "${searchParams.id}"] {
    _id,
    name,
    category,
    colors,
    description,
    price,
    gender,
    slug_en,
    slug_fr,
    sizes,
    defaultImg,
    materials,
    patterns,
    image[]{ "imgUrl": asset->url }
  }`);

  return (
    <section className="_single bg-alice-blue flex justify-start gap-28 w-full mt-[80px] overflow-hidden max-h-[calc(100vh-80px)]">
      <Image
        className="w-auto h-[calc(100vh-80px)]"
        src={data[0].defaultImg}
        alt={data[0].name.fr}
        width={900}
        height={900}
        priority={true}
      />
      <div className="pt-16 pb-8 flex flex-col gap-8 overflow-y-scroll flex-1">
        <h2 className="font-font-titre text-6xl text-davys-gray max-w-[90%]">{data[0].name.fr}</h2>
        <div className="flex gap-3">
          <div className="border rounded-full py-1 px-4 border-thistle font-font-titre text-2xl text-davys-gray">{data[0].gender.fr}</div>
          <div className="border rounded-full py-1 px-4 border-thistle font-font-titre text-2xl text-davys-gray">{data[0].category.fr}</div>
        </div>
        <div className="font-font-titre text-5xl text-davys-gray">${data[0].price}</div>
        <p className="font-font-text text-davys-gray text-2xl w-[90%]">{data[0].description.fr}</p>
        <ListElArr
          data={data[0].sizes}
          searchKey="size"
          title="Tailles"
          selectValue={searchParams.size}
          postQuery={`&id=${searchParams.id}&color=${searchParams.color}&material=${searchParams.material}&pattern=${searchParams.pattern}`}
        />
        <ListElObj
          data={data[0].colors.fr}
          searchKey="color"
          title="Couleurs"
          selectValue={searchParams.color}
          postQuery={`&id=${searchParams.id}&pattern=${searchParams.pattern}&material=${searchParams.material}&size=${searchParams.size}`}
        />
        <ListElObj
          data={data[0].materials.fr}
          searchKey="material"
          title="Matériels"
          selectValue={searchParams.material}
          postQuery={`&id=${searchParams.id}&color=${searchParams.color}&pattern=${searchParams.pattern}&size=${searchParams.size}`}
        />
        <ListElObj
          data={data[0].patterns.fr}
          searchKey="pattern"
          title="Modèles"
          selectValue={searchParams.pattern}
          postQuery={`&id=${searchParams.id}&color=${searchParams.color}&material=${searchParams.material}&size=${searchParams.size}`}
        />
        {/* <ListElObj data={data[0].styles.fr} title="Styles"/> */}
        {/* <ListElObj data={data[0].fits.fr} title="Formes"/> */}
        {/* <ListElObj data={data[0].collars.fr} title="Cols"/> */}
      </div>
      <div className=" cursor-pointer fixed bottom-0 right-0 mr-12 mb-11 border-davys-gray border-2 py-4 px-3 rounded-[8px] bg-thistle font-font-titre text-xl text-alice-blue duration-200 hover:bg-davys-gray active:scale-105">Ajouter au panier</div>
    </section>
  );
}

export default page;
