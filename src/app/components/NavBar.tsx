"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
                    { name: "Home", href: "/" },
                    { name: "Schemes", href: "/schemes" },
                    { name: "About", href: "/about" },
                    { name: "Contact Us", href: "/contact" },
                    { name: "Screen Reader", href: "/reader" },
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
      <div className="flex items-center space-x-4">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <Link
              href={"#"}
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

        {/* Sign In */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
        >
          Sign In
        </motion.button>
      </div>
    </nav>
  );
}
