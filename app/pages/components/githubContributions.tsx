"use client";

// components/GitHubContributions.tsx
// Drop this below your tech stack section.
// Requires the API route at app/api/github-contributions/route.ts

import { useEffect, useState } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
type Level =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: Level;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface CalendarData {
  totalContributions: number;
  weeks: Week[];
}

// ── Color mapping — monochrome to match your portfolio ────────────────────────
const LEVEL_STYLES: Record<Level, { bg: string; border: string }> = {
  NONE: { bg: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.06)" },
  FIRST_QUARTILE: {
    bg: "rgba(255,255,255,0.18)",
    border: "rgba(255,255,255,0.15)",
  },
  SECOND_QUARTILE: {
    bg: "rgba(255,255,255,0.40)",
    border: "rgba(255,255,255,0.30)",
  },
  THIRD_QUARTILE: {
    bg: "rgba(255,255,255,0.65)",
    border: "rgba(255,255,255,0.50)",
  },
  FOURTH_QUARTILE: {
    bg: "rgba(255,255,255,0.92)",
    border: "rgba(255,255,255,0.70)",
  },
};

const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

// ── Tooltip ───────────────────────────────────────────────────────────────────
function Tooltip({
  day,
  x,
  y,
}: {
  day: ContributionDay;
  x: number;
  y: number;
}) {
  const date = new Date(day.date + "T00:00:00");
  const label = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const count = day.contributionCount;

  return (
    <div
      className="fixed z-50 pointer-events-none"
      style={{
        left: x,
        top: y - 44,
        transform: "translateX(-50%)",
        background: "rgba(20,20,20,0.95)",
        border: "0.5px solid rgba(255,255,255,0.15)",
        borderRadius: 6,
        padding: "5px 10px",
        whiteSpace: "nowrap",
      }}
    >
      <p
        style={{
          fontSize: 11,
          color: "rgba(255,255,255,0.9)",
          margin: 0,
        }}
      >
        {count === 0
          ? "No contributions"
          : `${count} contribution${count !== 1 ? "s" : ""}`}
      </p>
      <p
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.4)",
          margin: "2px 0 0",
        }}
      >
        {label}
      </p>
    </div>
  );
}

// ── Skeleton loader ───────────────────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex gap-[3px] min-w-max">
        {Array.from({ length: 53 }).map((_, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {Array.from({ length: 7 }).map((_, d) => (
              <div
                key={d}
                className="w-[13px] h-[13px] rounded-[2px]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  animation: `pulse 1.5s ease-in-out ${((w * 7 + d) % 20) * 0.05}s infinite`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function GitHubContributions() {
  const [data, setData] = useState<CalendarData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    day: ContributionDay;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Failed to load contributions"));
  }, []);

  // Build month label positions from week data
  const monthPositions: { label: string; col: number }[] = [];
  if (data) {
    let lastMonth = -1;
    data.weeks.forEach((week, wi) => {
      const firstDay = week.contributionDays[0];
      if (!firstDay) return;
      const month = new Date(firstDay.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        monthPositions.push({ label: MONTH_LABELS[month], col: wi });
        lastMonth = month;
      }
    });
  }

  return (
    <section className="w-full sourGummy pt-8">
      {/* Section heading — matches portfolio cursive style */}
      <h2 className="Bonheur mt-4 md:mt-6 text-4xl md:text-6xl">
        Github Contributions
      </h2>

      {data && (
        <p
          className="mb-4 "
          style={{
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {data.totalContributions.toLocaleString()} contributions in the last
          year
        </p>
      )}

      {error && (
        <p
          style={{
            color: "rgba(255,100,100,0.7)",
            fontSize: "0.8rem",
          }}
        >
          {error}
        </p>
      )}

      {!data && !error && <Skeleton />}

      {data && (
        <div className="w-full overflow-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div style={{ display: "inline-block", minWidth: "max-content" }}>
            {/* Month labels row */}
            <div
              style={{
                display: "flex",
                gap: 3,
                marginLeft: 26,
                marginBottom: 4,
              }}
            >
              {data.weeks.map((_, wi) => {
                const hit = monthPositions.find((m) => m.col === wi);
                return (
                  <div key={wi} style={{ width: 13, flexShrink: 0 }}>
                    {hit && (
                      <span
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,0.7)",
                          whiteSpace: "nowrap",
                        }}
                        className=""
                      >
                        {hit.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Grid with day labels */}
            <div style={{ display: "flex", gap: 4 }}>
              {/* Day-of-week labels */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  width: 22,
                }}
              >
                {DAY_LABELS.map((label, i) => (
                  <div
                    key={i}
                    style={{
                      height: 13,
                      fontSize: 9,
                      color: "rgba(255,255,255,0.7)",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className=""
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* Contribution cells */}
              <div
                style={{ display: "flex", gap: 3 }}
                className="pb-2 backdrop-blur-[1px]"
              >
                {data.weeks.map((week, wi) => (
                  <div
                    key={wi}
                    style={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    {week.contributionDays.map((day) => {
                      const style =
                        LEVEL_STYLES[day.contributionLevel] ??
                        LEVEL_STYLES.NONE;
                      return (
                        <div
                          key={day.date}
                          style={{
                            width: 14,
                            height: 14,
                            borderRadius: 2,
                            background: style.bg,
                            border: `0.5px solid ${style.border}`,
                            cursor: "default",
                            transition:
                              "transform 0.1s ease, background 0.1s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.transform =
                              "scale(1.4)";
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            setTooltip({
                              day,
                              x: rect.left + rect.width / 2,
                              y: rect.top,
                            });
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.transform =
                              "scale(1)";
                            setTooltip(null);
                          }}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                backdropFilter: "blur(4px)",
                gap: 6,
                marginTop: 10,
                marginLeft: 26,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                less
              </span>
              {(
                [
                  "NONE",
                  "FIRST_QUARTILE",
                  "SECOND_QUARTILE",
                  "THIRD_QUARTILE",
                  "FOURTH_QUARTILE",
                ] as Level[]
              ).map((l) => (
                <div
                  key={l}
                  style={{
                    width: 11,
                    height: 11,
                    borderRadius: 2,
                    background: LEVEL_STYLES[l].bg,
                    border: `0.5px solid ${LEVEL_STYLES[l].border}`,
                  }}
                />
              ))}
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                more
              </span>
            </div>
          </div>
        </div>
      )}

      {tooltip && <Tooltip day={tooltip.day} x={tooltip.x} y={tooltip.y} />}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.08; }
        }
      `}</style>
    </section>
  );
}
