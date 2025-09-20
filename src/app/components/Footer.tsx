"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // prevent mismatch between SSR & client




  // Theme-based colors
  const bgColor = theme === "light" ? "bg-[#e4f4fc]" : "bg-[#111827]";
  const textColor = theme === "light" ? "text-[#1e3a8a]" : "text-[#ededed]";
  const dividerColor = theme === "light" ? "bg-[#1e3a8a]" : "bg-[#4b5563]";

  return (
    <footer className={`${bgColor} py-10 mt-6 rounded-t-3xl shadow-top animate-slide-up`}>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-6">

        {/* Left: Project Name */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${textColor}`}>iScheme</h2>
          <p className={`text-sm sm:text-base mt-2 md:mt-4 italic ${textColor}`}>
            Your Gateway to Every Scheme
          </p>

        </div>

        {/* Right: Links */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-center sm:text-left">
          
          {/* Pages */}
          <div>



            <h3 className={`text-lg sm:text-xl font-bold mb-3 ${textColor}`}>Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/home" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/schemes" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>
                  Schemes
                </Link>
              </li>

            </ul>
          </div>

          {/* Information */}
          <div>



            <h3 className={`text-lg sm:text-xl font-bold mb-3 ${textColor}`}>Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/screen-reader" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>
                  Screen Reader
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>
                  Contact Us
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}

      <div className={`w-11/12 md:w-4/5 h-0.5 mt-8 mb-4 rounded mx-auto ${dividerColor}`}></div>

      {/* Footer Bottom */}
      <div className={`flex flex-col md:flex-row justify-between items-center gap-3 text-center text-sm font-bold px-49 ${textColor}`}>
        <p>2025 iScheme. All rights reserved</p>
        <p>Developed by Team St Carlo Acutis</p>
      </div>

    </footer>
  );
}
