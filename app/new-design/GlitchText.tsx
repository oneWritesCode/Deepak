"use client";

import { useEffect, useRef } from "react";

const CHARS = "abcABCdD&*||.$";

/**
 * Scrambles from the previous text to the new one, character by character,
 * settling left-to-right at slightly randomized speeds. Re-runs any time
 * `text` changes — that's the only trigger, no manual replay needed.
 */
export default function GlitchText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const prevTextRef = useRef(text);
  const queueRef = useRef<
    { from: string; to: string; start: number; end: number; char?: string }[]
  >([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromText = prevTextRef.current;
    const toText = text;
    prevTextRef.current = text;

    const length = Math.max(fromText.length, toText.length);
    queueRef.current = Array.from({ length }, (_, i) => {
      const from = fromText[i] || "";
      const to = toText[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      return { from, to, start, end };
    });

    frameRef.current = 0;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const update = () => {
      let output = "";
      let complete = 0;

      for (const item of queueRef.current) {
        if (frameRef.current >= item.end) {
          complete++;
          output += item.to;
        } else if (frameRef.current >= item.start) {
          if (!item.char || Math.random() < 0.28) {
            item.char = CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          output += item.char;
        } else {
          output += item.from;
        }
      }

      el.textContent = output;

      if (complete < queueRef.current.length) {
        frameRef.current++;
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}