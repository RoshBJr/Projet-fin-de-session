import ListElArr from "@/app/components/server/singleProduit/ListElArr";
import ListElObj from "@/app/components/server/singleProduit/listElObj";
import { decryptForSanity, updateSanityUser } from "@/code/actions";
import { client } from "@/code/sanityClient";
import { cartSpecs, product } from "@/code/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
const getData = async (id:string) => {
  const data: [product] = await client.fetch(`*[_id == "${id}"] {
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
  return data;
}

export default async function single({
  searchParams,
}: {
  searchParams: {
    id: string;
    color: number;
    size: number;
    material: number;
    pattern: number;
  };
}) {
  const en = cookies().get("lang")?.value;

  // const data = await getData(searchParams.id);

  // 
  return <div className="mt-[120px]" ><h1>Allo</h1></div>

  async function addToCart() {
    'use server';
    let arr = [];
    let cart: string | undefined = cookies().get("cart")?.value;
    if (cart && searchParams.color) {
      let bool = true;
      arr = JSON.parse(cart);
      arr.map((item: cartSpecs) => {
        if (item.id == searchParams.id) {
          bool = false;
          item.quantity += 1;
          item.color = searchParams.color;
          item.size = searchParams.size;
          item.pattern = searchParams.pattern;
          item.material = searchParams.material;
        }
      });
      if (bool) {
        arr.push({
          id: searchParams.id,
          color: searchParams.color,
          size: searchParams.size,
          pattern: searchParams.pattern,
          material: searchParams.material,
          quantity: 1,
        });
      }
      cookies().set({name: "cart", value: JSON.stringify(arr), path: '/', httpOnly: true});
      if (cookies().get("session")) {
        await updateSanityUser(await decryptForSanity(cookies().get("session")?.value), JSON.stringify(arr));
      }
    } else {
      if(searchParams.color) {
        arr.push({
          id: searchParams.id,
          color: searchParams.color,
          size: searchParams.size,
          pattern: searchParams.pattern,
          material: searchParams.material,
          quantity: 1,
        });
        cookies().set({name: "cart", value: JSON.stringify(arr), path: '/', httpOnly:true});
        if (cookies().get("session")) {
          await updateSanityUser(await decryptForSanity(cookies().get("session")?.value), JSON.stringify(arr));
        }
      }
    }
    revalidatePath('/');
  }
}