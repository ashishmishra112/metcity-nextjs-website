"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Features() {
    
    return (
        <>
          <div className="bg-[#f4f1e8] flex flex-col lg:flex lg:flex-row gap-8 md:gap-3 justify-center items-center h-190 lg:h-150">
            <div className="flex flex-col lg:w-1/2 gap-4 lg:gap-8">   
            <div className="flex flex-col text-center gap-4 lg:gap-0">
              <h2 className="text-green-600 text-xl md:text-lg lg:text-3xl font-semibold ">MET Habitat - Premium Villa Living</h2>
              <p className="lg:text-left text-xs md:text-xs lg:text-sm px-8 lg:px-0 lg:pl-35 font-semibold">
                The residential masterplan at MET City includes a wide range of housing options to accommodate 
                diverse needs and budgets. With housing solutions across various affordability levels, MET City 
                ensures that people from all walks of life from skilled professionals to senior executives can live, 
                work, and grow in the same vibrant urban community.
              </p>
            </div>

              <div className="flex flex-col justify-center items-center">
                <div className="flex md:flex-row gap-2 md:gap-2 lg:gap-8 px-6 lg:px-0">
                <p className="border bg-green-600 py-2 px-6 md:p-1 md:px-0 lg:p-2 lg:px-3 lg:pr-5 text-center"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-1 md:p-1">01</span> <span className="text-white text-center text-xs md:text-xs leading-0">Gated community with 24x7 <br className="block md:hidden lg:block"/> security</span></p>
                <p className="border bg-green-600 py-2 px-6 md:p-1 md:px-1.5 lg:p-2 lg:px-3 lg:pr-12 text-center"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-1 md:p-1 ">02</span> <span className="text-white text-center text-xs md:text-xs leading-0">IGBC Gold-rated green <br className="block md:hidden lg:block"/> township.</span></p>
                </div>
              </div>
          
              <div className="flex flex-col justify-center items-center">
                <div className="flex md:flex-row gap-2 md:gap-2 lg:gap-8 px-6 lg:px-0">
                <p className="border bg-green-600 py-2 px-5 md:p-1 lg:p-2 lg:px-3 lg:pr-2.5 text-center"><span className="border rounded-xl bg-white  text-green-600 text-xs md:text-sm p-1 md:p-1">03</span> <span className="text-white text-center text-xs md:text-xs leading-0">Central green plaza & jogging <br className="block md:hidden lg:block"/> track</span></p>
                <p className="border bg-green-600 py-2 px-5 md:p-0 lg:p-2 lg:px-3 lg:pr-5.5 text-center"><span className="border rounded-xl bg-white  text-green-600 text-xs md:text-sm p-1 md:p-1">04</span> <span className="text-white text-center text-xs md:text-xs leading-0">Clubhouse, swimming pool, <br className="block md:hidden lg:block"/> and gym</span></p>
                </div>
              </div>
          
              <div className="flex flex-col justify-center items-center">
                <div className="flex md:flex-row gap-2 md:gap-2 lg:gap-8 px-6 lg:px-0">
                <p className="border bg-green-600 py-5 px-6 md:p-1 md:px-7 lg:p-2 lg:px-3 lg:pr-5 text-center"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-1 md:p-1">05</span> <span className="text-white text-center text-xs md:text-xs leading-none">Solar-enabled infrastructure</span></p>
                <p className="border bg-green-600 py-2 px-5 md:p-1 md:px-0 lg:p-2 lg:px-3 lg:pr-3 text-center"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-1 md:p-1">06</span> <span className="text-white text-center text-xs md:text-xs leading-0">Proximity to commercial hubs <br className="block md:hidden lg:block"/> and workplaces</span></p>
                </div>
              </div>
            </div>
              <div className="flex lg:w-1/2 justify-center items-center">
                <Image src="/assets/met_economic.webp" alt="meteco" width={250} height={150} className="md:w-70 md:h-125 lg:w-120 lg:h-120" />
              </div>
            </div>
            
                    
            <div className=" bg-[url('/assets/bg.jpg')] bg-cover bg-center bg-no-repeat">           
            <div className="w-full h-80 lg:h-120 border-b-blue-900 flex flex-col justify-center lg:items-start gap-6 lg:pl-30">
              <div className="flex flex-col gap-2 md:gap-4">
                <h2 className="text-zinc-100 md:text-white text-center md:text-left text-base md:text-2xl lg:text-4xl font-bold">Walk-To-Work. LiveGreen. Stay Connected.</h2>
                <p className="text-zinc-100 md:text-white text-center md:text-left text-[10px] md:text-base lg:text-lg px-10 lg:px-0 lg:pr-130 ">
                  Our residential townships are being strategically developed around the concept of "walk to work", minimizing 
                  commute times and enhancing quality of life. With integrated transport, healthcare, education, and 
                  recreational facilities, residents enjoy the full benefits of a connected smart city.
                </p>
                <p className="text-zinc-100 md:text-white text-center md:text-left text-xs md:text-base lg:text-lg lg:pl-10">
                 <span>Smart infrastructure and sustainable planning</span>  <br />
                 <span> Options for every lifestyle and income group </span> <br />  
                 <span>  Strategic location with excellent connectivity </span>  <br />
                 <span>  Community-centric design with abundant green spaces </span> <br />
                </p>
              </div>

              <div className="flex justify-center md:pl-12 lg:pl-2">
                <button className="bg-green-600 rounded-4xl text-white py-2 px-6 md:py-4 md:px-10">Know More</button>
              </div>
            </div>
            </div>  
        </>
    );
} 