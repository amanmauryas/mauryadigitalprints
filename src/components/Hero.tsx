import React from 'react';
import { ArrowRight } from 'lucide-react';
import logo from "./mdp.png";  // ✅ Correct

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(128,0,128,0.7), rgba(255,105,180,0.7))`,
            backgroundSize: '100% 100%',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, #000000 1px, transparent 1px),
              linear-gradient(to bottom, #000000 1px, transparent 1px)
            `,
              backgroundSize: '50px 50px',
              opacity: 0.1,
            }}
          ></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 py-32 flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-3xl text-white">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-pink to-primary-purple">
            Your One-Stop Digital Printing Solution
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Transform your ideas into stunning prints with our state-of-the-art digital printing services.
            Quality, speed, and excellence in every print.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary-orange hover:bg-opacity-90 px-8 py-4 rounded-lg flex items-center text-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary-purple px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Side Logo with Glowing Effect */}
        <div className="relative hidden md:block">
          {/* Black Glow Effect */}
          <div className="absolute -inset-10 w-[28rem] h-[28rem] bg-black rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <img src={logo} alt="Logo"className="w-96 h-auto ml- object-contain relative"/>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-purple rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-pink rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
    </div>
  );
}
