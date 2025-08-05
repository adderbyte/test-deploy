"use client"; // This component needs to be a Client Component for interactivity

import React, { useState, useRef, useEffect, useCallback } from "react";
import One from "@/public/images/about-us/1.svg";
import Two from "@/public/images/about-us/2.svg";
import Three from "@/public/images/about-us/3.svg";
import Four from "@/public/images/about-us/4.png";
import Five from "@/public/images/about-us/5.png";
import Six from "@/public/images/about-us/6.png";
import Seven from "@/public/images/about-us/7.png";


export default function AboutUs() {
  // State for the current active image in the carousel
  const [currentIndex, setCurrentIndex] = useState(1); // Start with the second image (index 1) in focus

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

  // Array of image data for the carousel
  const images = [
    // {
    //   id: "img1",
    //   text: "Team Collaboration",
    //   src: One.src || getPlaceholderImage(600, 350, "Team Collaboration"),
    // },
    // {
    //   id: "img2",
    //   text: "Innovation",
    //   src: Two.src || getPlaceholderImage(600, 350, "Innovation"),
    // },
    // {
    //   id: "img3",
    //   text: "Gaming/Esports",
    //   src: Three.src || getPlaceholderImage(600, 350, "Gaming/Esports"),
    // },
    {
      id: "img4",
      text: "",
      src: Four.src || getPlaceholderImage(600, 350, "Gaming/Esports"),
    },
    {
      id: "img5",
      text: "",
      src: Five.src || getPlaceholderImage(600, 350, "Gaming/Esports"),
    },
    {
      id: "img6",
      text: "",
      src: Six.src || getPlaceholderImage(600, 350, "Gaming/Esports"),
    },
    {
      id: "img7",
      text: "",
      src: Seven.src || getPlaceholderImage(600, 350, "Gaming/Esports"),
    },
    // { id: 'img4', text: 'Smart City 2', src: getPlaceholderImage(600, 350, 'Smart City 2') },
    // { id: 'img5', text: 'Logistics Hub', src: getPlaceholderImage(600, 350, 'Logistics Hub') },
  ];

  // Function to navigate to the previous image
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Function to navigate to the next image
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Handle swipe gestures for touch devices AND mouse drag for desktop
  const dragStartX = useRef(0);
  const dragEndX = useRef(0);
  const isDragging = useRef(false); // New ref to track if dragging is active

  const handleDragStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX || e.touches[0].clientX;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    dragEndX.current = e.clientX || e.touches[0].clientX;
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    const swipeThreshold = 50; // Minimum pixels to count as a swipe

    if (dragStartX.current - dragEndX.current > swipeThreshold) {
      // Swiped left
      goToNext();
    } else if (dragEndX.current - dragStartX.current > swipeThreshold) {
      // Swiped right
      goToPrevious();
    }
    // Reset drag positions
    dragStartX.current = 0;
    dragEndX.current = 0;
  };

  // Calculate dynamic transform styles for each image in the carousel
  const getImageCarouselTransform = (index) => {
    const offset = index - currentIndex; // How far is this image from the current focused image

    let translateX = 0;
    let scale = 0.7; // Default scale for non-focused images (slightly reduced for bigger images)
    let zIndex = 10; // Default z-index

    // Adjust position and scale based on offset
    if (offset === 0) {
      // Current focused image
      translateX = 0;
      scale = 1.0; // Full scale
      zIndex = 30; // On top
    } else if (offset === -1) {
      // Image immediately to the left
      translateX = -350; // Adjusted for larger images
      scale = 0.85; // Slightly larger for immediate neighbors
      zIndex = 20;
    } else if (offset === 1) {
      // Image immediately to the right
      translateX = 350; // Adjusted for larger images
      scale = 0.85; // Slightly larger for immediate neighbors
      zIndex = 20;
    } else if (offset < 0) {
      // Images further to the left
      translateX = -600 + offset * 80; // Further left, less visible, adjusted spacing
      scale = 0.6;
      zIndex = 5;
    } else {
      // Images further to the right
      translateX = 600 + offset * 80; // Further right, less visible, adjusted spacing
      scale = 0.6;
      zIndex = 5;
    }

    // Add a slight vertical offset for a more dynamic look if desired
    const translateY = Math.abs(offset) * 15; // Slightly lower for images further from center, adjusted for visual impact

    return {
      transform: `translateX(${translateX}px) scale(${scale}) translateY(${translateY}px)`,
      zIndex: zIndex,
      borderRadius: "1rem", // Consistent border radius for all images
      // Add transition for smooth animation
      transition: "transform 0.5s ease-in-out, z-index 0.5s ease-in-out",
    };
  };

  return (
    <section id="about-us" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12">
          <span className="text-[#E0009D] font-semibold text-sm uppercase tracking-wide">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Reimagining Coordination Across Infrastructure and Services
          </h2>
        </div>

        {/* Reduced mb-8 to mb-4 */}
        <div className="max-w-4xl mx-auto mb-4">
          {/* <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Polymarq isn't just software. It's a transformative layer of
            intelligence that connects data, devices, and decisions across
            physical infrastructure, public services, and logistics.
          </p> */}
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Polymarq is the intelligence engine at the core of real-world systems—redefining how intelligence lives and acts in the physical world.
          </p>

          {/* Reduced mb-0 (default) to mb-0, and removed any extra bottom margin to bring carousel closer */}
          {/* <p className="text-lg text-gray-600 leading-relaxed">
            From edge-sensing to system-wide orchestration, we help
            organizations make real-time decisions with purpose and precision.
          </p> */}
          <p className="text-lg text-gray-600 leading-relaxed">
            We connect data, devices, and decisions across infrastructure, public services, and logistics—from edge-sensing to system-wide orchestration.
          </p>
        </div>
      </div>

      {/* Carousel Image Display Area */}
      {/* Reduced mt-8 md:mt-10 to mt-4 md:mt-6 */}
      <div
        className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mt-4 md:mt-6 flex items-center justify-center cursor-grab" // Added cursor-grab
        onMouseDown={handleDragStart} // Mouse drag start
        onMouseMove={handleDragMove} // Mouse drag move
        onMouseUp={handleDragEnd} // Mouse drag end
        onMouseLeave={handleDragEnd} // Mouse leaves container (treat as drag end)
        onTouchStart={handleDragStart} // Touch drag start
        onTouchMove={handleDragMove} // Touch drag move
        onTouchEnd={handleDragEnd} // Touch drag end
      >
        {images.map((image, index) => (
          <div
            key={image.id}
            className="absolute w-[350px] h-[220px] md:w-[450px] md:h-[280px] lg:w-[550px] lg:h-[350px] rounded-xl shadow-lg overflow-hidden"
            style={getImageCarouselTransform(index)} // Apply dynamic transform styles
          >
            <img
              src={image.src}
              alt={image.text}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-2xl"
            />
          </div>
        ))}

        {/* Removed Carousel Navigation Buttons */}
      </div>
    </section>
  );
}
