"use client";

import { useEffect, useState } from "react";

interface LoadingProps {
  duration?: number;
}

const GREETINGS = [
  "Hello",
  "Bonjour",
  "Hola",
  "Ciao",
  "नमस्ते",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Olá",
  "Привет",
  "Hallo",
  "مرحبًا",
];

export default function Loading({ duration = 3000 }: LoadingProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(true);

  // Change greeting every 500ms
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % GREETINGS.length);
        setAnimate(true);
      }, 120);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Remove loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  //   if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-[#f5f5f5] dark:bg-[#181818] text-[#333] dark:text-[#f5f5f5] 
    ${visible ? "opacity-100 z-[9999]" : "opacity-0 z-[-9999]"} transition-all duration-1000
    `}
    >
      <span
        className={`text-4xl md:text-5xl uppercase transition-all duration-200 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{ fontFamily: "var(--font-anton)" }}
      >
        {GREETINGS[index]}
      </span>
    </div>
  );
}
