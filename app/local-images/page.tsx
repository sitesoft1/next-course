import React from 'react';
import Image from "next/image";
import radblack from '@/public/images/rad-black.png';

const LocalImage = () => {
  return (
    <>
    <div>
        <Image src={radblack} alt="Local image example" />
    </div>
        
    </>
  )
}

export default LocalImage