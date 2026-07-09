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
      className="relative h-7 w-7 shrink-0 flex items-center justify-center"
    >
      {/* Sun — visible in light mode */}
      <Sun
        className={`absolute m-0.5 inset-0 h-5 w-5 text-white/80 Dark:text-white/80 transition-all duration-500 ease-in-out ${
          dark ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
        }`}
      />

      {/* Moon — visible in dark mode */}
      <Moon
        className={`inset-0 h-4 w-4 text-black/80 Dark:text-white/80 transition-all duration-500 ease-in-out ${
          dark ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
        }`}
      />
    </button>
  );
}
