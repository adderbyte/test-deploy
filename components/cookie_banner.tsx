'use client'
import { Cookie } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check for consent on component mount
  useEffect(() => {
    // Check if the 'cookie_consent' item exists in local storage
    const consentGiven = localStorage.getItem('cookie_consent');
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []); // The empty dependency array ensures this effect runs only once

  // Function to handle the 'Accept' action
  const handleAcceptCookies = () => {
    // Set a flag in local storage to remember the user's choice
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50">
      <div className="max-w-4xl mx-auto bg-slate-900 text-white rounded-lg shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-700">
        <div className="flex items-center gap-4 flex-grow">
          <Cookie className="w-8 h-8 text-blue-400" />
          <p className="text-sm font-light text-gray-300">
            This website uses cookies to ensure you get the best experience on our site. By continuing to use our service, you agree to our use of cookies.
            <a href="/cookie-policy" className="text-blue-400 hover:underline ml-1">
              Read our policy.
            </a>
          </p>
        </div>
        <button
          onClick={handleAcceptCookies}
          className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-full shadow-lg transition-colors duration-200"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;

