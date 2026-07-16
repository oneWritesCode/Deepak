"use client";

import { memo, useEffect, useRef } from "react";
import rough from "roughjs";

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

export default memo(RoughBorderBox);