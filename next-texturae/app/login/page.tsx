import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/code/actions";
import Link from "next/link";
import { cookies } from "next/headers";

/** 
 * composant de la page se connecter
*/

export default async function Page() {
  const session = await getSession();
  const lang = cookies().get("lang")?.value;
  const name = cookies().get('user')?.value;

  return (
    <section className="lg:pt-[80px] min-[320px]:pt-[120px] flex-grow bg-primary flex justify-center items-center min-h-96">
      {session ? (
        <div className="font-font-titre text-neutral flex flex-col justify-center items-center gap-6 min-h-96">
          <h2 className="min-[320px]:text-2xl md:text-4xl lg:text-5xl" >{lang ? `Hello ${name}`: `Bonjour ${name}`}</h2>
          <h3 className="min-[320px]:text-xl md:text-3xl lg:text-4xl" >{lang ? "You are connected": "Vous êtes connecté(e)"}</h3>
          <form
            action={async () => {
              "use server";
              await logout();
              redirect('/login');
            }}
          >
            <button className="border border-davys-gray px-2 py-2 rounded-[8px] bg-thistle font-font-titre text-alice-blue lg:text-2xl xl:hover:bg-davys-gray duration-200 active:scale-x-105 active:bg-davys-gray min-[320px]:text-lg md:text-xl" type="submit">{lang ? "Logout": "Se Déconnecter"}</button>
          </form>
        </div>
      ) : (
        <div className="font-font-titre text-alice-blue relative border-2 border-davys-gray w-auto h-auto rounded-[8px] py-7  pb-0 flex flex-col justify-between min-[320px]:items-center xl:items-start bg-paynes-gray min-[320px]:mb-10 min-[320px]:w-[80%] lg:w-[50%] xl:w-[30%]">
          <form
            className="flex flex-col px-7 pb-7 w-full"
            action={async (formData) => {
              "use server";
              await login(formData);
              redirect('/login');
            }}
          >
            <h2 className="min-[320px]:text-2xl inline-flex justify-center md:text-3xl mb-2" >{lang ? "Connection" : "Connexion"}</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h3>{lang ? "Email:" : "Courriel:"}</h3>
                <input
                  className="bg-alice-blue focus:text-alice-blue focus:bg-davys-gray pl-2 border border-thistle rounded-sm  min-[320px]:w-full h-10 text-davys-gray"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div>
                <h3>{lang ? "Password:": "Mot de passe:"}</h3>
                <input
                  className="bg-alice-blue focus:text-alice-blue focus:bg-davys-gray min-[320px]:w-full pl-2 border border-thistle rounded-sm  h-10 text-davys-gray"
                  type="password"
                  name="password"
                  required
                />
              </div>
            </div>
            <br />
            <button className="border border-davys-gray px-2 py-2 rounded-[8px] bg-thistle font-font-titre text-alice-blue text-xl xl:hover:bg-davys-gray duration-200 active:scale-x-105 active:bg-davys-gray" type="submit">{lang ? "Login" : "Se Connecter"}</button>
          </form>
          <Link className=" pl-2 pb-2 xl:hover:text-thistle duration-200" href="/signin">{lang ? "Sign In" : "Créer un compte"}</Link>
        </div>
      )}
    </section>
  );
}
