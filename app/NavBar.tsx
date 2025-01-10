'use client';

import React from 'react';
import Link from 'next/link'
import { useSession } from 'next-auth/react';

const NavBar = () => {

  const {status, data: session} = useSession();

  // if(status === 'loading') return null;

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href="/" className='mr-5'>Next.js</Link>
        <Link href="/users">Users</Link>
        <Link href="/local-images">Local Images</Link>
        <Link href="/remote-images">Remote Images</Link>
        <Link href="/test-page">Test page</Link>
        { status === 'loading' && <div>Loading...</div>}
        { status === 'authenticated' && <div>
            {session.user!.name}
            <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
          </div>}
        { status === 'unauthenticated' && <Link href="/api/auth/signin">Login</Link>}
    </div>
  )
}

export default NavBar