"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallery() {
    
    return (
        <>
          <div className="bg-[#f5f2e9] flex flex-col gap-6 justify-center items-center h-250 lg:h-150"> 
              <div className="flex flex-row font-jacques">
               <h2 className="text-green-600 text-2xl md:text-2xl lg:text-3xl font-bold">Our Gallery</h2>
              </div>
              <div className="flex flex-col md:flex-row font-jacques gap-4 md:gap-6">
                <Image src="/assets/greenfield-city.jpg" alt="greenfield-city" width={140} height={100} className="w-60 md:w-40 md:h-50 lg:w-80 lg:h-50" />
                <Image src="/assets/metropolis.jpg" alt="metropolis" width={140} height={100} className="w-60 md:w-40 md:h-50 lg:w-80 lg:h-50" />
                <Image src="/assets/met-habitat.webp" alt="met-habitat" width={140} height={100} className="w-60 h-30 md:w-40 md:h-50 lg:w-80 lg:h-50" />
              </div>

              <div className="flex flex-col md:flex-row font-jacques gap-4 md:gap-6">
                <Image src="/assets/new-city.webp" alt="new-city" width={140} height={100} className="w-60 md:w-40 md:h-50 lg:w-80 lg:h-50" />
                <Image src="/assets/metropolis-city.jpg" alt="metropolis-city" width={140} height={100} className="w-60 md:w-40 md:h-50 lg:w-80 lg:h-50" />
                <Image src="/assets/met-bg.jpg" alt="met-bg" width={140} height={100} className="w-60 md:w-40 md:h-50 lg:w-80 lg:h-50" />
              </div>
          </div>
        </>
    );
} 