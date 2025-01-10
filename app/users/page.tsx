import React, { Suspense } from 'react';
import UserTable from './UserTable'; 
import Link from "next/link";

interface Props {
  searchParams: {
    sortOrder: string
  }
}

const UsersPage = async (
  // { searchParams:{sortOrder} }:Props
  {
    searchParams,
  }: {
    searchParams: Promise<{ [sortOrder: string]: string }>
  }
) => {
  const sortOrder = (await searchParams).sortOrder
  return (
    <>
      <h1>Users:</h1>
      <Link href="/users/new" className='btn'>New User</Link>
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  )
}

export default UsersPage