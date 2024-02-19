import React from 'react'
import ReadMore from './ReadMore';

interface Props {
    id:number;
    name:string;
    email:string;
    username:string;
    website:string;
    company:{name:string, catchPhrase:string};
}

const CardBadge = ({id, name, email, username, website, company}:Props) => {

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://media.istockphoto.com/id/1321277096/fr/vectoriel/%C3%A9quipe-commerciale-illustration-graphique.jpg?s=612x612&w=0&k=20&c=1yHcAi3K4rWDGHCfquok2xzQg-K6_rRvN9hxF_d6Y2E=" alt="employee" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {username}
      {/* <div className="badge badge-secondary">NEW</div> */}
    </h2>
    <h3>{name}</h3>
    <p>{company.catchPhrase}</p>
    <ReadMore id={id}/>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{company.name}</div>
      <div className="badge badge-outline">Employé(e)</div>
    </div>
  </div>
</div>
  )
}

export default CardBadge