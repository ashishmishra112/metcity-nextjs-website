"use client";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function About() {
    
    return (
        <>
            <div className="flex flex-col lg:flex lg:flex-row bg-[#f4f1e8] gap-6 md:gap-1 lg:gap-2 justify-center items-center h-190 lg:h-140">
            <div className="lg:w-1/2 flex justify-center items-center"> 
            <div className="min-h-75 md:min-h-[400px] lg:min-h-112.5 lg:w-100 bg-white bg-[url('/assets/met.jpg'),url('/assets/metcity-bg.webp')] bg-[length:30%_20%,100%_50%] bg-[position:top,bottom] bg-no-repeat"> 
              <div className="flex flex-col items-center md:items-center text-black py-14 px-0 md:py-20 md:px-0 gap-1 md:gap-0 font-jacques lg:py-20 "> 
                <h2 className="text-[10px] px-2  lg:px-10 text-zinc-500">WALK TO WORK LIFESTYLE. SMART CITY DEVELOPMENT.</h2>
                <h2 className="text-xs md:text-base lg:text-xl tracking-wider">RESIDENTIAL & INDUSTRIAL </h2> 
                <h2 className="text-xs md:text-base lg:text-xl font-bold">PLOTTED TOWNSHIP</h2> 
                <h2 className="border border-[#d8dfd1] text-xs md:text-base lg:text-xl font-semibold tracking-widest lg:px-2">STARTING &#8377;34 LACS*</h2>              
              </div>
            </div>
            </div>

              <div className="flex flex-col items-center md:items-start gap-2 md:gap-2 lg:w-1/2">
                <h2 className="text-green-600 text-sm md:text-sm lg:text-3xl">Reliance Industrial Plots/ Reliance MET In NCR <br className="hidden md:block"/> Highlights</h2>
                <p className="text-[10px] lg:text-base px-6 text-center md:px-0 md:pr-4 lg:pr-18 md:text-left">
                  Reliance Industrial Plots in Delhi NCR, popularly known as Reliance MET City, is a large-
                  scale industrial township spread across 8,250 acres (3,340 hectares) along the Delhi-
                  Mumbai Industrial Corridor (DMIC), strategically located in the districts of Jhajjar and
                  Gurugram, Haryana. Reliance MET City has received licenses under Phase I of
                  development and has secured approvals for an Industrial Colony, Industrial Park, and
                  MET City across 365 acres in Dadri. The project offers premium industrial plots in Delhi
                  NCR, suitable for small, medium, and large-scale industries. The township enjoys
                  excellent connectivity to Gurugram, Delhi, Manesar, major national highways, and key
                  transport hubs. It provides seamless access to IGI Airport, rail connectivity via
                  Northern Railway, and direct integration with the Dedicated Freight Corridor (DFC)
                  under the Delhi-Mumbai Industrial Corridor (DMIC). Phase I (365 acres) is currently
                  under development, with a total of 1,230 acres already licensed. Additionally,
                  infrastructure developments such as the DFC, DMIC, and KMP Expressway are set to
                  further enhance accessibility and growth potential, positioning Reliance MET City as
                  one of the most strategically located and competitively priced industrial developments
                  in Delhi NCR.
                </p>
                <div className="flex flex-row gap-2 md:gap-4 lg:gap-8 pl-0 md:pl-4 lg:pl-12"> 
                <span className="text-xs  lg:text-base">Prime Locations </span> &#124; <span className="text-xs lg:text-base">Innovative Design </span> &#124; <span className="text-xs lg:text-base">Commitment to Quality</span>
                </div>
                <button className="border-2 bg-green-600 rounded-4xl text-xs md:text-sm lg:text-base text-white py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8">Download Brochure</button>
              </div>
            
          </div>
        </>
    );
} 