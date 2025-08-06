"use client";

import { useState, useEffect, useRef } from "react";
import Solution1 from "@/public/images/solutions/AI-Enabled Multi-Sided 1.svg";
import Solution2 from "@/public/images/solutions/OBJECTS.svg";
import Tick from "@/public/images/ui/tick-circle.svg";
import Image from "next/image";

const solutions = [
  {
    id: 1,
    category: "AI-Enabled Multi-Sided Market",
    title: "Unlock intelligent collaboration",
    description:
      "Polymarq facilitates dynamic ecosystems where data flows across stakeholders — enabling real-time pricing, service verification, and performance optimization at scale.",
    benefits: [
      "Insightful governance tools for public agencies",
      "Competitive and transparent tools for service providers",
      "Access and control for everyday users",
    ],
    useCases: [
      "Smart logistics and delivery networks",
      "Shared energy or water utilities",
      "Public-private service platforms",
    ],
    imgUrl: Solution1,
    bgColor: "bg-purple-100",
  },
  {
    id: 2,
    category: "AI-HAL + AI-IoT Core Engine",
    title: "Where sensing meets reasoning",
    description:
      "At the core of Polymarq is a high-performance AI engine that blends edge-device inference with centralized orchestration — enabling autonomous infrastructure at scale.",
    benefits: [
      "Edge devices that respond intelligently in real-time",
      "Efficient orchestration between hardware and software",
      "Foundation for robotics and autonomous agents",
    ],
    useCases: [
      "AI-guided waste collection and recycling",
      "Smart traffic light control",
      "Microgrid energy management",
    ],
    imgUrl: Solution2,
    bgColor: "bg-green-100",
  },
];

export default function SolutionsOverview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % solutions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSolution = solutions[currentSlide];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 min-h-[90vh] transition-all duration-700 bg-gradient-to-br from-[#857ff3] from-0% to-[#E0009D1A]"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-full">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Solutions Overview
        </h2>

        {/* Main container - switches from vertical to horizontal layout */}
        <div className="flex flex-col lg:flex-row lg:justify-around lg:items-start gap-8 lg:gap-12 min-h-[60vh]">
          {/* Content Section */}
          <div className="flex items-stretch justify-between gap-6 sm:gap-8 lg:gap-12 w-full lg:w-[50%] ">
            <div className="flex items-center w-1  h-[100] invisible md:visible ">
              <div className="relative h-[100%]">
                {/* Continuous vertical line */}
                <div className="w-1 h-[100%] bg-[#5F57FF] rounded-full relative">
                  {/* Progress fill that gets thicker */}
                  <div
                    className="absolute w-[100%] top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-full transition-all duration-500"
                    style={{
                      height: `${
                        ((currentSlide + 1) / solutions.length) * 100
                      }%`,
                      // width: `${2 + currentSlide * 2}px`,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-around py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 lg:space-y-6 h-full flex-1 ">
              {/* Header */}
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-sm sm:text-md font-bold text-[#E0009D] py-1 px-2 bg-white rounded-full">
                    {currentSolution.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {currentSolution.title}
                </h3>
                <p className="text-[#475467] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {currentSolution.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Benefits:
                  </h4>
                  <ul className="space-y-2 text-[#475467] text-sm sm:text-base">
                    {currentSolution.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Image
                          src={Tick}
                          alt="Tick"
                          className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Cases - Responsive rectangular outlines */}
              <div className="pt-4">
                <h4 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base lg:hidden">
                  Use Cases:
                </h4>

                {/* Mobile: Single column stack */}
                <div className="flex flex-col sm:hidden gap-3">
                  {currentSolution.useCases.map((useCase, index) => (
                    <div key={index} className="relative">
                      {/* Background layer */}
                      <div className="absolute h-full w-full translate-x-1 translate-y-1 bg-gradient-to-r from-[#EAECF0] from-0% to-[#fff] opacity-10 rounded-lg"></div>
                      {/* Foreground content */}
                      <div className="relative h-full w-full text-center rounded-lg p-4 shadow-md border border-gray-300 ">
                        <div className="text-sm text-gray-700 font-light">
                          {useCase}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tablet: 2 columns, with third item spanning or centered */}
                <div className="hidden sm:grid lg:hidden grid-cols-2 gap-3 sm:gap-4">
                  {currentSolution.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className={`relative ${
                        index === 2 ? "col-span-2 max-w-sm mx-auto" : ""
                      }`}
                    >
                      {/* Background layer */}
                      <div className="absolute h-full w-full translate-x-1 translate-y-1 bg-gradient-to-r from-[#EAECF0] from-0% to-[#fff] opacity-10 rounded-lg"></div>
                      {/* Foreground content */}
                      <div className="relative h-full w-full text-center justify-center rounded-lg p-4 sm:p-5 shadow-md border border-gray-300 ">
                        <div className="text-sm sm:text-md text-gray-700 font-light">
                          {useCase}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: 3 columns */}
                <div className="hidden lg:flex justify-between gap-4">
                  {currentSolution.useCases.map((useCase, index) => (
                    <div key={index} className="relative flex-1">
                      {/* Background layer */}
                      <div className="absolute h-full w-full translate-x-1 translate-y-1 bg-gradient-to-r from-[#EAECF0] from-0% to-[#fff] opacity-10 rounded-lg"></div>
                      {/* Foreground content */}
                      <div className="relative h-full w-full text-center justify-center rounded-lg p-4 lg:p-6 shadow-md border border-gray-300 ">
                        <div className="text-sm lg:text-md text-gray-700 font-light">
                          {useCase}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section */}
          <div className="w-full sm:w-3/4 md:w-1/2 lg:w-[30%] mx-auto lg:mx-0 relative">
            <div className="relative">
              <Image
                src={currentSolution.imgUrl}
                className="w-full h-auto"
                width={400}
                height={300}
                alt={`${currentSolution.title} illustration`}
                priority
              />
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-3 mt-8 lg:mt-12 visible md:invisible">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#5F57FF] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
