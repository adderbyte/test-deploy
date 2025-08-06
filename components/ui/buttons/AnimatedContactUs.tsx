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
      text-white font-semibold text-lg
      px-2 py rounded-2xl
      min-w-[180px] h-[60px]
      flex items-center justify-center gap-3
      border border-white/30
      shadow-xl hover:shadow-2xl
      transition-all duration-500 ease-out
      transform hover:scale-105 active:scale-95
      disabled:hover:scale-100 disabled:cursor-not-allowed
      backdrop-blur-sm
    `;

    switch (animationStep) {
      case 0:
        return `${baseStyles} bg-gradient-to-r from-[#6C63FF] to-[#D23D9D] hover:from-[#5B52E8] hover:to-[#C22B8A]`;
      case 1:
        return `${baseStyles} bg-gradient-to-r from-[#5B52E8] to-[#C22B8A] animate-pulse`;
      case 2:
        return `${baseStyles} bg-gradient-to-r from-emerald-500 to-green-500 shadow-green-500/10`;
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
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6C63FF]/50 to-[#D23D9D]/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
        
        {/* Button content */}
        <div className="relative z-10 flex items-center gap-3">
          {renderContent()}
        </div>
      </button>
    </a>
  );
};

export default AnimatedContactUs;
