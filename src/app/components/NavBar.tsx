"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        iScheme
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        )}

        {/* Sign In */}
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Sign In
        </button>
      </div>
    </nav>
  );
}
