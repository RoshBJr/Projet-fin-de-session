import { client } from "@/code/sanityClient";
import { product } from "@/code/types";
import Image from "next/image";

async function page({ searchParams }: { searchParams: { id: string } }) {
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
    defaultImg,
    materials,
    image[]{ "imgUrl": asset->url }
  }`);

  return (
    !data ?
    <div className="mt-[120px]">
      <h1>Loading</h1>
    </div>
    :
    <section className="flex  justify-center w-full mt-[120px]">
      <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="h-[300px] relative">
            <Image
              className="absolute top-0 left-0 right-0"
              src={data[0].defaultImg}
              alt={data[0].name.fr}
              width={800}
              height={800}
              priority={true}
            />
          </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data[0].name.fr}
            <div className="badge bg-blue-300">{data[0].gender.fr}</div>
          </h2>
          <p>{data[0].description.fr}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{data[0].category.fr}</div>
            <div className="badge badge-outline">${data[0].price}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
