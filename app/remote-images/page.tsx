import React from 'react';
import Image from 'next/image';


const RemoteImages = () => {
  return (
    <div className="relative h-screen">
       <Image src="https://bit.ly/react-cover" 
       fill
       className="object-cover"
       sizes="100vw"
       quality={100}
       priority
       alt="Remote image example"  /> 
    </div>
  )
}

export default RemoteImages