"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Illustration from "@/public/images/home/Illustration.svg";
import IllustationWebp from "@/public/images/home/Illustration.webp";
import Illustration1 from "@/public/images/home/Illustration1.svg";
import Illustration1Webp from "@/public/images/home/Illustration1.webp";
import LogoUp from "@/public/images/home/Up.svg";
import LogoUpWebp from "@/public/images/home/Up.webp";
import LogoDown from "@/public/images/home/Down.svg";
import LogoDownWebp from "@/public/images/home/Down.webp";

export default function Hero() {
  const [animationState, setAnimationState] = useState({ 
    logo: LogoUp, 
    img: 1 
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState(prev => ({
        logo: prev.logo === LogoUpWebp ? LogoDownWebp : LogoUpWebp,
        img: prev.img === 1 ? 2 : 1
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Helper function for placeholder image URLs
  const getPlaceholderImage = (
    width,
    height,
    text = "",
    color = "E5E7EB",
    textColor = "6B7280"
  ) =>
    `https://placehold.co/${width}x${height}/${color}/${textColor}?text=${encodeURIComponent(
      text
    )}`;

  return (
    // Main section with background gradient and overflow hidden
    <section
      id="home"
      className="relative bg-gradient-to-br from-gray-10 to-white py-20 overflow-hidden"
    >
      {/* Removed background geometric SVG as it's not in the design */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-20">
        {" "}
        {/* Increased gap-16 to gap-20 */}
        {/* Left Column: Text Content - Ensure it's on top */}
        <div className="text-center md:text-left md:w-[55%] relative z-10">
          {" "}
          {/* Adjusted md:w-1/2 to md:w-[55%] and added z-10 */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building the {/* Line 1 */}
            {/* "Intelligence Layer for" on one line, with "Intelligence" highlighted, forced no-wrap */}
            <span className="block whitespace-nowrap">
              <span className=" bg-gradient-to-r from-[#E81B84] to-[#5F57FF] bg-clip-text text-transparent">Intelligence</span> Layer for
            </span>{" "}
            {/* Line 2 */}
            {/* "Real-World Systems" on the third line, forced no-wrap */}
            <span className="block whitespace-nowrap">
              Real-World Systems
            </span>{" "}
            {/* Line 3 */}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl md:max-w-none mx-auto md:mx-0 leading-relaxed">
            Polymarq empowers cities, industries, and service providers to
            coordinate better, respond faster, and optimize smarter — turning
            everyday decisions into intelligent actions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* "Request for Demo" Button - Gradient background */}
            {/* <button className="bg-gradient-to-r from-purple-600 to-[#5F57FF] text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-[#5F57FF] transition-all shadow-md">
              Request for Demo
            </button> */}
            {/* "Learn More" Button - White with border */}
            <a href="#about-us">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-md">
              Learn More
            </button>
            </a>
          </div>
        </div>
        {/* Right Column: Image/Illustration Placeholder - Ensure it's in the background and transparent */}
        <div className="w-[100%] md:w-[48%] flex justify-center md:justify-end mt-10 md:mt-0 relative z-0">
          {" "}
          {/* Adjusted md:w-1/2 to md:w-[45%] and added z-0 */}
          <div className="relative w-full max-w-sm lg:max-w-md h-94 md:h-96 rounded-lg overflow-hidden">
            {/* Background image with smooth transition */}
            <div 
              className="absolute inset-0 w-full h-[98%] md:h-full bg-cover bg-center  bg-no-repeat transition-all duration-700 ease-in-out"
              style={{ 
                backgroundImage: animationState.img === 1 
                  ? `url(/images/home/Illustration1.webp)` 
                  : `url(/images/home/Illustration.webp)`
              }}
            />

            {/* <div 
              className="absolute inset-0 visible md:invisible w-full h-[98%] bg-cover  bg-center bg-no-repeat transition-all duration-700 ease-in-out"
              style={{ 
                backgroundImage:`url(/images/Illustration.webp)` 
              }}
            /> */}
            
            {/* Logo with smooth transition */}
            <div className="absolute top-0 visible  -right-10 md:right-0">
              <Image 
                src={animationState.logo} 
                alt="logo" 
                width={100} 
                height={100} 
                className="transition-all duration-700 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}