"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
    
    return (
        <>
            <div className="w-full min-h-[675px] md:min-h-[530px] bg-[url('/assets/met-bg.jpg')] bg-cover bg-center bg-no-repeat"> 
            <div className="grid grid-cols-1 md:grid-cols-[100px_350px_1fr] gap-6 md:gap-0 p-2 md:p- md:pt-10 place-items-center">
               
            <div className="grid grid-cols-1">
              {/* <div className="flex flex-row justify-start items-center md:bg-zinc-950 text-white font-jacques">
               <button className="border-none rounded-lg md:absolute md:left-3 md:top-4/12 md:-translate-y-1/2 md:-rotate-270 bg-green-600 text-white px-6 py-2 "> &ordm; Query Now</button>
              </div> */}
            </div>
            <div className="grid grid-cols-1">
              <div className="border-olive-50 border-t-0 flex flex-col justify-center items-start bg-zinc-950 text-white py-4 px-4 md:py-6 md:px-6 gap-1 shadow-[0_25px_40px_-20px_rgba(255,255,255,0.9)] font-jacques"> 
                <h2 className="text-base md:text-lg font-bold">Reliance MET CITY</h2>
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
            <div className="grid grid-cols-1 md:place-self-end self-end md:pr-6 md:mt-44 lg:mt-40">
              <div className="border flex flex-col bg-zinc-950 text-white font-jacques ">
            <form action="" className="flex flex-col gap-0 md:gap-1 py-3 px-6 md:p-4 lg:p-6 lg:gap-1 leading-none">
              <h3 className="border text-xs md:text-sm lg:text-base py-1 px-6">Get In Touch With Us:</h3>
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
        </>
    );
} 