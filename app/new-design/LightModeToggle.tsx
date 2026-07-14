"use client";

import { useTheme } from "../context/ThemeContext";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

export default function ThemeToggle() {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      data-cursor={dark ? "toggle light mode" : "toggle dark mode"}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative h-7 w-10 shrink-0 flex items-center justify-center hover:scale-110 hover:rotate-20 transition-transform duration-300 ease-in-out"
    >
      {/* Sun — visible in light mode */}
      <Sun
        className={`h-5 w-5 text-white/80 dark:text-white/80 transition-all duration-500 ease-in-out ${
          dark ? "rotate-0 opacity-100" : "rotate-180 opacity-0 hidden"
        }`}
      />

      {/* Moon — visible in dark mode */}
      <Moon
        className={`inset-0 h-4 w-4 text-black/80 dark:text-white/80 transition-all duration-500 ease-in-out ${
          dark ? "rotate-180 opacity-0 hidden" : "rotate-0 opacity-100"
        }`}
      />
    </button>
  );
}
