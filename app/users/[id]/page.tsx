import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: {
        id: number;
    }
}

const UserDetailPage = async (
  // {params: {id}}: Props
  {
    params,
  }: {
    params: Promise<{ id: number }>
  }
) => {
  const id = (await params).id
  if(id > 10) notFound();
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage