import Hero from "./components/server/Hero";
import { cookies } from "next/headers";

export default async function Home() {
  return (
    <main className="pt-[80px] bg-platinum">
      <Hero/>
    </main>
  );
}