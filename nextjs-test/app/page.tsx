import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="text-white flex flex-col items-center">
      <p>Bonjour et Bienvenue</p>
      <span>Je suis Bob</span>
      <Posts/>
    </main>
  );
}
