"use client";

import { useEffect, useState, useRef } from "react";

// ── Claw slash SVG paths ──────────────────────────────────────────────────────
const CLAWS = [
  "M 60 0 Q 52 120 40 260",
  "M 90 0 Q 80 130 65 260",
  "M 118 0 Q 106 140 88 260",
];

function ClawMark({
  delay,
  className,
}: {
  delay: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 160 260"
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity: 0, animation: `clawReveal 0.35s ease-out ${delay}ms forwards` }}
    >
      {CLAWS.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}

// ── Cursive name reveal ───────────────────────────────────────────────────────
function CursiveName() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative Bonheur"
      style={{
        fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
        color: "rgba(255,255,255,0.88)",
        lineHeight: 1.1,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
        textShadow: "0 0 60px rgba(255,255,255,0.06)",
        letterSpacing: "-0.01em",
      }}
    >
      hey, Deepak here
    </div>
  );
}

// ── Grid background (matches portfolio) ──────────────────────────────────────
function GridBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

// ── Ink-drip progress bar ─────────────────────────────────────────────────────
function InkBar({ durationMs }: { durationMs: number }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      setPct(Math.round(ease(t) * 100));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [durationMs]);

  return (
    <div className="w-full max-w-xs mt-10 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          loading...
        </span>
        <span
          className="tabular-nums"
          style={{
            fontFamily: "monospace",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.1em",
          }}
        >
          {String(pct).padStart(3, "0")}%
        </span>
      </div>

      {/* Track */}
      <div className="relative h-px w-full bg-white/10 overflow-visible">
        {/* Fill */}
        <div
          className="absolute top-0 left-0 h-full bg-white/50 transition-none"
          style={{ width: `${pct}%` }}
        />
        {/* Ink drip at tip */}
        <div
          className="absolute -top-[3px] -translate-x-1/2 w-[3px] h-[7px] rounded-full bg-white/60"
          style={{ left: `${pct}%`, transition: "left 0.05s linear" }}
        />
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
interface LoadingScreenProps {
  minDisplayMs?: number;
}

export default function LoadingScreen({ minDisplayMs = 2000 }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  // Track when page assets are fully loaded
  useEffect(() => {
    if (document.readyState === "complete") {
      setPageReady(true);
    } else {
      const onLoad = () => setPageReady(true);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  // After page ready + minDisplayMs extra → fade out → unmount
  useEffect(() => {
    if (!pageReady) return;
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      const removeTimer = setTimeout(() => setIsVisible(false), 900);
      return () => clearTimeout(removeTimer);
    }, minDisplayMs);
    return () => clearTimeout(fadeTimer);
  }, [pageReady, minDisplayMs]);

  if (!isVisible) return null;

  return (
    <>
      {/* Google Font — cursive matching portfolio */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap"
      />

      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111111] overflow-hidden
          transition-opacity duration-[900ms] ease-in-out
          ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <GridBg />

        {/* Claw marks — bottom-right, like the portfolio */}
        <ClawMark delay={800}  className="w-40 h-64 bottom-16 right-[12%]" />
        <ClawMark delay={950}  className="w-32 h-52 bottom-8  right-[6%] opacity-60" />

        {/* Claw marks — top-left subtle */}
        <ClawMark delay={1100} className="w-24 h-40 top-10 left-[8%] rotate-[170deg] opacity-40" />

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center px-6">
          <CursiveName />
          <InkBar durationMs={2600} />
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      <style>{`
        @keyframes clawReveal {
          from { opacity: 0; transform: scaleY(0.4); transform-origin: top; }
          to   { opacity: 1; transform: scaleY(1);   transform-origin: top; }
        }
      `}</style>
    </>
  );
}