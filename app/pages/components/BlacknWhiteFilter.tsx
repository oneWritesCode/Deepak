import React from "react";

interface GrayscaleFilterProps {
  children: React.ReactNode;
  enabled?: boolean;         // toggle on/off, default true
  intensity?: number;        // 0–100, how much grayscale, default 100
  className?: string;        // extra classes on the wrapper
}

export default function BlacknWhiteFilter({
  children,
  enabled = true,
  intensity = 100,
  className = "",
}: GrayscaleFilterProps): React.ReactElement {
  return (
    <div
      className={`relative inline-block ${className}`}
      style={{
        filter: enabled ? `grayscale(${intensity}%)` : "none",
        transition: "filter 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}