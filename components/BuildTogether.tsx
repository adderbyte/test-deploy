import React from 'react';

export default function BuildTogether() {
  return (
    // Main wrapper section: Overall section background and vertical padding
    // Retained bg-white for the section itself, as the image will be on the inner card
    <section className="py-20 bg-white flex items-center justify-center overflow-hidden">
      {/* New wrapper div to define the consistent page content width (max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10"> {/* z-10 for content */}
        {/* The dark card container, now with background image */}
        <div
          className="text-white rounded-3xl w-full px-8 sm:px-12 md:px-16 py-10 sm:py-14 md:py-18 shadow-xl relative overflow-hidden"
          style={{
            // Use a simple relative URL for the uploaded Globe.webp with Globe.jpg as a fallback
            backgroundImage: `url('/images/Globe.webp'), url('/images/Globe.jpg')`,
            backgroundSize: 'cover', // Cover the entire div
            backgroundPosition: 'center', // Center the image
            backgroundRepeat: 'no-repeat', // Don't repeat the image
            // Add a subtle overlay to make text readable over the image
            // This creates the dark blue effect you had, but with the image underneath
            backgroundColor: 'rgba(45, 55, 72, 0.85)', // Original dark blue with transparency
            backgroundBlendMode: 'overlay', // Blend the image with the background color
          }}
        >
          {/* Overlay div to ensure text readability if needed, though backgroundBlendMode should handle it */}
          {/* <div className="absolute inset-0 bg-[#2D3748] opacity-85 rounded-3xl z-0"></div> */}
          
          <div className="text-center relative z-10"> {/* z-10 for text content over background image */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Let's Build Smarter Systems Together
            </h2>

            <p className="text-lg text-white mb-18 max-w-2xl mx-auto leading-relaxed inline-block ">
              Get in touch to learn how Polymarq can bring intelligence to your infrastructure or operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary CTA Button - white background, dark text */}
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
                Contact Us
              </button>
              {/* Secondary CTA Button - transparent background, light border, light text */}
              {/* <button className="bg-transparent border border-gray-500 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                CTA Button
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
