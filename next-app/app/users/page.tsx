import React from 'react'
import CardBadge from '../components/CardBadge/CardBadge';

interface User {
  id: number;
  name: string;
  email:string;
  username:string;
  website:string;
  company:{name:string, catchPhrase:string};
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[] = await response.json();

  return (
    <div className='rounded-md p-2'>
      <h1>Users</h1>
      <div className='flex gap-5 flex-wrap justify-center'>
        {
          users.map(user => (
            <CardBadge
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              website={user.website}
              company={user.company}
            />
          ))
        }
      </div>
    </div>
  )
}

export default UsersPage