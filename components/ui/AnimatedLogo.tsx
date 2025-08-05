"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import LogoUp from "@/public/images/home/Up.svg";
import LogoDown from "@/public/images/home/Down.svg";

const AnimatedLogo = () => {
  const [logo, setLogo] = useState(LogoUp);

  useEffect(() => {
    const interval = setInterval(() => {
      setLogo((prev) => (prev === LogoUp ? LogoDown : LogoUp));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-14 h-14">
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        className="absolute  transition-transform duration-500"
      />
    </div>
  );
};

export default AnimatedLogo;
