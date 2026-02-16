"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const MeetupHeader: React.FC = () => {
  // 1. State for Header Visibility (Hide Down / Show Up)
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // We add a small threshold (> 10) to prevent triggering at the very top
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false); // Scrolling DOWN -> Hide
      } else {
        setIsVisible(true);  // Scrolling UP -> Show
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    // 2. Apply transition and dynamic translation based on isVisible state
    <div 
      className={`fixed top-5 w-full z-50 px-4 md:px-0 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-[200%]"
      }`}
    >
      <header
        className="mx-auto pointer-events-auto max-w-3xl md:max-w-7xl flex justify-between items-center px-4 md:px-8 py-2 md:py-3 bg-white"
        style={{
          borderRadius: "40px",
          boxShadow: "0 4px 24px -8px rgba(50,50,50,0.10)",
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/images/WhatsappPage/whatsapp-logo.png"
            alt="logo"
            height={1000}
            width={1000}
            className="w-[100px] md:w-[160px] h-auto object-contain"
          />
        </div>

        {/* Main actions */}
        <div className="flex items-center gap-2 md:gap-5">
          {/* CTA Button - Always visible in header */}
          <a href="#deal-form">
            <button className="bg-[#192890] hover:bg-blue-800 text-white text-sm md:text-lg font-semibold px-6 py-3 rounded-full transition shadow-lg hover:shadow-xl active:scale-95">
              Secure Your Spot
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default MeetupHeader;