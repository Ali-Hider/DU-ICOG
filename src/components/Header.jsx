import React, { useState, useEffect, useRef } from "react";
import duLogo from "../assets/DU-Logo.png";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      const navTop = navRef.current?.getBoundingClientRect().top ?? 0;

      if (window.scrollY > lastScrollY && navTop <= 0) {
        // scrolling down and nav is at top → hide header
        setShowHeader(false);
      } else {
        // scrolling up → show header
        setShowHeader(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <>
      {/* Header */}
      <header
        className={`w-full bg-[#540605] transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 flex items-center py-2 sm:py-3 md:py-4">
          <div className="flex-shrink-0">
            <a href="https://du.ac.bd" target="_blank" rel="noreferrer">
              <img
                src={duLogo}
                alt="DU Logo"
                className="h-7 sm:h-8 md:h-12 lg:h-16"
              />
            </a>
          </div>

          <h1
            className="
              ml-2 sm:ml-4 md:ml-10 lg:ml-20
              text-xs sm:text-lg md:text-3xl lg:text-4xl
              font-extrabold text-gray-100
              tracking-tight leading-snug break-words
            "
            style={{ fontFamily: `'Playfair Display', serif` }}
          >
            International Centre for Ocean Governance
          </h1>
        </div>
      </header>

      {/* NavHead placeholder for measuring position */}
      <div ref={navRef} />
    </>
  );
}
