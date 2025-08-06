"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import AnimatedLogo from "./ui/AnimatedLogo";
import Logo from "@/public/images/ui/logo.svg";
import Image from "next/image";

export default function Header() {
  // State for managing the visibility of desktop dropdowns and mobile menu
  const [isBlogsOpen, setIsBlogsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs for detecting clicks outside of dropdowns and the mobile menu
  const blogsRef = useRef(null);
  const resourcesRef = useRef(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu container
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null); // Ref for the hamburger button

  // Effect to handle clicks outside of opened menus/dropdowns to close them
  useEffect(() => {
    function handleClickOutside(event) {
      // Close desktop "Blogs" dropdown if clicked outside
      if (
        blogsRef.current &&
        !(blogsRef.current as Element).contains(event.target)
      ) {
        setIsBlogsOpen(false);
      }
      // Close desktop "Resources" dropdown if clicked outside
      if (
        resourcesRef.current &&
        !(resourcesRef.current as HTMLElement).contains(event.target)
      ) {
        setIsResourcesOpen(false);
      }
      // Close desktop "Products" dropdown if clicked outside
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }

      // Close mobile menu if click is outside the menu AND not on the hamburger button
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]); // Re-run effect if mobile menu state changes

  // Toggles the "Blogs" dropdown visibility
  const toggleBlogs = () => {
    setIsBlogsOpen(!isBlogsOpen);
    setIsResourcesOpen(false); // Ensure "Resources" dropdown is closed
    setIsProductsOpen(false); // Ensure "Products" dropdown is closed
  };

  // Toggles the "Resources" dropdown visibility
  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
    setIsBlogsOpen(false); // Ensure "Blogs" dropdown is closed
    setIsProductsOpen(false); // Ensure "Products" dropdown is closed
  };

  // Toggles the "Products" dropdown visibility
  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    setIsBlogsOpen(false); // Ensure "Blogs" dropdown is closed
    setIsResourcesOpen(false); // Ensure "Resources" dropdown is closed
  };

  // Closes the mobile menu and any open mobile dropdowns
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsBlogsOpen(false);
    setIsResourcesOpen(false);
    setIsProductsOpen(false);
  };

  return (
    // Header container: white background, sticky to top, z-index for layering, subtle shadow
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Navigation container: max-w-7xl for content, centered, responsive padding */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main header row: flex layout, space between items, vertically centered, fixed height */}
        <div className="flex justify-between items-center h-20">
          {/* Logo section */}
          <div className="flex-shrink-0">
            {/* Link to home, with logo and text */}
            <Link
              href="/"
              className="flex items-center justify-center "
              onClick={closeMobileMenu}
            >
              {/* Polymarq Logo SVG - Scalable vector graphic for crisp display */}
              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="#6366F1"/>
                <path d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6Z" fill="#A78BFA"/>
                <path d="M12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16Z" fill="#C4B5FD"/>
              </svg> */}
              <Image
                src={Logo}
                alt="Polymarq Logo"
                className="h-8 w-auto mr-2"
                width={32}
                height={32}
              />
              {/* <AnimatedLogo /> */}
              {/* Logo text */}
              <span className="text-xl  font-bold text-gray-900">Polymarq</span>
            </Link>
          </div>

          {/* Desktop Navigation Links - Hidden on mobile, flex on medium and larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-700 text-base font-medium hover:text-[#5F57FF] transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about-us"
              className="text-gray-700 text-base font-medium hover:text-[#5F57FF] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#solutions"
              className="text-gray-700 text-base font-medium hover:text-[#5F57FF] transition-colors"
            >
              Solutions
            </Link>

            {/* Desktop Blogs Dropdown */}
            <div className="relative" ref={blogsRef}>
              <button
                className="text-gray-700 text-base font-medium hover:text-[#5F57FF] flex items-center space-x-1 transition-colors focus:outline-none"
                onClick={toggleBlogs}
              >
                <span>Blogs</span>
                {/* Dropdown arrow icon, rotates when open */}
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isBlogsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown content, positioned absolutely */}
              {isBlogsOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="blogs-menu-button"
                  >
                    {/* <Link
                      href="/blogs/polymarq-waste-management-blog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Waste Management Blog
                    </Link> */}
                    <Link
                      href="/blogs/Polymarq_Blog_TAAS"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Blog TAAS
                    </Link>
                    <Link
                      href="/blogs/polymarq-chips-blog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Edge AI
                    </Link>
                    <Link
                      href="/blogs/updated_two_tier_blog"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Distributed Two-tier AI
                    </Link>
                    {/* <Link href="/blogs/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                      Case Studies
                    </Link>
                    <Link href="/blogs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-100 font-medium" role="menuitem">
                      View All Blogs
                    </Link> */}
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                className="text-gray-700 text-base font-medium hover:text-[#5F57FF] flex items-center space-x-1 transition-colors focus:outline-none"
                onClick={toggleResources}
              >
                <span>Resources</span>
                {/* Dropdown arrow icon, rotates when open */}
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="resources-menu-button"
                  >
                    <Link
                      href="https://pricing.polymarq.com/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Pricing (Waste Management, Nigeria)
                    </Link>
                    <Link
                      href="/resources/faq"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="#focus-areas"
              className="text-gray-700 text-base font-medium hover:text-[#5F57FF] transition-colors"
            >
              Focus Areas
            </Link>

            {/* Desktop Products Dropdown */}
            <div className="relative" ref={productsRef}>
              <button
                className="text-gray-700 text-base font-medium hover:text-[#5F57FF] flex items-center space-x-1 transition-colors focus:outline-none"
                onClick={toggleProducts}
              >
                <span>Products</span>
                {/* Dropdown arrow icon, rotates when open */}
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="products-menu-button"
                  >
                    <Link
                      href="#products"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Smart Waste Management
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Us Button (Desktop) - Hidden on mobile, block on medium and larger screens */}
          <div className="hidden md:block">
            <a href="mailto:support@polymarq.com">

            <button className="bg-[#5F57FF] hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-colors shadow-md hover:shadow-lg">
              Contact Us
            </button>
            </a>
          </div>

          {/* Mobile menu button (Hamburger icon) - Visible on mobile, hidden on medium and larger screens */}
          <div className="md:hidden">
            <button
              ref={mobileMenuButtonRef} // Attach ref for click outside detection
              className="mobile-menu-button text-gray-600 hover:text-gray-900 p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu" // Accessibility
            >
              {/* Hamburger icon SVG */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (conditionally rendered based on isMobileMenuOpen state) */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="mobile-menu-container md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-200 shadow-lg py-4 px-4"
          >
            <div className="space-y-4">
              <Link
                href="#home"
                className="block text-xl font-medium text-gray-800 hover:text-[#5F57FF] py-2 px-3 rounded-md"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="#about-us"
                className="block text-xl font-medium text-gray-800 hover:text-[#5F57FF] py-2 px-3 rounded-md"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
              <Link
                href="#solutions"
                className="block text-xl font-medium text-gray-800 hover:text-[#5F57FF] py-2 px-3 rounded-md"
                onClick={closeMobileMenu}
              >
                Solutions
              </Link>

              {/* Blogs Dropdown */}
              <div>
                <button
                  className="w-full text-left text-xl font-medium text-gray-800 hover:text-[#5F57FF] flex items-center justify-between py-2 px-3 rounded-md"
                  onClick={toggleBlogs}
                >
                  <span>Blogs</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      isBlogsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isBlogsOpen && (
                  <div className="pl-6 pt-2 space-y-2">
                    
                    <Link
                      href="/blogs/Polymarq_Blog_TAAS"
                      className="block text-lg text-gray-700 hover:text-[#5F57FF]"
                      onClick={closeMobileMenu}
                    >
                      Blog TAAS
                    </Link>
                    <Link
                      href="/blogs/polymarq-chips-blog"
                      className="block text-lg text-gray-700 hover:text-[#5F57FF]"
                      onClick={closeMobileMenu}
                    >
                      Edge AI
                    </Link>
                    <Link
                      href="/blogs/updated_two_tier_blog"
                      className="block text-lg text-gray-700 hover:text-[#5F57FF]"
                      onClick={closeMobileMenu}
                    >
                      Distributed Two-tier AI
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div>
                <button
                  className="w-full text-left text-xl font-medium text-gray-800 hover:text-[#5F57FF] flex items-center justify-between py-2 px-3 rounded-md"
                  onClick={toggleResources}
                >
                  <span>Resources</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      isResourcesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isResourcesOpen && (
                  <div className="pl-6 pt-2 space-y-2">
                    <Link
                      href="https://pricing.polymarq.com/"
                      className="block text-lg text-gray-700 hover:text-[#5F57FF]"
                      onClick={closeMobileMenu}
                    >
                      Pricing (Waste Management, Nigeria)
                    </Link>
                    <Link
                      href="/resources/faq"
                      className="block text-lg text-gray-700 hover:text-[#5F57FF]"
                      onClick={closeMobileMenu}
                    >
                      FAQ
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="#focus-areas"
                className="block text-xl font-medium text-gray-800 hover:text-[#5F57FF] py-2 px-3 rounded-md"
                onClick={closeMobileMenu}
              >
                Focus Areas
              </Link>

              {/* Products Dropdown */}
              <div>
                <button
                  className="w-full text-left text-xl font-medium text-gray-800 hover:text-[#5F57FF] flex items-center justify-between py-2 px-3 rounded-md"
                  onClick={toggleProducts}
                >
                  <span>Products</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="pl-6 pt-2 space-y-2">
                    <Link
                      href="#products"
                      className="block text-lg text-gray-700 hover:text-[#5F57FF]"
                      onClick={closeMobileMenu}
                    >
                      Smart Waste Management
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <div className="pt-4">
                <a href="mailto:support@polymarq.com">

                <button
                  className="w-full bg-[#5F57FF] hover:bg-[#5F57FF] text-white px-6 py-3 rounded-md text-base font-medium transition-colors"
                  onClick={closeMobileMenu}
                  >
                  Contact Us
                </button>
                  </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
