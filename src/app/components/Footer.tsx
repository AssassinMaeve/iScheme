"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // prevent mismatch between SSR & client

  // Choose colors based on theme
  const bgColor = theme === "light" ? "bg-[#e4f4fc]" : "bg-[#111827]"; // dark bg
  const textColor = theme === "light" ? "text-[#1e3a8a]" : "text-[#ededed]"; // light text for dark theme
  const dividerColor = theme === "light" ? "bg-[#1e3a8a]" : "bg-[#4b5563]"; // adjust divider

  return (
    <footer className={`${bgColor} py-25 mt-5 rounded-t-3xl shadow-top animate-slide-up`}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 px-6">
        
        {/* Left: Project Name */}
        <div>
          <h2 className={`text-6xl font-bold ${textColor}`}>iScheme</h2>
          <p className={`text-sm mt-4 italic ${textColor}`}>Your Gateway to Every Scheme</p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-col md:flex-row gap-10 text-left">
          
          {/* Pages */}
          <div>
            <h3 className={`text-3xl font-bold mb-5 ${textColor}`}>Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/home" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>Home</Link>
              </li>
              <li>
                <Link href="/about" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>About Us</Link>
              </li>
              <li>
                <Link href="/schemes" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>Schemes</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className={`text-3xl font-bold mb-5 ${textColor}`}>Information</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/screen-reader" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>Screen Reader</Link>
              </li>
              <li>
                <Link href="/contact-us" className={`transition font-semibold duration-300 hover:text-blue-500 ${textColor}`}>Contact Us</Link>
              </li>
            </ul>
          </div>
          
        </div>
        
      </div>

      {/* Divider */}
      <div className={`w-373 h-0.5 mt-12 mb-4 mrounded mx-auto ${dividerColor}`}></div>

      {/* Footer Bottom */}
      <div className={`flex justify-between items-center px-54 py-4 text-sm font-bold ${textColor}`}>
        <p>2025 iScheme. All rights reserved</p>
        <p>Developed by Team St Carlo Acutis</p>
      </div>

    </footer>
  );
}
