"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContactForm() {
    
    return (
        <>
            <div className="  bg-[#f4f1e8] flex flex-col justify-center items-center gap-6 md:gap-10 h-240 md:h-150 lg:h-200">
            <div className="flex flex-col md:flex md:flex-row lg:gap-0"> 
            <div className="flex flex-col font-jacques lg:justify-start lg:items-start gap-4 md:gap-1 lg:gap-2 lg:w-1/2 lg:pl-20">
                <h2 className="text-green-600 text-center md:text-left text-lg md:text-xl lg:text-3xl">A Masterpiece In Motion</h2>
                <p className="text-[10px] lg:text-base text-center md:text-left tracking-widest px-6 lg:px-0">
                  Reliance MET City is more than just an urban development, it is a blueprint for 
                  India's future. Strategically located in Delhi NCR's fastest-growing industrial 
                  corridor, MET City offers unmatched connectivity, global infrastructure, and an 
                  integrated lifestyle experience that aligns with the aspirations of tomorrow's 
                  India. With the perfect blend of industrial efficiency, residential comfort, and 
                  commercial potential, the city is designed to empower businesses, uplift 
                  communities, and foster sustainable growth. Whether you're a global 
                  manufacturer, a logistics leader, or a modern homeowner, MET City delivers a 
                  unique value proposition.
                </p>
                <p className="text-xs md:text-lg lg:text-xl text-center md:text-left font-bold">Agent Rera Number :</p>
                <p className="text-xs md:text-lg lg:text-xl text-center md:text-left font-bold">Projects Rera :</p>
                {/* <div className="pl-8">   */}
                <p className="text-green-600 font-bold text-center md:text-left text-xs md:text-lg lg:text-xl md:pl-18 md:pt-0 lg:pt-10">Call Us Anytime</p>
                <div className="px-40 md:pl-8"> <span className="flex flex-col bg-green-600 rounded-3xl py-3 px-1 md:py-6 md:px-4"> </span> </div>
                <p className="md:pl-18 text-center md:text-left text-xs md:text-lg lg:text-xl">+91-9999999999</p>
                {/* </div> */}
              </div>
          
            <div className="flex flex-col font-jacques justify-center items-center gap-0 lg:w-1/2 ">
                <form action="" className="bg-white flex flex-col items-center leading-2.5 lg:leading-3.5 pb-4 md:pb-4 lg:pb-6">       
                <div className="bg-green-600 flex py-2 px-28 md:py-3 md:px-34 lg:py-4 lg:px-40">  </div>
                  <h2 className="text-green-500 text-base md:text-xl lg:text-2xl font-semibold pt-3 md:pt-5">Schedule A Site Visit</h2> <br />
                  <Image src="/met.jpg" alt="metcity" width={40} height={30} className="md:w-[90px] md:h-[70px] lg:w-[100px] lg:h-[80px] " />
                  <input className="text-gray-600 border border-gray-300 rounded-lg py-2 text-xs md:text-sm lg:text-base md:px-2" type="text" id="fname" name="fname" placeholder="Your Name"/> <br />
                  <input className="text-gray-600 border border-gray-300 rounded-lg py-2 text-xs md:text-sm lg:text-base md:px-2" type="text" id="fname" name="fname" placeholder="Your Email"/> <br />
                  <input className="text-gray-600 border border-gray-300 rounded-lg py-2 text-xs md:text-sm lg:text-base md:px-2" type="text" id="fname" name="fname" placeholder="Your Number"/> <br />
                  <button className="bg-green-600 text-white text-xs lg:text-sm rounded-lg py-2 lg:py-2 px-10 md:px-16 font-bold">BOOK NOW</button>
                </form>
            </div>
            </div>
          
            <div className="flex flex-row font-jacques justify-start items-center md:justify-items-start">
                <p className="text-center text-[10px] lg:text-sm px-6 lg:px-55">
                  <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA 
                  authorized channel partner. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be 
                  guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate 
                  Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered 
                  with us. The content, design, and information on this website are protected by copyright and other intellectual property rights. For accurate and up-to-date information regarding services, 
                  pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>
              </div>
          </div>
        </>
    );
} 