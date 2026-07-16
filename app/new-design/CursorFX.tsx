"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp } from "lucide-react";

interface CursorFXProps {
  color?: string; // expects a full Tailwind class, e.g. "bg-red-500" — not a raw hex value
}

// One data-cursor value per element — not two.
// <button data-cursor="chevron">Github</button>
// <button data-cursor="Click">View Project</button>
// <button data-cursor="Read">Blog</button>

export default function CursorFX({ color }: CursorFXProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const activeElRef = useRef<Element | null>(null);
  const [hoverValue, setHoverValue] = useState<string | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const cursorEl = cursorRef.current;
      if (!cursorEl) return;
      // Position is set imperatively and deliberately excluded from any
      // CSS transition below — transitioning left/top on every mousemove
      // event makes the cursor visibly lag behind the real pointer.
      cursorEl.style.left = `${e.clientX}px`;
      cursorEl.style.top = `${e.clientY}px`;
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as Element)?.closest("[data-cursor]");
      if (target && target !== activeElRef.current) {
        activeElRef.current = target;
        setHoverValue(target.getAttribute("data-cursor"));
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = activeElRef.current;
      if (!target) return;
      const related = e.relatedTarget as Node | null;
      if (related && target.contains(related)) return;
      activeElRef.current = null;
      setHoverValue(null);
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  const isChevron = hoverValue === "chevron";
  const isLabel = hoverValue && !isChevron;

  return (
    <div
      ref={cursorRef}
      style={{ left: -100, top: -100 }}
      className={[
        "pointer-events-none fixed z-[9999] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center hidden sm:block",
        isChevron
          ? "h-6 w-6 rounded-full border border-black/70 bg-transparent dark:border-white/70"
          : isLabel
            ? " "
            : `aspect-square w-3 rounded-full shadow-2xl ${color ? color : "bg-[#1a1a1a] border border-[#f5f5f5]/60 dark:border-[#1a1a1a]/60 dark:bg-[#f5f5f5]"}`,
      ].join(" ")}
    >
      {isChevron && (
        <ChevronUp
          size={16}
          strokeWidth={2}
          className="rotate-[-30deg] text-black dark:text-white"
        />
      )}
      {isLabel && (
        <span className="whitespace-nowrap py-0.5 px-2 border border border-[#161616]/40 dark:border-[#f5f5f5]/40 bg-[#f5f5f5] dark:bg-[#161616] text-[10px] font-light uppercase tracking-wide text-[#161616] dark:text-[#f5f5f5] rounded-xl transition-all duration-200 ease-out">
          {hoverValue}
        </span>
      )}
    </div>
  );
}
