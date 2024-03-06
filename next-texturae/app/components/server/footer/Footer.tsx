import Link from "next/link";
import InstagramIcon from "../../icons/InstagramIcon";
import TikTokIcon from "../../icons/TikTokIcon";
import FacebookIcon from "../../icons/FacebookIcon";

const Footer = () => {
  return (
    <footer className="min-h-[200px] bg-paynes-gray text-alice-blue flex flex-col font-font-titre h-auto">
      <div className="min-[320px]:flex-col flex 2xl:flex-row flex-grow border-b-2  border-alice-blue">
        <Link href="/" className="lg:text-9xl md:text-8xl min-[320px]:pl-3 2xl:w-3/5 min-[320px]:w-full min-[320px]:text-7xl 2xl:border-r-2 inline-flex 2xl:justify-center min-[320px]:justify-start min-[320px]:items-center 2xl:items-center text-9xl min-[320px]:border-b-2 min-[320px]:py-3 2xl:border-b-0">Texturae</Link>
        <div className="flex flex-col gap-2 justify-end pl-3 py-3 lg:text-2xl text-xl">
          <Link className="w-fit" href="/">Accueil</Link>
          <Link className="w-fit" href="/Feed?&tri=name-asc">Toutes les collections</Link>
          <Link className="w-fit" href="/homme?&tri=name-asc">Homme</Link>
          <Link className="w-fit" href="/femme?&tri=name-asc">Femme</Link>
        </div>
      </div>
      <div className="2xl:flex-row flex min-[320px]:flex-col-reverse">
        <p className="lg:text-lg md:text-base min-[320px]:text-sm min-[320px]:justify-start min-[320px]:pl-3 min-[320px]:w-full min-[320px]:border-t-2 min-[320px]:py-3 2xl:w-3/5 2xl:border-r-2 border-alice-blue inline-flex 2xl:justify-center items-center 2xl:border-t-0">Tous droits réservé &#169; 2024 Roshan Jr Bussun.</p>
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
          <h3 className="text-xl lg:text-2xl">Nous Contacter</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
