import React from "react";
import { useNavigate } from "react-router-dom";
import bgTY from "../assets/Vids/bgTY.mp4" 

const Logout = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={bgTY}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/30 text-center">
        <h1 className="text-5xl font-bold text-white mb-3">Thank you for visiting Aranya,</h1>
        <h1 className="text-5xl font-bold text-white mb-3">and discovering the hidden treasures of Jharkhand!</h1>
        <h1 className="text-5xl font-bold text-white mb-8">We can’t wait to welcome you again.</h1>
        <button
          onClick={handleLogin}
          className="bg-green-700 text-white text-2xl font-bold py-3 w-40 rounded-4xl hover:bg-green-900 transition duration-300 cursor-pointer"
        >Login
        </button>
      </div>
    </div>

    <footer className="absolute bottom-0 left-0 w-full  py-6 z-20">
      <div className="max-w-7xl mx-auto px-4 text-center text-white font-bold">
        © 2025 Aranya. All Rights Reserved.
      </div>
    </footer>
    
    </div>
    
  );
};

export default Logout
