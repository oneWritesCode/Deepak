"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { ReactNode } from "react";

// Matches NAV_ITEMS' existing `corner` field exactly — no translation
// table needed between the two anymore.
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function getCornerStart(corner: Corner) {
  const w = typeof window !== "undefined" ? window.innerWidth : 0;
  const h = typeof window !== "undefined" ? window.innerHeight : 0;
  const fromLeft = corner.endsWith("left");
  const fromTop = corner.startsWith("top");
  return {
    x: (fromLeft ? -1 : 1) * w * 0.75,
    y: (fromTop ? -1 : 1) * h * 0.75,
    rotate: fromLeft ? (fromTop ? -8 : 8) : fromTop ? 8 : -8,
  };
}

export default function SlideOverPanel({
  open,
  onClose,
  corner,
  children,
}: {
  open: boolean;
  onClose: () => void;
  corner: Corner;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-[min(92vw,1300px)] max-h-[vh] overflow-y-auto rounded-4  rounded-4xl border border-black/10 dark:border-white/10 bg-[#f5f5f5] dark:bg-[#1a1a1a] text-black dark:text-white p-8 shadow-2xl"
            initial={(() => {
              const { x, y, rotate } = getCornerStart(corner);
              return { x, y, scale: 0.35, rotate, opacity: 0 };
            })()}
            animate={{ x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 }}
            exit={(() => {
              const { x, y, rotate } = getCornerStart(corner);
              return { x, y, rotate, scale: 0.35, opacity: 0 };
            })()}
            transition={{
              // Position/scale/rotate get real spring physics — continuous,
              // velocity-based motion, which is what actually reads as a
              // "throw" instead of three points connected by an eased curve.
              default: { type: "spring", bounce: 0.45, duration: 0.7 },
              // Opacity shouldn't bounce — a flickering fade reads as a
              // glitch, not momentum, so it gets its own plain tween.
              opacity: { duration: 0.2 },
            }}
          >
            <div className="text-sm leading-relaxed">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}