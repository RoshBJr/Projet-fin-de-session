import Link from 'next/link'

export const Header = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10 top-0" >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
        <li><Link href='/'>Accueil</Link></li>
        <li><Link href='/users'>Utilisateurs</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    {<Link className="btn btn-ghost text-xl" href='/'>Tuto Router</Link>}
  </div>
  <div className="navbar-end">
  </div>
</div>
  )
}
