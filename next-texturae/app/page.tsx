import Hero from "./components/server/Hero";

/** 
 * composant page d'accueil
*/

export default async function Home() {
  return (
    <main className="pt-[80px] bg-platinum">
      <Hero/>
    </main>
  );
}