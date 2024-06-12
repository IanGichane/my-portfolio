"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/WobbleCard";


const Photo = () => {
  return (
    <WobbleCard
    containerClassName="h-full bg-gray-200 min-h-[10px] lg:min-h-[100px] relative 
    shadow-2xl"
  
    >
    
    <Image 
      src='/ianphoto.jpg'
      alt="Picture of the author"
      layout="fill"
      objectFit="cover"
      className='z-50 select-none overflow-hidden rounded-lg'
      />
      
    </WobbleCard>
  )
}

export default Photo

// import Image from "next/image"


// const Photo = () => {
//     return (
//       <div className="w-full h-full flex justify-center items-center">




// <Image 
//       src='/ianphoto.jpg'
//       alt="Picture of the author"
//       width={1000}
//       height={1500}
//       objectFit="cover"
//       className= '  z-50 select-none overflow-hidden  rounded '
//     />
//       </div>
//     )
//   }

// export default Photo

{/* <WobbleCard
containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
className=""
>
<div className="max-w-xs">
  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
    Gippity AI powers the entire universe
  </h2>
  <p className="mt-4 text-left  text-base/6 text-neutral-200">
    With over 100,000 mothly active bot users, Gippity AI is the most
    popular AI platform for developers.
  </p>
</div>
<Image
  src="/linear.webp"
  width={500}
  height={500}
  alt="linear demo image"
  className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
/>
</WobbleCard> */}