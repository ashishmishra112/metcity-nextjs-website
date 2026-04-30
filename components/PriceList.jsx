"use client";
import { useEffect, useState } from "react";

export default function PriceList() {
    
    return (
        <>
            <div className="bg-[#090a06] relative flex flex-col justify-center items-center h-80 lg:h-140">  
              <div className="fixed md:left-0 md:top-90 flex flex-row font-jacques">
               <button className="border-none rounded-lg md:rounded-t-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-6 font-bold"> &ordm; Query Now</button>
              </div>
              <div className="flex">
                <h2 className="text-[#ffffff] text-base md:text-xl lg:text-3xl">Price List</h2>  
              </div>
              
              <div className="flex flex-row gap-2 md:gap-2 lg:gap-10">
                <fieldset className="bg-[#f4f1e8] rounded-2xl p-4 md:p-8.5 md:py-12 md:py-lg lg:px-13 lg:py-20">
                  <legend className=" bg-white text-center py-1.5 px-0.5 md:py-3 md:px-1"> <span className="border bg-green-600 text-white py-1 px-2 md:py-1 md:px-3 text-base md:text-3xl">01</span></legend>
                  <p className="border-b w-full md:w-48 text-center text-xs md:text-lg lg:text-lg font-bold tracking-wide">&#8377; 15k Per Square <br /> Meter.</p>
                  <p className="text-left text-xs md:text-base py-2 md:py-4">Typology: Industrial Plot</p>
                  <p>Area:</p>
                  <div className="flex justify-center pt-4">
                    <button className="bg-green-600 rounded-4xl text-xs md:text-base text-white py-2 px-5 md:py-3 md:px-7 lg:px-8">Know More</button>
                  </div>
                </fieldset>
                <fieldset className="bg-[#f4f1e8] rounded-2xl p-4 md:p-8.5 md:py-12 md:py-lg lg:px-13 lg:py-20">
                  <legend className=" bg-white text-center py-1.5 px-0.5 md:py-3 md:px-1 "> <span className="border bg-green-600 text-white py-1 px-2 md:py-1 md:px-3 text-base md:text-3xl">02</span></legend>
                  <p className="border-b w-full md:w-48 text-center text-xs md:text-lg lg:text-lg font-bold tracking-wide">&#8377; 99,000 Per Square <br /> Yard</p>
                  <p className="text-left text-xs md:text-base py-2 md:py-4">Typology: Residential </p>
                  <p>Area:</p>
                  <div className="flex justify-center pt-4">
                    <button className="bg-green-600 rounded-4xl text-xs md:text-base text-white py-2 px-5 md:py-3 md:px-7 lg:px-8">Know More</button>
                  </div>
                </fieldset>
              </div>
            </div>
        </>
    );
} 