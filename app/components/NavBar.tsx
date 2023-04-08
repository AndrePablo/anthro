"use client";

import React from "react";

import { Navbar } from "@material-tailwind/react";
import { FcBiohazard } from "react-icons/fc";

function NavBar() {
  return (
    <Navbar className=" flex justify-center items-center w-full h-[150px] bg-black pt-1 border-none ">
      <div className="  w-full h-full flex flex-row justify-center items-center">
        <div className="w-[250px] h-full bg-black mr-auto ">
          <div className="flex flex-col justify-center items-center">
            <div className="text-red-500 pt-4">Pablo Ortega</div>
            <div className="text-red-500 pt-2">250908940</div>
            <div className="text-red-500 pt-2">ANTHRO 2242B</div>
          </div>
        </div>
        <div className="bg-black rounded-3xl  w-[750px] h-full flex flex-row justify-center items-center">
          <h1 className=" relative flex font-mono font-bold text-4xl text-red-700 underline ">
            <FcBiohazard size={40} className="relative mr-[6px]" />
            MYTH||REALITY
            <FcBiohazard size={40} className="ml-[6px]" />
          </h1>
        </div>
        <div className="w-[250px] text-red-500 ml-auto h-full flex justify-center items-center">
          2023-04-03
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
