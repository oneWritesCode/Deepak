"use client";

import { useTheme } from "../context/ThemeContext";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative h-6 w-6 shrink-0 flex items-center justify-center"
    >
      {/* Sun — visible in light mode */}
      <Sun
        className={`absolute inset-0 h-6 w-6 text-white/60 Dark:text-white/60 transition-all duration-500 ease-in-out ${
          dark ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
        }`}
      />

      {/* Moon — visible in dark mode */}
      <Moon
        className={`absolute inset-0 h-5 w-5 text-black/60 Dark:text-white/60 transition-all duration-500 ease-in-out ${
          dark ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </button>
  );
}
