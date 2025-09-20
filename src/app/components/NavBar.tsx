"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => setMounted(true), []);

  const navLinks = [
                    { name: "Home", href: "/" },
                    { name: "Schemes", href: "#schemes" },
                    { name: "About", href: "#about" },
                    { name: "Screen Reader", href: "#reader" },
];

  return (
    <nav className="navbar flex items-center justify-between px-6 py-4 shadow-md">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold text-blue-600 dark:text-blue-400"
      >
        iScheme
      </motion.div>

      {/* Right Section */}
      <div className="hidden md:flex items-center space-x-4">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              href={link.href}
              className="transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        
        {/* Theme Toggle */}
        {mounted && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </motion.button>
        )}

        
        

      </div>
      <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                {menuOpen ? "✖" : "☰"}
            </button>
        </div>
        {/* mobile menu */}
        {menuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="navbar absolute top-16 right-0 w-2/3 h-screen shadow-lg flex flex-col items-start px-6 py-4 space-y-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="w-full transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition w-full text-left"
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          )}

          
        </motion.div>
      )}
    </nav>
  );
}
