import React from 'react';
import { sort } from 'fast-sort';
import Link from 'next/link';

interface Props {
  sortOrder: string
}

interface User {
    id: number;
    name: string;
    email: string;
  }

const UserTable = async ({sortOrder}:Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        cache:'no-store'
    });
    const users: User[] = await res.json();

    const sortedUsers = sortOrder == 'email' ? sort(users).asc(u => u.email) : sort(users).asc(u => u.name);
    
  return (
    <>
      <table className='table table-bordered'>
          <thead>
            <tr>
              <th>
                <Link href="/users?sortOrder=name">Name</Link>
              </th>
              <th>
                <Link href="/users?sortOrder=email">Email</Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUsers.map(user => <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>)}
          </tbody>
      </table>
    </>
  )
}

export default UserTable