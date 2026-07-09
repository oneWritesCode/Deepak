"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";

/**
 * Wraps children in a jittery, hand-drawn-style border, redrawn on every
 * resize so it stays crisp instead of stretching a fixed-size SVG.
 *
 * roughness / bowing below are the rough.js equivalents of Figma's
 * "wiggle" and "angular jitter" — there's no exact 1:1 mapping, so treat
 * these as a starting point and tune by eye against your reference.
 */
export default function RoughBorderBox({
  children,
  className = "",
  roughness = 0.1,
  bowing = 0,
  strokeWidth = 0.2,
  stroke = "currentColor",
}: {
  children: React.ReactNode;
  className?: string;
  roughness?: number;
  bowing?: number;
  strokeWidth?: number;
  stroke?: string;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    const wrapperEl = wrapperRef.current;
    if (!svgEl || !wrapperEl) return;

    const draw = () => {
      const { width, height } = wrapperEl.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      svgEl.setAttribute("width", String(width));
      svgEl.setAttribute("height", String(height));
      svgEl.innerHTML = ""; // clear previous draw before redrawing at new size

      const rc = rough.svg(svgEl);
      const node = rc.rectangle(2, 2, width - 4, height - 4, {
        roughness,
        bowing,
        stroke,
        strokeWidth,
        fill: "none",
      });
      svgEl.appendChild(node);
    };

    draw();

    // Redraw on resize so the sketchy line doesn't stretch/distort
    const observer = new ResizeObserver(draw);
    observer.observe(wrapperEl);
    return () => observer.disconnect();
  }, [roughness, bowing, strokeWidth, stroke]);

  return (
    <div ref={wrapperRef} className={`relative inline-block ${className}`}>
      <svg ref={svgRef} className="pointer-events-none absolute inset-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}