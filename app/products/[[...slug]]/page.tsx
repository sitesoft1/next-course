import React from 'react'

interface Props {
    params: {
        slug: string[]
    };
    searchParams: {
      sortOrder: string
    }
}

const ProductPage = async (
  // { params:{slug}, searchParams:{ sortOrder } }:Props
  {
    params,
    searchParams,
  }: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [sortOrder: string]: string | string[] | undefined }>
  }

) => {
  const slug = (await params).slug
  const sortOrder = (await searchParams).sortOrder
  return (
    <div>ProductPage {slug}, {sortOrder}</div>
  )
}

export default ProductPage