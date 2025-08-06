import { Loader2, Mail, ThumbsUpIcon } from "lucide-react";
import React, { useState } from "react";

// Define the type for stateTexts prop
type AnimatedContactUsProps = {
  stateTexts?: {
    idle?: string;
    loading?: string;
    success?: string;
  };
  hrefr?: string;
};

const AnimatedContactUs: React.FC<AnimatedContactUsProps> = ({
  stateTexts = {
    idle: "Contact Us",
    loading: "Connecting...",
    success: "Message Sent!",
  },
  hrefr = "#",
}) => {
  const [animationStep, setAnimationStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const startAnimation = () => {
    setAnimationStep(1);
    
    setTimeout(() => {
      setAnimationStep(2);
    }, 2000);
    
    setTimeout(() => {
      setAnimationStep(0);
    }, 4000);
  };

  const getButtonStyles = () => {
    const baseStyles = `
      relative overflow-hidden group
      text-black font-semibold text-lg
      px-2 py rounded-2xl
      min-w-[180px] h-[60px]
      flex items-center justify-center gap-3
      border border-black
      bg-white
      shadow-md hover:shadow-lg
      transition-all duration-500 ease-out
      transform hover:scale-105 active:scale-95
      disabled:hover:scale-100 disabled:cursor-not-allowed
    `;

    switch (animationStep) {
      case 1:
        return `${baseStyles} animate-pulse`;
      default:
        return baseStyles;
    }
  };

  const renderContent = () => {
    switch (animationStep) {
      case 0:
        return (
          <>
            <Mail 
              className={`w-5 h-5 transition-all duration-300 ${
                isHovered ? 'rotate-12 scale-110' : ''
              }`} 
            />
            <span className="transition-all duration-300">
              {stateTexts.idle}
            </span>
          </>
        );
      
      case 1:
        return (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="animate-pulse">
              {stateTexts.loading}
            </span>
          </>
        );
      
      case 2:
        return (
          <>
            <ThumbsUpIcon className="w-5 h-5 animate-bounce" />
            <span>
              {stateTexts.success}
            </span>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <a href={hrefr}>
      <button
        disabled={animationStep !== 0}
        onClick={startAnimation}
        className={getButtonStyles()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* No background overlay or glow effects for monochrome */}
        <div className="relative z-10 flex items-center gap-3">
          {renderContent()}
        </div>
      </button>
    </a>
  );
};

export default AnimatedContactUs;
