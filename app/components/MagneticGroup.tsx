"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Same magnetic logic as MagneticElement, but rendered as an SVG <g>
 * instead of a <div> — a div can never legally be a child of <svg>, which
 * is why the previous version had to wrap the entire svg from outside.
 * This wraps just the <text>, leaving <defs>/<path> (the invisible ring
 * guide) untouched.
 */
export default function MagneticGroup({
  children,
  maxOffset = 18,
  pullStrength = 0.4,
}: {
  children: ReactNode;
  maxOffset?: number;
  pullStrength?: number;
}) {
  const ref = useRef<SVGGElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 14, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 14, mass: 0.4 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      let offsetX = (e.clientX - centerX) * pullStrength;
      let offsetY = (e.clientY - centerY) * pullStrength;
      const magnitude = Math.hypot(offsetX, offsetY);
      if (magnitude > maxOffset) {
        offsetX = (offsetX / magnitude) * maxOffset;
        offsetY = (offsetY / magnitude) * maxOffset;
      }
      x.set(offsetX);
      y.set(offsetY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [maxOffset, pullStrength, x, y]);

  return (
    <motion.g ref={ref} style={{ x: springX, y: springY }}>
      {children}
    </motion.g>
  );
}
