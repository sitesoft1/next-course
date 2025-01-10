import React from 'react'

interface Props {
  params: {
    id: number;
    photoId: number;
  }
}

const PhotoPage = async (
  // {params:{id, photoId}}:Props
  {
    params,
  }: {
    params: Promise<{ id: number; photoId: number }>
  }
) => {
  const id = (await params).id
  const photoId = (await params).photoId
  return (
    <div>PhotoPage {id}, {photoId}</div>
  )
}

export default PhotoPage