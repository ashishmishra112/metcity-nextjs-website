"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // bg-gradient-to-r from-[#1CB5E0] to-[#000851]"
    <div> 
      {/* Page Grid */}
      <main className="border bg-black grid grid-cols-1 grid-rows-[auto_1980px_2400px_1530px] md:grid-rows-[1870px_1870px_1980px_1600px] p-2 gap-3 md:gap-6 md:p-4"> 

        <section className="border bg-white grid grid-cols-1 grid-rows-[auto_auto_auto_auto] md:grid-rows-[70px_530px_740px_450px] p-2 md:p-6">
          {/* HEADER */}
          <div className="grid place-items-center">
            <div className="flex flex-row gap-10"> 
            <Image src="/met.jpg" alt="metcity" width={50} height={50} className="md:w-[60px] md:h-[60px]" />
            
            <header className="hidden md:block">
              <ul className="flex gap-6 text-black font-jacques">
                <li className="text-green-600 cursor-pointer">Home</li>
                <li className="cursor-pointer md:text-sm">Amenities</li>
                <li className="cursor-pointer md:text-sm">Floor Plan</li>
                <li className="cursor-pointer md:text-sm">Price List</li>
                <li className="cursor-pointer md:text-sm">Gallery</li>
                <li className="cursor-pointer md:text-sm">Location</li>
              </ul>
            </header>
            
            <button className="hidden md:block bg-green-600 pl-10 md:pl-6 text-top text-white px-4 py-2 md:px-2 md:py-1 rounded-lg">+91-9999999999</button>
            
            <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-white">
              <ul className="flex flex-col items-center gap-1 py-1 font-jacques">
                <li className="text-green-600">Home</li>
                <li>Amenities</li>
                <li>Floor Plan</li>
                <li>Price List</li>
                <li>Gallery</li>
                <li>Location</li>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg">+91-9999999999</button>
              </ul>
            </div>
          )}
          
          {/* first-Content */}
          <div className="w-full min-h-[675px] md:min-h-[530px] bg-[url('/met-bg.jpg')] bg-cover bg-center bg-no-repeat"> 
            <div className="grid grid-cols-1 md:grid-cols-[100px_350px_1fr] gap-2 md:gap-0 p-2 md:p- md:pt-10 place-items-center">
               
            <div className="grid grid-cols-1">
              <div className="flex flex-row justify-start items-center md:bg-zinc-950 text-white font-jacques">
               <button className="border-none rounded-lg md:absolute md:left-3 md:top-4/12 md:-translate-y-1/2 md:-rotate-270 bg-green-600 text-white px-6 py-2 "> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="border-olive-50 border-t-0 flex flex-col justify-center items-start bg-zinc-950 text-white py-4 px-4 md:py-6 md:px-6 gap-1 shadow-[0_25px_40px_-20px_rgba(255,255,255,0.9)] font-jacques"> 
                <h2 className="text-xs md:text-lg font-bold">Reliance MET CITY</h2>
                <p className="text-xs md:text-base">From 15K sqm to 4000 sqm of Industrial <br/> Plots</p>
                <p className="border-b-green-600 border-b-2 px-2 text-xs md:text-sm tracking-wide">Jhajjar and Gurgaon Haryana</p>
                <h4 className="border-b rounded-lg bg-green-600 text-white text-xs md:text-sm ml-4 py-1 pl-6 pr-1 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] mt-3 md:mt-6">Industrial Plots And Land</h4>
                <h4 className="border-b rounded-lg bg-green-600 text-white text-xs md:text-sm ml-4 py-1 pl-6 pr-4 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] leading-none ">Residential Plot: $99,000 Per Square <br/> Yard</h4>
                <h4 className="border-b rounded-lg bg-green-600 text-white text-xs md:text-sm ml-4 py-1 pl-6 pr-1 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">Location: Gurgaon Jhajjar Road</h4>
                <h4 className="border-b rounded-lg bg-green-600 text-white text-xs md:text-sm ml-4 py-1 pl-6 pr-1 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.3)] ">Status: Ready Possesion</h4>
                <li className="text-xs md:text-base list-none border-b-2 w-51 md:w-60">Starts At:</li>
                <p className="text-xs md:text-2xl">&#8377;34 Lakhs*<sub>Onwards</sub></p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:place-self-end self-end md:pr-6">
              <div className="border flex flex-col bg-zinc-950 text-white font-jacques">
            <form action="" className="flex flex-col gap-0 py-3 px-6 md:p-4 leading-none">
              <h3 className="border text-xs md:text-sm py-1 px-6">Get In Touch With Us:</h3>
              <label htmlFor="name" className="border-b-2 border-gray-400 text-xs md:text-sm px-4 pt-4 inline-block">Your Name</label>
              <br/>
              <label htmlFor="name" className="border-b-2 border-gray-400 text-xs md:text-sm px-4 inline-block">Your Email</label>
              <br/>
              <label htmlFor="name" className="border-b-2 border-gray-400 text-xs md:text-sm px-4 inline-block">Your Number</label>
              <br/>
              <button className="border-none rounded-lg bg-green-600 text-xs md:text-sm p-1">Book Now</button> 
              <br/>
              <button className="border-none rounded-sm bg-green-600 text-xs md:text-sm p-1">+91-9999999999</button>
            </form>
              </div>
            </div>
              
            </div>
          </div>
          {/* Second-Content */}
          <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] bg-[#f4f1e8] gap-1 md:gap-1 place-items-center md:items-center p-2 md:p-0">
            <div className="grid grid-cols-1">
              <div className="border-none md:border relative flex flex-row justify-start items-center text-white font-jacques">
               <button className="rounded-lg md:rotate-90 bg-green-600 text-white px-6 py-2 md:px-1 md:py-2 "> &ordm; Query Now</button>
              </div>
            </div>
            <div className="min-h-[300px] md:min-h-[400px] bg-white bg-[url('/met.jpg'),url('/metcity-bg.webp')] bg-[length:30%_20%,100%_50%] bg-[position:top,bottom] bg-no-repeat"> 
            <div className="grid grid-cols-1 items-center  md:justify-start">
              <div className="flex flex-col items-center md:items-center text-black py-14 px-0 md:py-20 md:px-0 gap-1 md:gap-0 font-jacques"> 
                <h2 className="text-[10px] md:text-xs px-2 text-zinc-500">WALK TO WORK LIFESTYLE. SMART CITY DEVELOPMENT.</h2>
                <h2 className="text-xs md:text-base tracking-wider">RESIDENTIAL & INDUSTRIAL </h2> 
                <h2 className="text-xs md:text-base font-bold">PLOTTED TOWNSHIP</h2> 
                <h2 className="border border-[#d8dfd1] text-xs md:text-base font-semibold tracking-widest">STARTING &#8377;34 LACS*</h2>              
              </div>
            </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex flex-col items-center md:items-start gap-2 md:gap-0">
                <h2 className="text-green-600 text-xs md:text-2xl">Reliance Industrial Plots/ Reliance MET In NCR <br /> Highlights</h2>
                <p className="text-xs md:text-xs px-2 text-center md:px-0 md:text-left">
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
                <div className="flex flex-row gap-2 md:gap-6 md:pl-6"> 
                <span className="text-xs md:text-xs">Prime Locations </span> &#124; <span className="text-xs md:text-xs">Innovative Design </span> &#124; <span className="text-xs md:text-xs">Commitment to Quality</span>
                </div>
                <button className="border-2 bg-green-600 rounded-4xl text-white py-2 px-6 md:py-4 md:px-8">Download Brochure</button>
              </div>
            </div>
          </div>
          {/* Third-Content */}
          <div className="relative grid grid-cols-1 md:grid-cols-[100px_1fr] bg-black justify-items-center md:place-items-center pt-2 md:p-0">
           <div className="md:absolute md:-left-12 md:top-0 grid grid-cols-1 place-items-center md:place-self-start md:self-start">
              <div className="flex flex-row font-jacques">
               <button className="border-none rounded-lg md:rounded-t-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-6 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:col-span-2">
              <div className="flex md:pt-40 md:pl-28">
                <h2 className="text-[#ffffff] text-base md:text-3xl">Price List</h2>  
              </div>
            </div>
            <div className="grid grid-cols-1 bg-green-600 place-self-start self-end rounded-tr-lg hidden md:block">
              <div className="flex py-2 px-6">                
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex flex-row gap-2 md:gap-2">
                <fieldset className="bg-[#f4f1e8] rounded-t-2xl p-4 md:p-8">
                  <legend className=" bg-white text-center py-1 px-0.5 md:py-2 md:px-1 "> <span className="border bg-green-600 text-white py-1 px-2 md:py-1 md:px-3 text-base md:text-3xl">01</span></legend>
                  <p className="border-b w-full md:w-48 text-center text-xs md:text-xl font-bold tracking-wide">&#8377; 15k Per Square <br /> Meter.</p>
                  <p className="text-left text-xs md:text-base py-2 md:py-4">Typology: Industrial Plot</p>
                  <p>Area:</p>
                </fieldset>
                <fieldset className="bg-[#f4f1e8] rounded-t-2xl p-5.5 md:p-8">
                  <legend className=" bg-white text-center py-1 px-0.5 md:py-2 md:px-1 "> <span className="border bg-green-600 text-white py-1 px-2 md:py-1 md:px-3 text-base md:text-3xl">02</span></legend>
                  <p className="border-b w-full md:w-48 text-center text-xs md:text-xl font-bold tracking-wide">&#8377; 99,000 Per Square <br /> Yard</p>
                  <p className="text-left text-xs md:text-base py-2 md:py-4">Typology: Residential </p>
                  <p>Area:</p>
                </fieldset>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-white grid grid-cols-1 grid-rows-[200px_1000px_350px_400px] md:grid-rows-[300px_700px_400px_400px] p-2 md:p-6">
          <div className=" grid grid-cols-1 md:grid-cols-[100px_1fr] bg-black justify-items-center md:place-items-center px-0">
            <div className="grid grid-cols-1 place-items-center md:place-self-start md:self-start">
              <div className="flex flex-row font-jacques pt-0 md:pt-18  md:block">
               <button className="border-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 order-first md:order-none justify-items-center md:place-self-center md:self-start">
              <div className="flex gap-2 md:gap-2 justify-start items-start">
                <div className=" bg-[#f4f1e8] rounded-b-2xl p-6.5 md:px-15.5 md:py-5">
                  <button className="bg-green-600 rounded-4xl text-xs md:text-base text-white py-2 px-5 md:py-3 md:px-7">Know More</button>
                </div>
                <div className="bg-[#f4f1e8] rounded-b-2xl p-6.5 md:px-15.5 md:py-5">
                  <button className="bg-green-600 rounded-4xl text-xs md:text-base text-white py-2 px-5 md:py-3 md:px-7">Know More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-0 md:grid-cols-[100px_1fr_1fr] md:grid-rows-4 bg-[#f4f1e8] place-items-center py-2 md:py-10 gap-3 md:gap-0">
            <div className="grid grid-cols-1 col-span-3 md:col-span-2">
              <div className="flex flex-col text-center md:text-left">
                <h2 className="text-green-600 text-base md:text-xl font-bold">MET Habitat - Premium Villa Living</h2>
                <p className="text-xs md:text-xs">
                  The residential masterplan at MET City includes a wide range of housing options to accommodate <br />
                  diverse needs and budgets. With housing solutions across various affordability levels, MET City <br />
                  ensures that people from all walks of life from skilled professionals to senior executives can live, <br />
                  work, and grow in the same vibrant urban community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 col-span-3 md:col-span-1 md:row-span-4 md:justify-self-start md:self-start">
              <div className="flex">
                <Image src="/meteco.webp" alt="meteco" width={250} height={150} className="md:w-60 md:h-130" />
              </div>
            </div>

            <div className="grid grid-cols-1 col-span-3 md:col-span-1 md:place-self-start md:self-start">
              <div className="flex flex-row font-jacques pt-0 md:pt-18">
               <button className="border-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>

            <div className="grid grid-cols-1 col-span-3 md:col-span-1">
              <div className="flex flex-col pt-0 md:pl-0">
                <div className="flex flex-col md:flex-row gap-2 md:gap-2">
                <p className="border bg-green-600 py-2 px-6 md:p-1 md:pr-0 text-center md:text-left"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-1 md:p-1">01</span> <span className="text-white text-center text-xs md:text-sm leading-0">Gated community with 24x7 <br /> security</span></p>
                <p className="border bg-green-600 py-2 px-6 md:p-2 md:pr-0 text-center md:text-left"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-1 md:p-1 ">02</span> <span className="text-white text-center text-xs md:text-xs leading-0">IGBC Gold-rated green <br /> township.</span></p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 col-span-3 md:col-span-2 md:pl-0">
              <div className="flex flex-col md:p-0">
                <div className="flex flex-col md:flex-row gap-2 md:gap-2">
                <p className="border bg-green-600 py-2 px-5 md:p-2 text-center"><span className="border rounded-xl bg-white  text-green-600 text-xs md:text-sm p-2">03</span> <span className="text-white text-center text-xs md:text-xs leading-0">Central green plaza & jogging <br /> track</span></p>
                <p className="border bg-green-600 py-2 px-5 md:p-2 text-center"><span className="border rounded-xl bg-white  text-green-600 text-xs md:text-sm p-2">04</span> <span className="text-white text-center text-xs md:text-xs leading-0">Clubhouse, swimming pool, <br /> and gym</span></p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 col-span-3 md:col-span-2 place-items-center md:pl-0 ">
              <div className="flex flex-col md:p-0 items-center">
                <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-2">
                <p className="border bg-green-600 py-5 px-6 md:p-2 md:pr-0 text-center"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-2">05</span> <span className="text-white text-center text-xs md:text-xs leading-none">Solar-enabled infrastructure</span></p>
                <p className="border bg-green-600 py-2 px-5 md:p-2 text-center"><span className="border rounded-xl bg-white text-green-600 text-xs md:text-sm p-2">06</span> <span className="text-white text-center text-xs md:text-xs leading-0">Proximity to commercial hubs <br /> and workplaces</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[400px] bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat">           
          <div className="border-b-blue-900 grid grid-cols-1 grid-rows-0 md:grid-cols-[100px_1fr] md:grid-rows-2 place-items-center gap-6 md:gap-0 p-2 md:p-0">
            <div className="grid grid-cols-1 row-span-2 justify-items-center md:place-self-start md:self-start">
              <div className="flex flex-row font-jacques mr-1">
               <button className="border-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center md:place-self-start">
              <div className="flex flex-col p-0 md:p-8 gap-2 md:gap-1">
                <h2 className="text-zinc-100 md:text-white text-center md:text-left text-base md:text-2xl font-bold">Walk-To-Work. LiveGreen. Stay Connected.</h2>
                <p className="text-zinc-100 md:text-white text-center md:text-left text-xs md:text-base">
                  Our residential townships are being strategically developed around the concept of "walk to work", minimizing <br />
                  commute times and enhancing quality of life. With integrated transport, healthcare, education, and <br />
                  recreational facilities, residents enjoy the full benefits of a connected smart city.
                </p>
                <p className="text-zinc-100 md:text-white text-center md:text-left text-xs md:text-base md:pl-6">
                  Smart infrastructure and sustainable planning <br />
                  Options for every lifestyle and income group <br />
                  Strategic location with excellent connectivity <br />
                  Community-centric design with abundant green spaces
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:place-self-start">
              <div className="flex md:pl-12">
                <button className="bg-green-600 rounded-4xl text-white py-2 px-6 md:py-4 md:px-10">Know More</button>
              </div>
            </div>    
          </div>
          </div>
          <div className="bg-[#f4f1e8] grid grid-cols-1 md:grid-cols-[100px_1fr] md:grid-rows-2 justify-items-center md:place-items-center p-2 md:p-0">
            <div className="relative grid grid-cols-1 col-span-2 md:col-span-1 md:row-span-2 md:place-self-start md:self-start">
              <div className="flex flex-row font-jacques justify-start items-start">
               <button className="border-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-2 md:col-span-1 justify-items-center md:place-items-center">
              <div className="flex flex-row font-jacques">
               <h2 className="text-green-600 text-2xl font-bold">Our Gallery</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 justify-items-center md:justify-items-start items-start">
              <div className="flex flex-col md:flex-row font-jacques gap-2 md:gap-2">
                <Image src="/greenfield-city.jpg" alt="greenfield-city" width={140} height={100} className="md:w-40 md:h-50" />
                <Image src="/metropolis.jpg" alt="metropolis" width={140} height={100} className="md:w-40 md:h-50" />
                <Image src="/met-habitat.webp" alt="met-habitat" width={140} height={100} className="md:w-40 md:h-50" />
              </div>
            </div>
          </div>
        </section>

        <section className="border bg-white grid grid-cols-1 grid-rows-[330px_1220px_720px_100px] md:grid-rows-[400px_700px_600px_200px] z-10 p-2 md:p-6">
          <div className="bg-[#f4f1e8] grid grid-cols-1 md:grid-cols-[100px_1fr] justify-items-center md:place-items-center p-2 md:p-0">
            <div className="grid grid-cols-1 col-span-2 md:col-span-1">
              <div className="flex flex-row font-jacques justify-start items-start">
                <button className="border-b-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 place-self-start justify-self-center">
              <div className="flex flex-col md:flex-row font-jacques gap-2 md:gap-2">
                <Image src="/new-city.webp" alt="new-city" width={140} height={100} className="md:w-40 md:h-50" />
                <Image src="/metropolis-city.jpg" alt="metropolis-city" width={140} height={100} className="md:w-40 md:h-50" />
                <Image src="/met-bg.jpg" alt="met-bg" width={140} height={100} className="md:w-40 md:h-50" />
              </div>
            </div>
          </div>
          <div className="bg-[#eaeaea] grid grid-cols-1 md:grid-cols-[100px_1fr] justify-items-center md:place-items-center gap-3 md:gap-0 p-2 md:p-0">
            <div className="grid grid-cols-1 col-span-2 md:place-self-center md:self-end md:tracking-widest">
              <div className="flex flex-col md:pl-20">
                <h2 className="text-green-600 text-sm text-center md:text-xl font-jacques">Where Industry Meets Innovation And Modern Living</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-2 md:col-span-1">
              <div className="flex flex-row font-jacques justify-start items-center">
                <button className="border-b-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 ">
              <div className="flex flex-col md:flex-row gap-2 md:gap-2">
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-4 md:p-8 md:gap-4">
                  <h4 className="text-center md:text-sm">8,250 Acres of Integrated <br /> Planning</h4>
                  <p className="text-center">Enabling scalable industrial <br /> expansion and smart urban living</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-7 md:p-9  md:gap-4">
                  <h4 className="text-center md:text-sm">Plug-and-Play Infrastructure</h4>
                  <p className="text-center">With built-to-suit solutions and <br /> ready-to-move plots</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-4 md:p-8.5 md:gap-4">
                  <h4 className="text-center md:text-sm">Multimodal Connectivity</h4>
                  <p className="text-center">Via KMP Expressway, Dwarka <br /> Expressway, and a dedicated rail <br /> link</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-7 md:p-8.5 md:gap-4">
                  <h4 className="text-center md:text-sm">Single Window Clearance & <br /> Incentives under HEEP 2020</h4>
                  <p className="text-center">Ensuring business ease</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-2 place-self-start justify-self-center">
              <div className="flex flex-col md:flex-row gap-2 md:gap-2 pr-3 md:pr-0 md:pl-25">
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-4 md:p-7 md:py-2 md:gap-4">
                  <h4 className="text-center md:text-lg">Dedicated Japanese <br /> Industrial Township</h4>
                  <p className="text-center">Home to Panasonic. Denso, Nihon <br /> Kohden & more</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-4 md:p-8 md:py-2 md:gap-4">
                  <h4 className="text-center md:text-lg">IGBC Platinum Certified <br /> Smart City</h4>
                  <p className="text-center">For a planet-first, people-friendly <br /> ecosystem</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-4 md:px-7.5 md:py-2  md:gap-4">
                  <h4 className="text-center md:text-lg">600+ Companies from 10+ <br /> Countries</h4>
                  <p className="text-center">Already operational or under <br /> development</p>
                </div>
                <div className="border border-gray-400 shadow-[0_0_10px_rgba(0,0,0,0.25)] flex flex-col p-1  md:p-6 md:py-2 md:gap-4">
                  <h4 className="text-center md:text-lg">Inclusive Community <br /> Development</h4>
                  <p className="text-center">With access to skilled workforce <br /> education, and social <br /> infrastructure</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#f4f1e8] grid grid-cols-1 grid-rows-0 md:grid-cols-[100_1fr] md:grid-rows-3 place-items-center p-2 md:p-0 gap-3 md:gap-0">
            <div className="grid grid-cols-1">
              <div className="flex flex-row font-jacques justify-start items-center">
                <button className="border-b-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex flex-row font-jacques justify-start items-center">
                <h2 className="text-green-600 md:text-xl">Floor Plan</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-1 md:col-span-2 justify-items-center md:place-items-center">
              <div className="flex flex-col md:flex-row font-jacques md:place-self-center md:self-center gap-2 md:gap-2">
                <div className="relative border w-[200px] min-h-[180px] md:w-[200px] md:min-h-[200px] bg-[url('/layout.png')] bg-cover bg-center bg-no-repeat ">
                <div className="absolute inset-0 bg-white/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-green-600 text-white rounded-full text-xs md:text-base py-1 px-6 md:py-2 md:px-14">View Plan</button>
                  </div>
                    <p className="absolute bottom-0 left-0 w-full bg-green-500 text-white text-xs md:text-base text-center p-2 mb-2">Industrial Plots</p>
                </div>
                </div>
                <div className="relative border w-[200px] min-h-[180px] md:w-[200px] md:min-h-[200px] bg-[url('/layout.png')] bg-cover bg-center bg-no-repeat ">
                <div className="absolute inset-0 bg-white/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-green-600 text-white rounded-full text-xs md:text-base py-1 px-6 md:py-2 md:px-14">View Plan</button>
                  </div>
                    <p className="absolute bottom-0 left-0 w-full bg-green-500 text-white text-xs md:text-base text-center p-2  mb-2">Residential Plot</p>
                  </div>
                </div>
                <div className="relative border w-[200px] min-h-[180px] md:w-[200px] md:min-h-[200px] bg-[url('/layout.png')] bg-cover bg-center bg-no-repeat ">
                <div className="absolute inset-0 bg-white/80">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-green-600 text-white rounded-full text-xs md:text-base py-1 px-6 md:py-2 md:px-14">View Plan</button>
                  </div>
                    <p className="absolute bottom-0 left-0 w-full bg-green-500 text-white text-xs md:text-base text-center p-2  mb-2">Master Plan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex flex-row font-jacques items-start justify-start md:items-center">
                <button className="border-b-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-50 shadow-[inset_0_1px_10px_rgba(0,0,0,0.2)] bg-[#f4f1e8] grid grid-cols-[1fr_1fr] justify-items-end md:place-items-center relative">
            <div className="grid grid-cols-1 place-self-end self-end">
              <div className="flex pr-4 md:pr-0">
                <div className="w-[140px] min-h-[35px] md:w-[795px] md:min-h-[55px] bg-[url('/map.webp')] bg-cover bg-center bg-no-repeat"></div>
                {/* <Image src="/map.webp" alt="map" width={40} height={50} className="md:w-[750px] md:h-[55px]" /> */}
              </div>
            </div>
            <div className="grid grid-cols-1 place-self-start self-end z-10">
              <div className="flex flex-col h-full font-jacques md:pl-13 md:mt-3">
                <h2 className="text-base md:text-3xl font-semibold">Location Advantages</h2>
                <p className="text-[6px] md:text-lg z-0 bottom-0">The residential masterplan at MET City includes a wide range of housing</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border bg-white grid grid-cols-1 grid-rows-[200px_1200px_100px] md:grid-rows-[500px_900px_100px] p-2 md:p-6">
          <div className="bg-[#f4f1e8] grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] justify-items-center md:place-items-center relative p-0 md:p-0">
            <div className="grid grid-cols-1 col-span-3 md:col-span-1">
              <div className="flex flex-row font-jacques justify-center items-start md:justify-start md:items-center">
                <button className="md:border-b-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-1 md:col-span-1 place-self-end self-start">
              <div className="flex pr-1 md:pr-13">
                <div className="w-[140px] min-h-[130px] md:w-[800px] md:min-h-[355px] bg-[url('/map.webp')] bg-cover bg-center bg-no-repeat"></div>
                {/* <Image src="/map.webp" alt="map" width={40} height={50} className="md:w-[750px] md:h-[55px]" /> */}
              </div>
            </div>
            <div className="grid grid-cols-1 col-span-1 md:col-span-1 place-self-start self-start z-10">
              <div className="flex flex-col h-full font-jacques pl-0 md:pl-0">
                <p className="text-[6px] md:text-base md:mt-auto z-0 top-0">
                  The residential masterplan at MET City includes a wide range of housing <br /> 
                  options to accommodate diverse needs and budgets. With housing solutions <br />
                  across various affordability levels, MET City ensures that people from all <br />
                  walks of life from skilled professionals to senior executives can live, work, and <br />
                  grow in the same vibrant urban community.
                </p>
                <ul className="list-disc md:tracking-wider pl-8 md:pl-16">
                  <li className="text-[6px] md:text-sm">Direct access to Kundli-Manesar-Palwal(KMP) <br /> Expressway</li>
                  <li className="text-[6px] md:text-sm">Seamless connectivity to IGI Airportand Gurugram</li>
                  <li className="text-[6px] md:text-sm">Close proximity to major employmentzones within <br /> MET City</li>
                  <li className="text-[6px] md:text-sm">Freight Corridor Linked to Northern Railway and <br /> Delhi-Mumbai Freight Corridor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-zinc-50 shadow-[inset_0_1px_10px_rgba(0,0,0,0.2)] bg-[#f4f1e8] grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] place-items-center p-2 md:p-0 gap-3 md:gap-0">
          <div className="grid grid-cols-1 col-span-3 md:col-span-1">
              <div className="flex flex-row font-jacques justify-start items-center">
                <button className="border-b-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold"> &ordm; Query Now</button>
              </div>
          </div>
          <div className="grid grid-cols-1 col-span-3 md:col-span-1">
            <div className="flex flex-col font-jacques justify-items-center md:justify-start md:items-start gap-2 md:gap-0">
                <h2 className="text-green-600 text-center md:text-left text-base md:text-xl">A Masterpiece In Motion</h2>
                <p className="text-xs text-center md:text-left tracking-widest">
                  Reliance MET City is more than just an urban development, it is a blueprint for <br />
                  India's future. Strategically located in Delhi NCR's fastest-growing industrial <br />
                  corridor, MET City offers unmatched connectivity, global infrastructure, and an <br />
                  integrated lifestyle experience that aligns with the aspirations of tomorrow's <br />
                  India. With the perfect blend of industrial efficiency, residential comfort, and <br />
                  commercial potential, the city is designed to empower businesses, uplift <br />
                  communities, and foster sustainable growth. Whether you're a global <br />
                  manufacturer, a logistics leader, or a modern homeowner, MET City delivers a <br />
                  unique value proposition.
                </p>
                <p className="text-xs md:text-lg text-center md:text-left font-bold">Agent Rera Number :</p>
                <p className="text-xs md:text-lg text-center md:text-left font-bold">Projects Rera :</p>
                {/* <div className="pl-8">   */}
                <p className="text-green-600 font-bold text-center md:text-left text-xs md:text-lg md:pl-18">Call Us Anytime</p>
                <div className="px-40 md:pl-8"> <span className="flex flex-col bg-green-600 rounded-3xl py-3 px-1 md:py-6 md:px-4"> </span> </div>
                <p className="md:pl-18 text-center md:text-left text-xs md:text-lg">+91-9999999999</p>
                {/* </div> */}
              </div>
          </div>
          <div className="bg-white grid grid-cols-1 col-span-3 md:col-span-1 shadow-[0_14px_10px_rgba(0,0,0,0.15)]">
            <div className="flex flex-col font-jacques justify-items-start md:place-items-center py-0 px-0 pb-4 md:pb-4 gap-0">
                <form action="" className=" flex flex-col place-items-center leading-2.5">       
                <div className="bg-green-600 flex py-2 md:py-3 px-28 md:px-34">  </div>
                  <h2 className="text-green-500 text-base md:text-xl font-semibold pt-3 md:pt-5">Schedule A Site Visit</h2> <br />
                  <Image src="/met.jpg" alt="metcity" width={40} height={30} className="md:w-[90px] md:h-[70px]" />
                  <input className="text-gray-600 border border-gray-300 rounded-lg py-2 text-xs md:text-sm md:px-2" type="text" id="fname" name="fname" placeholder="Your Name"/> <br />
                  <input className="text-gray-600 border border-gray-300 rounded-lg py-2 text-xs md:text-sm md:px-2" type="text" id="fname" name="fname" placeholder="Your Email"/> <br />
                  <input className="text-gray-600 border border-gray-300 rounded-lg py-2 text-xs md:text-sm md:px-2" type="text" id="fname" name="fname" placeholder="Your Number"/> <br />
                  <button className="bg-green-600 text-white text-xs rounded-lg px-10 md:px-24 py-2 font-bold">BOOK NOW</button>
                </form>
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-3 md:col-span-1 md:place-self-start md:self-start">
            <div className="flex font-jacques ">
              <button className="rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 md:mt-7 font-bold">&ordm; Query Now</button>
            </div>
          </div>
          {/* <button className="border-b-none rounded-lg rotate-90 bg-green-600 text-white py-1 p-4 tracking-normal font-bold"> &ordm; Query Now</button> */}
          <div className="grid grid-cols-1 col-span-3 md:col-span-2">
            <div className="flex flex-row font-jacques justify-start items-center">
                <p className="text-center text-xs  md:pr-18">
                  <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA <br />
                  authorized channel partner. The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be <br />
                  guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate <br />
                  Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered <br />
                  with us. The content, design, and information on this website are protected by copyright and other intellectual property rights. For accurate and up-to-date information regarding services, <br />
                  pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>
              </div>
          </div>
          </div>
          <div className="border-t border-green-600 bg-[#f4f1e8] grid grid-cols-[1fr] place-items-center">
            <div className="grid grid-cols-1 col-span-3 place-items-center">
            <div className="flex flex-row font-jacques">
              <p className="border-b-2 border-green-600 text-center text-xs md:text-base font-extrabold mb-0">Privacy Policy</p>
            </div>
          </div>
          </div>
        </section>
       
      </main>
    
    


    {/* <div className="bg-[#f4f1e8] grid grid-cols-1 md:grid-cols-[100px_1fr_1fr] gap-6 p-4">
        <div className="flex justify-center md:justify-start">
          <button className="rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:px-2 font-bold">&ordm; Query Now</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:contents gap-6">
        <div className="w-full h-[200px] md:h-[355px] bg-[url('/map.webp')] bg-cover bg-center"></div>
        <div className="flex flex-col font-jacques gap-4">
        <p className="text-sm md:text-base">The residential masterplan at MET City includes a wide range of housing options to accommodate diverse needs and budgets.</p>
          <ul className="list-disc pl-6 text-sm md:text-base space-y-2">
            <li>Direct access to KMP Expressway</li>
            <li>Seamless connectivity to IGI Airport and Gurugram</li>
            <li>Close proximity to employment zones</li>
            <li>Freight corridor connectivity</li>
          </ul>
        </div>
        </div>
        </div> */}



    </div>
  );
}


















































{/* <section className="border-2 border-red-600 grid grid-rows-4 bg-white p-4">
          <div className="bg-black grid grid-cols-3 ">
            <div className="border grid grid-cols-1">
              <div className="flex ">
                <button className="text-white bg-green-600">Query Now</button>
              </div>
            </div>
            <div className="border grid grid-cols-1 bg-[#f4f1e8] place-items-center">
              <div className="flex flex-column">
                <button className="text-white bg-green-600 py-4 px-6 rounded-2xl">Know More</button>
              </div>
            </div>
            <div className="border grid grid-cols-1 bg-[#f4f1e8] place-items-center">
              <div className="flex flex-column">
                <button className="text-white bg-green-600 py-4 px-6 rounded-2xl">Know More</button>
              </div>
            </div>
          </div>
          <div className="bg-green-300">3</div>
          <div className="bg-green-300">3</div>
          <div className="bg-green-300">3</div>
</section>

<section>
<div className="bg-red-300">1</div>
</section>
<section>
<div className="border footer bg-[#f4f1e8] col-span-3 place-items-center"><h2 className="font-bold">Privacy Policy</h2></div>
</section>  */}


{/*<div className="border bg-blue-950 box w-full grid grid-cols-4 grid-rows-[100px_100px_100px] gap-4 p-4">
        <div className="child border-2 border-amber-700 bg-green-500 text-white row-span-3 grid justify-items-center items-center"><h2>Sidebar Content</h2></div>
        <div className="child1 border-2 border-amber-700 bg-green-500 text-white col-span-2 grid place-items-center"><h2>Layouts of complex websites</h2></div>
        <div className="child2 border-2 border-amber-700 bg-red-500 text-white grid place-items-center"><h2>Layouts of complex websites</h2></div>
        <div className="child3 border-2 border-amber-700 bg-yellow-500 text-white grid place-items-center"><h2>Layouts of complex websites</h2></div>
        <div className="child4 border-2 border-amber-700 bg-red-500 text-white grid place-items-center"><h2>Layouts of complex websites</h2></div>
        <div className="child5 border-2 border-amber-700 bg-green-500 text-white row-span-2 grid place-items-center"><h2>Layouts of complex websites</h2></div>
        <div className="child6 border-2 border-amber-700 bg-red-500 text-white grid place-items-center"><h2>Layouts of complex websites</h2></div>
        <div className="child7 border-2 border-amber-700 bg-yellow-500 text-white grid place-items-center"><h2>Layouts of complex websites</h2></div>
    </div>*/}

{/*<div className="border bg-gray-300 w-full box grid grid-cols-6 grid-rows-[100px_100px]">
        <div className="border bg-pink-700 boxes place-items-center"><h2>GRID LAYOUTS</h2></div>
        <div className="border bg-green-400 boxes place-items-center"><h2>GRID LAYOUTS</h2></div>
        <div className="border bg-green-500 boxes place-items-center"><h2>GRID LAYOUTS</h2></div>
        <div className="border bg-blue-500 boxes place-items-center row-span-2"><h2>GRID LAYOUTS</h2></div>
        <div className="border bg-blue-900 boxes place-items-center row-span-2"><h2>GRID LAYOUTS</h2></div>
        <div className="border bg-blue-300 boxes place-items-center row-span-2"><h2>GRID LAYOUTS</h2></div>
        <div className="border bg-orange-700 boxes place-items-center"><h2>GRID LAYOUTS</h2></div>
        <div className="border bg-orange-400 boxes place-items-center col-span-2"><h2>GRID LAYOUTS</h2></div>
    </div> */}

{/*<div className="border complex grid grid-cols-2 grid-rows-[100px_100px_100px] gap-2 p-2">
        <div className="border boxes col-span-2 grid place-items-center"><h2>header</h2></div>
        <div className="border boxes grid place-items-center"><h2>SideBar</h2></div>
        <div className="border boxes grid place-items-center"><h2>Main</h2></div>
        <div className="border boxes grid place-items-center col-start-2 "><h2>Main</h2></div>
    </div>*/}

{/*<div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-red-300">1</div>
        <div className="bg-blue-300">2</div>
        <div className="bg-green-300">3</div>
      </div>

      <div className="grid grid-rows-3 gap-4 h-44 p-4">
        <div className="bg-red-300">A</div>
        <div className="bg-blue-300">B</div>
        <div className="bg-green-300">C</div>
    </div>*/}