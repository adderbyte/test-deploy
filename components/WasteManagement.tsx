
"use client"
import React from 'react';
import PhoneClip1 from "@/public/images/phoneClip/iPhone 14.svg"
import PhoneClip2 from "@/public/images/phoneClip/iPhone 15.svg"
import PhoneClip3 from "@/public/images/phoneClip/iPhone 16.svg"
import Image from 'next/image';
import Link from 'next/link';


export default function WasteManagement() {
  return (
    <section id='products' className="py-20 bg-white relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Floating rectangular image placeholders - positioned like the design */}
      <div className="absolute inset-0 pointer-events-none invisible md:visible">
        {/* Top left rectangular frame - bigger, slanting right (same direction as bottom) */}
        {/* Adjusted 'top' and 'h' as requested */}
        <div className={`absolute top-[20%] left-4 w-80 h-[550px]  transform rotate-[20deg] overflow-hidden`}>
          <div className="w-full h-full  rounded-2xl overflow-hidden bg-white">
            <Image 
              src={PhoneClip1} 
              alt="iPhone 14 mockup" 
              className="w-full h-full object-cover"
              width={320}
              height={550}
            />
          </div>
        </div>
        
        {/* Top right rectangular frame - bigger, slanting right (same direction as bottom) */}
        {/* Adjusted 'top' and 'h' as requested */}
        <div className="absolute top-[20%] right-1  w-100 h-[550px]  rounded-lg transform rotate-[20deg] bg-gray-100 ">
          <div className="w-full h-full  rounded-2xl overflow-hidden bg-white">
            <Image 
              src={PhoneClip2} 
              alt="iPhone 14 mockup" 
              className="w-full h-full object-cover"
              width={320}
              height={550}
            />
          </div>
        </div>
        
        {/* Top center rectangular frame - bigger, positioned at top center and cut off, slanting right */}
        <div className="absolute -top-59 left-1/2 -translate-x-1/2 w-142 h-80  rounded-lg transform rotate-[20deg] ">
        <div className="rounded-2xl overflow-hidden">
            <Image 
              src={PhoneClip3} 
              alt="iPhone 14 mockup" 
              className="w-full h-full object-cover"
              width={320}
              height={550}
            />
          </div>
        </div>
        
        
        {/* Bottom center rectangular frame - bigger, positioned to be cut off at bottom */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-142 h-64  rounded-lg transform rotate-[20deg]">
        <div className=" rounded-2xl overflow-hidden ">
            <Image 
              src={PhoneClip3} 
              alt="iPhone 14 mockup" 
              className="w-full h-full object-cover "
              width={700}
              height={550}
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none visible md:invisible">
        {/* Top left rectangular frame - bigger, slanting right (same direction as bottom) */}
        {/* Adjusted 'top' and 'h' as requested */}
        <div className="absolute top-[20%] left-4 w-80 h-[550px] border-2 border-gray-300 rounded-lg transform rotate-[20deg] bg-gray-100 shadow-sm">
        </div>
        
        {/* Top right rectangular frame - bigger, slanting right (same direction as bottom) */}
        {/* Adjusted 'top' and 'h' as requested */}
        <div className="absolute top-[20%] right-4 w-80 h-[550px] border-2 border-gray-300 rounded-lg transform rotate-[20deg] bg-gray-100 shadow-sm">
        </div>
        
        {/* Top center rectangular frame - bigger, positioned at top center and cut off, slanting right */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-80 border-2 border-gray-300 rounded-lg transform rotate-[20deg] bg-gray-100 shadow-sm">
        </div>
        
        {/* Bottom center rectangular frame - bigger, positioned to be cut off at bottom */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-64 border-2 border-gray-300 rounded-lg transform rotate-[20deg] bg-gray-100 shadow-sm">
        </div>
      </div>
      
      {/* Main content centered */}
      <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Meet Polymarq Waste Management<br />System
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed text-base">
          Unlock intelligent collaboration between producers, service providers, and 
          regulators. Polymarq facilitates dynamic ecosystems where data flows 
          across stakeholders — enabling real-time pricing, service verification, and 
          performance optimization at scale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Primary CTA Button - purple/blue gradient */}
           <Link href="/blogs/polymarq-waste-management-blog" className="block text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
          <button className="bg-gradient-to-r from-purple-600 to-[#5F57FF] text-white px-6 py-3 rounded-md font-medium hover:from-purple-700 hover:to-[#5F57FF] transition-all shadow-sm">
            Read More
          </button>
          </Link>
          
          {/* Secondary CTA Button - white with border */}
          {/* <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Secondary Action
          {/* Secondary CTA Button - white with border */}
          {/* <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm">
            CTA Button
          </button> */}
        </div>
      </div>
    </section>
  );
}
