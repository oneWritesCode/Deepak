"use client";

import { useEffect, useRef } from "react";

/**
 * Replaces the native cursor with a rotated chevron that follows the
 * mouse. Mount once, near the root layout — it's `fixed`, so a single
 * instance covers the whole viewport.
 */
export default function CursorFX({ color }: { color?: string }) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Only left/top are ever touched here, never `transform` — that's
      // what keeps rotate-[-30deg] (set via className below) from being
      // silently overwritten by this handler.
      const cursorEl = cursorRef.current;
      if (cursorEl) {
        cursorEl.style.left = `${e.clientX}px`;
        cursorEl.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{ left: -100, top: -100 }}
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] text-[#1a1a1a] dark:text-[#f5f5f5]"
    >
      {/* <ChevronUp size={22} strokeWidth={2} /> */}
      <div
        className={` w-3 aspect-square shadow-2xl rounded-full ${color ? color : "bg-[#1a1a1a] dark:bg-[#f5f5f5]"}`}
      ></div>
    </div>
  );
}
