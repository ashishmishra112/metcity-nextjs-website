"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PriceList from "@/components/PriceList";
import Features  from "@/components/Features";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import ContactForm from "@/components/ContactForm";
import { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div> 
      {/* Page Grid */}
      <main className=""> 
        <section className=" bg-white">
          {/* HEADER */}
          <div className="grid place-items-center">
            <div className="flex flex-row gap-60 md:gap-6 lg:gap-72"> 
            <Image src="/assets/met2.png" alt="metcity" width={50} height={50} className="md:w-15 md:h-15 lg:w-20 lg:h-20" />            
            <header className="hidden md:block">
              <ul className="flex gap-6 text-black font-jacques md:pt-5 lg:pt-6 font-poppins">
                <li className="text-green-600 cursor-pointer md:text-sm lg:text-xl font-semibold">Home</li>
                <li className="cursor-pointer md:text-sm lg:text-xl font-semibold">Amenities</li>
                <li className="cursor-pointer md:text-sm lg:text-xl font-semibold">Floor Plan</li>
                <li className="cursor-pointer md:text-sm lg:text-xl font-semibold">Price List</li>
                <li className="cursor-pointer md:text-sm lg:text-xl font-semibold">Gallery</li>
                <li className="cursor-pointer md:text-sm lg:text-xl font-semibold">Location</li>
              </ul>
            </header>
            
            <button className="hidden md:block bg-green-600 text-sm rounded-lg text-white md:p-2 md:mt-2 md:mb-2 lg:p-4 lg:mb-7 lg:mt-2.5">+91-9999999999</button>
            
            <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-[linear-gradient(135deg,_#1CB5E0,_#000851)] text-white flex justify-end">
              <ul className="border w-40 flex flex-col items-start text-right  pl-14 gap-1 py-1 font-jacques">
                <li className="text-zinc-950 font-semibold">Home</li>
                <li>Amenities</li>
                <li>Floor Plan</li>
                <li>Price List</li>
                <li>Gallery</li>
                <li>Location</li>
                <button className="bg-green-600 text-xs text-white p-2  rounded-lg ">+91-9999999999</button>
              </ul>
            </div>
          )}
          
          {/* Hero-Section */}
          <Hero/>
          
          {/* About-Section */}
          <About/>

          {/* PriceList-Section */}
          <PriceList/>
        </section>

        <section className=" bg-white">
          {/* Features-Section */}
          <Features/>

          {/* Gallery-Section */}
          <Gallery/>
        </section>

        <section className=" bg-white z-10">
          <div className="bg-[#ebebeb] h-280 md:h-100 lg:h-120 flex flex-col justify-center items-center gap-6 ">
              <div className="flex ">
                <h2 className="text-green-600 text-base text-center md:text-xl lg:text-3xl font-jacques">Where Industry Meets Innovation And Modern Living</h2>
              </div>
            
            <div className="grid grid-cols-1">
              <div className="bg-[#f5f5f5] flex flex-col md:flex-row gap-2 md:gap-1 lg:gap-4">
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-5 md:p-7 md:px-[7px] md:justify-between md:h-full lg:p-8 lg:py-8 md:gap-4">
                  <h4 className="text-center text-sm">8,250 Acres of Integrated <br className="block md:hidden lg:block"/> Planning</h4>
                  <p className="text-center text-xs">Enabling scalable industrial <br className="block md:hidden lg:block"/> expansion and smart urban living</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-7 md:p-7 md:px-4 md:justify-between md:h-full lg:p-[33px] lg:py-8 md:gap-4">
                  <h4 className="text-center text-sm">Plug-and-Play Infrastructure</h4>
                  <p className="text-center text-xs">With built-to-suit solutions and <br className="block md:hidden lg:block"/> ready-to-move plots</p>
                </div>
                
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-5 md:p-7 md:px-[1px] md:justify-between md:h-full lg:p-[35px] lg:py-8 md:gap-4">
                  <h4 className="text-center text-sm">Multimodal Connectivity</h4>
                  <p className="text-center text-xs">Via KMP Expressway, Dwarka <br className="block md:hidden lg:block"/> Expressway, and a dedicated rail <br className="block md:hidden lg:block"/> link</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-7 md:p-7 md:px-[1px] md:justify-between md:h-full lg:p-8.5 lg:py-8 md:gap-4">
                  <h4 className="text-center text-sm">Single Window Clearance & <br className="block md:hidden lg:block"/> Incentives under HEEP 2020</h4>
                  <p className="text-center text-xs">Ensuring business ease</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="bg-[#f5f5f5] flex flex-col md:flex-row gap-2 md:gap-1 lg:gap-4">
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-5 px-[25px] md:py-0 md:px-[19.5px] md:justify-between md:h-full lg:p-7.5 lg:py-6 md:gap-4">
                  <h4 className="text-center text-sm">Dedicated Japanese <br className="block md:hidden lg:block"/> Industrial Township</h4>
                  <p className="text-center text-xs">Home to Panasonic. Denso, Nihon <br className="block md:hidden lg:block"/> Kohden & more</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-5 px-6 md:py-0 md:px-[27px] md:justify-between md:h-full lg:p-[33px] lg:py-6 md:gap-4">
                  <h4 className="text-center text-sm">IGBC Platinum Certified <br className="block md:hidden lg:block"/> Smart City</h4>
                  <p className="text-center text-xs">For a planet-first, people-friendly <br className="block md:hidden lg:block"/> ecosystem</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-5 px-6 md:py-0 md:px-7 md:justify-between md:h-full lg:px-[37px] lg:py-6  md:gap-4">
                  <h4 className="text-center text-sm">600+ Companies from 10+ <br className="block md:hidden lg:block"/> Countries</h4>
                  <p className="text-center text-xs">Already operational or under <br className="block md:hidden lg:block"/> development</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-3 px-6 md:py-0 md:px-0 md:justify-between md:h-full lg:px-9 lg:py-6 md:gap-4">
                  <h4 className="text-center text-sm">Inclusive Community <br className="block md:hidden lg:block"/> Development</h4>
                  <p className="text-center text-xs">With access to skilled workforce <br className="block md:hidden lg:block"/> education, and social <br className="block md:hidden lg:block"/> infrastructure</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture & Maps Section */}
          <div className="bg-[#f4f1e8] flex flex-col justify-center items-center h-180 md:h-80 lg:h-100 gap-8">
            <div className="flex font-jacques justify-start items-center">
              <h2 className="text-green-600 text-2xl md:text-xl lg:text-3xl">Floor Plan</h2>
            </div>
            <div className="grid grid-cols-1 justify-items-center md:place-items-center">
              <div className="flex flex-col md:flex-row font-jacques gap-4 md:gap-6 lg:gap-10">
                <div className="relative border w-50 min-h-45 md:w-[170px] md:min-h-[170px] lg:w-55 lg:min-h-50 bg-[url('/assets/layout.png')] bg-cover bg-center bg-no-repeat ">
                <div className="absolute inset-0 bg-white/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-green-600 text-white rounded-full text-xs md:text-base py-1 px-6 md:py-2 md:px-10">View Plan</button>
                  </div>
                    <p className="absolute bottom-0 left-0 w-full bg-green-500 text-white text-xs md:text-base text-center p-2 mb-2">Industrial Plots</p>
                </div>
                </div>
                <div className="relative border w-50 min-h-45 md:w-[170px] md:min-h-[170px] lg:w-55 lg:min-h-50 bg-[url('/assets/layout.png')] bg-cover bg-center bg-no-repeat ">
                <div className="absolute inset-0 bg-white/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-green-600 text-white rounded-full text-xs md:text-base py-1 px-6 md:py-2 md:px-10">View Plan</button>
                  </div>
                    <p className="absolute bottom-0 left-0 w-full bg-green-500 text-white text-xs md:text-base text-center p-2  mb-2">Residential Plot</p>
                  </div>
                </div>
                <div className="relative border w-50 min-h-45 md:w-[170px] md:min-h-[170px] lg:w-55 lg:min-h-50 bg-[url('/assets/layout.png')] bg-cover bg-center bg-no-repeat ">
                <div className="absolute inset-0 bg-white/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-green-600 text-white rounded-full text-xs md:text-base py-1 px-6 md:py-2 md:px-10">View Plan</button>
                  </div>
                    <p className="absolute bottom-0 left-0 w-full bg-green-500 text-white text-xs md:text-base text-center p-2  mb-2">Master Plan</p>
                </div>
                </div>
              </div>
            </div>
          
          </div>
        </section>

        <section className="bg-white ">
          
          {/* Location-Section */}
          <Location/>
          {/* ContactForm-Section */}
          <ContactForm/>

          {/* Footer */}
            <div className="border-t border-green-600 bg-[#f4f1e8] flex justify-center items-center font-jacques h-20">
              <p className="border-b-2 border-green-600 text-center text-xs md:text-base lg:text-lg font-extrabold">Privacy Policy</p>
            </div>
        </section>

      </main>

    </div>
  );
}