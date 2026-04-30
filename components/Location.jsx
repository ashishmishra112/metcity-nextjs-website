"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Location() {
    
    return (
        <>
          <div className="relative border-t border-zinc-50 shadow-[inset_0_1px_10px_rgba(0,0,0,0.2)] bg-[#f4f1e8] flex flex-col lg:flex lg:flex-row justify-center items-center gap-8 lg:gap-20 h-140">
            {/* <div className="flex flex-row font-jacques justify-center items-start md:justify-start md:items-center">
                <button className="md:border-b-none rounded-lg md:rotate-90 bg-green-600 text-white py-2 px-6 md:py-2 md:px-1 font-bold hidden md:block"> &ordm; Query Now</button>
            </div> */}
            <div className="w-80 h-50 md:h-95 lg:h-95 lg:w-140">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.2757374872476!2d77.1030103050649!3d28.43278779077166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f54f16ced07%3A0xb22fdbe424a0242b!2sSector%2054%20Chowk!5e0!3m2!1sen!2sin!4v1773394716577!5m2!1sen!2sin" className="w-full h-full" style={{ border: 0 }} loading="lazy"></iframe>
            </div> 
            <div className="flex flex-col font-jacques gap-1">
              <h2 className="text-2xl md:text-xl lg:text-3xl font-semibold">Location Advantages</h2>
              <p className="text-[10px] md:text-[10px] lg:text-base md:mt-auto z-0 top-0">
                The residential masterplan at MET City includes a wide range of housing <br /> 
                options to accommodate diverse needs and budgets. With housing solutions <br />
                across various affordability levels, MET City ensures that people from all <br />
                walks of life from skilled professionals to senior executives can live, work, and <br />
                grow in the same vibrant urban community.
              </p>
              <ul className="list-disc md:tracking-wider pt-4 pl-8 md:pl-8 md:pt-8">
                <li className="text-[10px] md:text-sm lg:text-lg">Direct access to Kundli-Manesar-Palwal(KMP) <br /> Expressway</li>
                <li className="text-[10px] md:text-sm lg:text-lg">Seamless connectivity to IGI Airportand Gurugram</li>
                <li className="text-[10px] md:text-sm lg:text-lg">Close proximity to major employmentzones within <br /> MET City</li>
                <li className="text-[10px] md:text-sm lg:text-lg">Freight Corridor Linked to Northern Railway and <br /> Delhi-Mumbai Freight Corridor</li>
              </ul>
            </div>
          </div>
        </>
    );
} 