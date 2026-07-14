"use client";

import { useEffect } from "react";

/**
 * Mounts react-scan's render-highlight overlay in development only.
 * `process.env.NODE_ENV` is inlined at build time, so the `scan()` call
 * (and react-scan itself) gets tree-shaken out of production bundles
 * entirely — this never ships to real users, it's dev-only tooling.
 */
export default function ReactScanDevTool() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    import("react-scan").then(({ scan }) => {
      scan({ enabled: true });
    });
  }, []);

  return null;
}