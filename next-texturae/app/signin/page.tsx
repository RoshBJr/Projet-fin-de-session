import { login, logout, signIn } from "@/code/actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default function SignIn() {
  const lang = cookies().get("lang")?.value;

  return (
    <div className="min-[320px]:mt-[120px] flex-grow flex justify-center items-center min-h-96">
      <form
        className="xl:gap-4 font-font-titre text-alice-blue relative border-2 border-davys-gray w-auto h-auto rounded-[8px] py-7 flex flex-col justify-between min-[320px]:items-center xl:items-start bg-paynes-gray  min-[320px]:w-[80%] min-[320px]:mb-10 lg:w-[50%] xl:w-[30%] px-4 pb-4 min-[320px]:gap-2"
        action={async (formData) => {
          "use server";
          await signIn(formData);
          redirect("/login");
        }}
      >
        <h2 className="min-[320px]:text-2xl self-center md:text-3xl mb-2" >{lang ? "Sign In": "S'inscrire"}</h2>
        <div className="w-full">
          <h3 className="" >{lang ? "Username:" : "Nom d'utilisateur:"}</h3>
          <input className="bg-alice-blue focus:text-alice-blue focus:bg-davys-gray min-[320px]:w-full pl-2 border border-thistle rounded-sm  h-10 text-davys-gray" type="text" required name="username"/>
        </div>
        <div className="w-full">
          <h3>{lang ? "Email:" : "Courriel:"}</h3>
          <input className="bg-alice-blue focus:text-alice-blue focus:bg-davys-gray min-[320px]:w-full pl-2 border border-thistle rounded-sm  h-10 text-davys-gray" type="email" required name="email"/>
        </div>
        <div className="w-full">
          <h3>{lang ? "Password:" : "Mot de passe:"}</h3>
          <input className="bg-alice-blue focus:text-alice-blue focus:bg-davys-gray min-[320px]:w-full pl-2 border border-thistle rounded-sm  h-10 text-davys-gray" type="password" required name="password" />
        </div>
        <button className="min-[320px]:mt-2 border border-davys-gray px-2 py-2 rounded-[8px] bg-thistle font-font-titre text-alice-blue lg:text-2xl xl:hover:bg-davys-gray duration-200 active:scale-x-105 active:bg-davys-gray min-[320px]:text-lg md:text-xl w-full" type="submit">
          {lang ? "Create User" : "Créer Utilisateur"}
        </button>
        
      </form>
    </div>
  );
}
