import React from "react";
import jharTourism from "../assets/jharTourism.jpeg"

export default function Coin() {
  return (
    <div>
      {/* Coin */}
      <div
        className="
          w-80 h-80 rounded-full flex justify-center items-center relative
          border-[10px] border-green-800
          hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.3),0_0_60px_rgba(34,197,94,0.5)]
          transition-all ease-in-out
          bg-[conic-gradient(from_0deg,#22c55e,#16a34a,#15803d,#166534,#22c55e)]
        "
      >


        
        {/* Outer decorative rings */}
        <div className="absolute inset-3 rounded-full border-2 border-green-400 opacity-60"></div>
        <div className="absolute inset-6 rounded-full border border-green-500 opacity-40"></div>
        
        {/* Central area for your image */}
        <div className="w-48 h-48 rounded-full bg-white bg-opacity-95 flex justify-center items-center border-4 border-green-600">
          {/* This is where your Jharkhand seal image will go */}
          <div className="w-40 h-40 rounded-full flex items-center justify-center text-gray-500 text-sm">
            <img src={jharTourism} className="scale-110  rounded-full" />
          </div>
        </div>
        
        {/* Text around the coin */}
        <div className="absolute top-8 text-center">
          <div className="text-white font-bold text-lg tracking-wider">झारखंड</div>
        </div>
        
        <div className="absolute bottom-8 text-center">
          <div className="text-white font-bold text-lg tracking-wider">सरकार</div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-700 rounded-full"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-700 rounded-full"></div>
      </div>
    </div>
  );
}