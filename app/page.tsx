import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
// import { authOptions } from './api/auth/[...nextauth]/route'
import { authOptions } from './api/auth/authOptions'
import { Metadata } from 'next'

export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1 className="font-poppins">Hellow {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  )
}

export const metadata: Metadata = {
  title:'Default page title',
  description:'Default page description'
}
