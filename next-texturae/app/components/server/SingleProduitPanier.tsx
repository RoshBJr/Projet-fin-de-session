import { deleteProduct } from '@/code/actionDeleteFromCart';
import { quantMinus, quantPlus } from '@/code/actionModifyQuantCart';
import { product } from '@/code/types';
import { redirect } from 'next/navigation';

/** 
 * composant d'un produit dans le panier
*/

interface Props {
    item:product; 
    lang:"en" | "fr";
    cookieCart:string|undefined;
    idArr:string[];
}

export default function SingleProduitPanier({item, lang, cookieCart, idArr}:Props) {
    return (
        <div
          className="2xl:pl-5 flex min-[320px]:flex-col 2xl:flex-row gap-5 min-[320px]:items-center 2xl:items-start 2xl:py-5 relative border-2 border-thistle rounded-[8px] justify-start"
        >
          <form
            className="absolute top-0 right-0 pr-5 pt-5"
            action={async () => {
              "use server";
              await deleteProduct(item._id);
              redirect('/panier');
            }}
          >
            <button
              type="submit"
              className="py-2 px-5 border-2 border-thistle rounded-[8px] hover:bg-neutral text-secondary hover:text-base-100 hover:border-davys-gray duration-200"
            >
              X
            </button>
          </form>
          <img
            className="2xl:w-80 min-[320px]:w-full h-auto rounded-[8px] 2xl:border border-thistle"
            src={item.defaultImg}
            alt={item.name[lang]}
          />
          <div className="min-[320px]:px-4 min-[320px]:mb-5 2xl:ml-0 flex min-[320px]:flex-col gap-2 min-[320px]:w-full xl:text-3xl text-neutral">
            <h2 className="min-[320px]:text-2xl md:text-3xl xl:text-4xl">{item.name[lang]}</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <span className="min-[320px]:text-xl md:text-2xl xl:text-3xl" >{lang == "en" ? "Color" : "Couleur"}:</span>
                <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle  min-[320px]:text-md md:text-lg xl:text-xl">
                  {cookieCart &&
                    item.colors[lang][
                      JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                        .color
                    ]}
                </span>
              </div>
              <span className={`${cookieCart && item.sizes ? 'flex' : 'hidden'}`}>
                {cookieCart && item.sizes ? (
                  <div className="flex gap-2 items-center">
                    <span className="min-[320px]:text-xl md:text-2xl xl:text-3xl" >{lang == "en" ? "Size" : "Taille"}:</span>
                    <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle min-[320px]:text-md md:text-lg xl:text-xl">
                      {
                        item.sizes[
                          JSON.parse(cookieCart)[
                            idArr.indexOf(item._id)
                          ].size
                        ]
                      }
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </span>
              {cookieCart && item.patterns[lang] ? (
                <div className="flex gap-2 items-center">
                  <span className="min-[320px]:text-xl md:text-2xl xl:text-3xl">{lang == "en" ? "Pattern" : "Modèle"}:</span>
                  <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle min-[320px]:text-md md:text-lg xl:text-xl">
                    {item.patterns[lang]
                      ? item.patterns[lang][
                          JSON.parse(cookieCart)[
                            idArr.indexOf(item._id)
                          ].pattern
                        ]
                      : ""}
                  </span>
                </div>
              ) : (
                ""
              )}
              {cookieCart &&
              JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                .material !== "undefined" ? (
                <div className="flex gap-2 items-center">
                  <span className="min-[320px]:text-xl md:text-2xl xl:text-3xl" >{lang == "en" ? "Material" : "Matériel"}:</span>
                  <span className="border-2 rounded-[8px] border-davys-gray px-3 py-1 text-alice-blue bg-thistle min-[320px]:text-md md:text-lg xl:text-xl">
                    {item.materials[lang]
                      ? item.materials[lang][
                          JSON.parse(cookieCart)[
                            idArr.indexOf(item._id)
                          ].material
                        ]
                      : ""}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <span className="min-[320px]:flex md:text-3xl min-[320px]:text-2xl xl:hidden">
              ${item.price}
            </span>
            <div className="flex gap-1 items-center">
              <form
                className="flex justify-center items-center"
                action={async () => {
                  "use server";
                  await quantMinus(item._id);
                  redirect('/panier');
                }}
              >
                <button
                  type="submit"
                  className="border rounded-[8px] border-davys-gray bg-thistle text-neutral hover:text-base-100 px-4 py-[2px] xl:hover:bg-neutral duration-200 min-[320px]:text-xl md:text-2xl xl:text-3xl"
                >
                  -
                </button>
              </form>
              <span className="border rounded-[8px] border-thistle bg-alice-blue text-davys-gray px-4 py-1 min-[320px]:text-xl md:text-2xl xl:text-3xl">
                {cookieCart !== undefined
                  ? JSON.parse(cookieCart)[idArr.indexOf(item._id)]
                      .quantity
                  : ""}
              </span>
              <form
                className="flex justify-center items-center"
                action={async () => {
                  "use server";
                  await quantPlus(item._id);
                  redirect('/panier');
                }}
              >
                <button
                  type="submit"
                  className="border rounded-[8px] border-davys-gray bg-thistle text-neutral hover:text-base-100 px-4 py-[2px] xl:hover:bg-neutral duration-200 min-[320px]:text-xl md:text-2xl xl:text-3xl"
                >
                  +
                </button>
              </form>
            </div>
            <span className="min-[320px]:hidden xl:flex">
              ${item.price}
            </span>
          </div>
        </div>
      );
}