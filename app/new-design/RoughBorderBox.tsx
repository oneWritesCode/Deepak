"use client";

import { memo, useEffect, useRef } from "react";
import rough from "roughjs";

/**
 * Wraps children in a jittery, hand-drawn-style border, redrawn on
 * resize so it stays crisp instead of stretching a fixed-size SVG.
 */
function RoughBorderBox({
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
      svgEl.innerHTML = "";

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

    // FIX: ResizeObserver fires immediately on observe() and again on
    // every layout shift nearby — each call was previously running the
    // full rough.js redraw synchronously, which is where the 248-884ms
    // hits in your profiler were coming from. Debouncing means a burst
    // of resize/layout events (e.g. a theme toggle shifting nearby
    // elements) collapses into a single redraw, ~120ms after things
    // settle, instead of redrawing once per individual event.
    let debounceId: ReturnType<typeof setTimeout> | undefined;
    const debouncedDraw = () => {
      if (debounceId) clearTimeout(debounceId);
      debounceId = setTimeout(draw, 120);
    };

    const observer = new ResizeObserver(debouncedDraw);
    observer.observe(wrapperEl);

    return () => {
      observer.disconnect();
      if (debounceId) clearTimeout(debounceId);
    };
  }, [roughness, bowing, strokeWidth, stroke]);

  return (
    <div ref={wrapperRef} className={`relative inline-block ${className}`}>
      <svg ref={svgRef} className="pointer-events-none absolute inset-0" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// FIX: without memo, this fully re-executes (including the effect setup,
// though not necessarily the draw itself unless deps changed) any time a
// parent re-renders for an unrelated reason — e.g. a theme toggle
// re-rendering the whole tree. React.memo means it only re-renders when
// its own props (children/className/roughness/etc.) actually change.
export default memo(RoughBorderBox);