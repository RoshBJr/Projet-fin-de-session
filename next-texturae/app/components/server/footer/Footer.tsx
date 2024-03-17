import Link from "next/link";
import InstagramIcon from "../../icons/InstagramIcon";
import TikTokIcon from "../../icons/TikTokIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import { cookies } from "next/headers";

/**
 * composant pied de page
 */

const Footer = () => {
  const lang:string = cookies().get("lang")?.value ? "en" : "fr";

  return (
    <footer className="min-h-[200px] bg-paynes-gray text-alice-blue flex flex-col font-font-titre h-auto">
      <div className="min-[320px]:flex-col flex 2xl:flex-row flex-grow border-b-2  border-alice-blue">
        <div
          
          className="_footer-logo lg:text-9xl md:text-8xl min-[320px]:pl-3 2xl:w-3/5 min-[320px]:w-full min-[320px]:text-7xl 2xl:border-r-2 inline-flex 2xl:justify-center min-[320px]:justify-start min-[320px]:items-center 2xl:items-center text-9xl min-[320px]:border-b-2 min-[320px]:py-3 2xl:border-b-0"
        >
          <Link href="/">Texturae</Link>
        </div>
        <div className="flex flex-col gap-2 justify-end pl-3 py-3 lg:text-2xl text-xl">
          <Link className="w-fit relative overflow-hidden" href="/">
            {lang == "en" ? "Home" : "Accueil"}
          </Link>
          <Link className="w-fit relative overflow-hidden" href="/Feed?&tri=name-asc">
            {lang == "en" ? "All collections" : "Toutes les collections"}
          </Link>
          <Link className="w-fit relative overflow-hidden" href="/homme?&tri=name-asc">
            {lang == "en" ? "Man" : "Homme"}
          </Link>
          <Link className="w-fit relative overflow-hidden" href="/femme?&tri=name-asc">
            {lang == "en" ? "Woman" : "Femme"}
          </Link>
        </div>
      </div>
      <div className="2xl:flex-row flex min-[320px]:flex-col-reverse">
        <p className="lg:text-lg md:text-base min-[320px]:text-sm min-[320px]:justify-start min-[320px]:pl-3 min-[320px]:w-full min-[320px]:border-t-2 min-[320px]:py-3 2xl:w-3/5 2xl:border-r-2 border-alice-blue inline-flex 2xl:justify-center items-center 2xl:border-t-0">
          {
            lang == "en" ?
            `All rights reserved © 2024 Roshan Jr Bussun.`
            :
            `Tous droits réservé © 2024 Roshan Jr Bussun.`
          }
        </p>
        <div className="flex gap-3 items-center pl-3 py-3">
          <div className="border border-alice-blue rounded-full p-2">
            <InstagramIcon />
          </div>
          <div className="border border-alice-blue rounded-full p-2">
            <TikTokIcon />
          </div>
          <div className="border border-alice-blue rounded-full p-2">
            <FacebookIcon />
          </div>
          <h3 className="text-xl lg:text-2xl">{lang == "en" ? "Contact Us": "Nous Contacter"}</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
