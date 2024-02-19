import Link from "next/link";

async function getUserData(id:number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.json();
}

export async function generateMetadata({params}:Params) {
  const metaData:User = await getUserData(params.id);

  return {
    title: metaData.name,
  }
}

export default async function Page({params}:Params) {
  const data:User = await getUserData(params.id);
  
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1321277096/fr/vectoriel/%C3%A9quipe-commerciale-illustration-graphique.jpg?s=612x612&w=0&k=20&c=1yHcAi3K4rWDGHCfquok2xzQg-K6_rRvN9hxF_d6Y2E='}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{data.name}</h1>
      <h2 className="mb-5 text-2xl font-bold">Nom d'utilisateur: {data.username}</h2>
      <h2 className="mb-5 text-2xl font-bold">Courriel: {data.email}</h2>
      <h2 className="mb-5 text-2xl font-bold">Compagnie: {data.company.name}</h2>
      <p className="mb-5">{data.company.catchPhrase}</p>
      <Link className="btn btn-primary" href='/users'>Retour</Link>
    </div>
  </div>
</div>
  )
}