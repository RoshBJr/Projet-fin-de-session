import ListElArr from "@/app/components/server/singleProduit/ListElArr";
import ListElObj from "@/app/components/server/singleProduit/listElObj";
import { decryptForSanity, updateSanityUser } from "@/code/actions";
import { client } from "@/code/sanityClient";
import { cartSpecs, product } from "@/code/types";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function page({
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
  }`,undefined, {cache: 'force-cache'});

  return data ? (
    <section className="min-[320px]:flex-col xl:flex-row _single bg-alice-blue flex justify-start xl:gap-28 w-full mt-[80px] xl:overflow-hidden min-[320px]:h-auto xl:max-h-[calc(100vh-80px)]">
      <img
        className="object-top object-cover min-[320px]:w-full min-[320px]:h-[70vh] xl:w-auto xl:h-[calc(100vh-80px)]"
        src={data[0].defaultImg}
        alt={en ? data[0].name.en : data[0].name.fr}
      />
      <div className="pt-16 pb-8 flex flex-col gap-8 overflow-y-scroll flex-1 min-[320px]:px-3 md:px-8">
        <h2 className="font-font-titre min-[320px]:text-3xl md:text-5xl xl:text-6xl text-davys-gray xl:max-w-[90%]">
          {en ? data[0].name.en : data[0].name.fr}
        </h2>
        <div className="flex gap-3">
          <div className="border rounded-full py-1 px-4 border-thistle font-font-titre min-[320px]:text-xl md:text-2xl text-davys-gray">
            {en ? data[0].gender.en : data[0].gender.fr}
          </div>
          <div className="border rounded-full py-1 px-4 border-thistle font-font-titre min-[320px]:text-xl md:text-2xl text-davys-gray">
            {en ? data[0].category.en : data[0].category.fr}
          </div>
        </div>
        <div className="font-font-titre min-[320px]:text-3xl md:text-4xl lg:text-5xl text-davys-gray">
          ${data[0].price}
        </div>
        <p className="font-font-text text-davys-gray min-[320px]:text-xl md:text-2xl xl:w-[90%]">
          {en ? data[0].description.en : data[0].description.fr}
        </p>
        <ListElArr
          data={data[0].sizes}
          searchKey="size"
          title={en ? "Sizes" : "Tailles"}
          selectValue={searchParams.size}
          postQuery={`&id=${searchParams.id}&color=${searchParams.color}&material=${searchParams.material}&pattern=${searchParams.pattern}`}
        />
        <ListElObj
          data={en ? data[0].colors.en : data[0].colors.fr}
          searchKey="color"
          title={en ? "Colors" : "Couleurs"}
          selectValue={searchParams.color}
          postQuery={`&id=${searchParams.id}&pattern=${searchParams.pattern}&material=${searchParams.material}&size=${searchParams.size}`}
        />
        <ListElObj
          data={en ? data[0].materials.en : data[0].materials.fr}
          searchKey="material"
          title={en ? "Materials" : "Matériels"}
          selectValue={searchParams.material}
          postQuery={`&id=${searchParams.id}&color=${searchParams.color}&pattern=${searchParams.pattern}&size=${searchParams.size}`}
        />
        <ListElObj
          data={en ? data[0].patterns.en : data[0].patterns.fr}
          searchKey="pattern"
          title={en ? "Patterns" : "Modèles"}
          selectValue={searchParams.pattern}
          postQuery={`&id=${searchParams.id}&color=${searchParams.color}&material=${searchParams.material}&size=${searchParams.size}`}
        />
        {/* <ListElObj data={data[0].styles.fr} title="Styles"/> */}
        {/* <ListElObj data={data[0].fits.fr} title="Formes"/> */}
        {/* <ListElObj data={data[0].collars.fr} title="Cols"/> */}
      </div>
      <form className="min-[320px]:px-8 xl:px-0 min-[320px]:mb-16 xl-my-0" action={addToCart}>
        <button
          type="submit"
          className=" cursor-pointer xl:fixed xl:bottom-0 xl:right-0 xl:mr-12 xl:mb-11 border-davys-gray border-2 py-4 px-3 rounded-[8px] bg-thistle font-font-titre text-xl text-alice-blue duration-200 hover:bg-davys-gray active:scale-105 min-[320px]:w-full xl:w-auto"
        >
          {en ? "Add to cart" : "Ajouter au panier"}
        </button>
      </form>
    </section>
  ) : (
    ""
  );

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

export default page;
