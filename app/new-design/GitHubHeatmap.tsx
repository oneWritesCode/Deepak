"use client";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

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

// ── Color mapping — untouched ──────────────────────────────────────────────────
const LEVEL_CLASS: Record<Level, string> = {
  NONE: "bg-black/6  dark:bg-white/6",
  FIRST_QUARTILE: "bg-black/20 dark:bg-white/20",
  SECOND_QUARTILE: "bg-black/40 dark:bg-white/40",
  THIRD_QUARTILE: "bg-black/65 dark:bg-white/65",
  FOURTH_QUARTILE: "bg-black/88 dark:bg-white/88",
};

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const GRID_LEFT_OFFSET = 20;

// ── Tooltip ───────────────────────────────────────────────────────────────────
function Tooltip({ day, x, y }: { day: ContributionDay; x: number; y: number }) {
  const date = new Date(day.date + "T00:00:00");
  const label = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const count = day.contributionCount;

  return (
    <div
      className="fixed z-[9999] pointer-events-none bg-[#161616] dark:bg-[#f5f5f5] border border-white/10 dark:border-black/10 rounded-md px-2.5 py-1.5"
      style={{
        left: x,
        top: y - 48,
        transform: "translateX(-50%)",
        whiteSpace: "nowrap",
      }}
    >
      <p className="text-[10px] text-white dark:text-black leading-none">
        {count === 0 ? "No contributions" : `${count} contribution${count !== 1 ? "s" : ""}`}
      </p>
      <p className="text-[9px] text-white/40 dark:text-black/40 mt-0.5">{label}</p>
    </div>
  );
}

// ── Cell grid — split out and memoized ──────────────────────────────────────
// This is the actual fix: this is the 371-node subtree. It only takes
// `weeks` (data) and two callbacks as props. As long as those callbacks
// are stable references, React.memo means this subtree is now IMMUNE to
// the tooltip state changing in the parent — which is what was previously
// forcing a full re-render (recreate 371 divs + 371 closures) on every
// single mouseenter as you dragged the cursor across the grid.
const ContributionGrid = memo(function ContributionGrid({
  weeks,
  onCellHover,
  onCellLeave,
}: {
  weeks: Week[];
  onCellHover: (day: ContributionDay, x: number, y: number) => void;
  onCellLeave: () => void;
}) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {weeks.map((week, wi) => (
        <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {week.contributionDays.map((day) => (
            <div
              key={day.date}
              className={`w-[10px] h-[10px] rounded-[2px] cursor-default transition-transform duration-100 hover:scale-150 ${LEVEL_CLASS[day.contributionLevel] ?? LEVEL_CLASS.NONE}`}
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                onCellHover(day, rect.left + rect.width / 2, rect.top);
              }}
              onMouseLeave={onCellLeave}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

// ── Skeleton loader ──────────────────────────────────────────────────────────
function Skeleton() {
  return (
    <div className="w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div style={{ display: "inline-block", minWidth: "max-content" }}>
        <div style={{ height: 12, marginBottom: 3, marginLeft: GRID_LEFT_OFFSET }} />

        <div style={{ display: "flex", gap: 4 }}>
          <div className="flex flex-col w-4 gap-[3px]">
            {DAY_LABELS.map((_, i) => (
              <div key={i} className="h-2.5" />
            ))}
          </div>

          <div className="flex gap-[3px]">
            {Array.from({ length: 53 }).map((_, w) => (
              <div key={w} className="flex flex-col gap-[3px]">
                {Array.from({ length: 7 }).map((_, d) => (
                  <div
                    key={d}
                    className="w-[10px] h-[10px] rounded-[2px] bg-black/6 dark:bg-white/6 animate-pulse"
                    style={{ animationDelay: `${((w * 7 + d) % 20) * 0.05}s` }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 12, marginTop: 8, marginLeft: GRID_LEFT_OFFSET }} />
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
function GitHubHeatmap() {
  const [data, setData] = useState<CalendarData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ day: ContributionDay; x: number; y: number } | null>(null);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Failed to load contributions"));
  }, []);

  // Stable callback references — this is what actually lets ContributionGrid's
  // React.memo work. setTooltip itself is already stable (React guarantees
  // setState identity never changes), so an empty dep array is correct here.
  const handleCellHover = useCallback((day: ContributionDay, x: number, y: number) => {
    setTooltip({ day, x, y });
  }, []);

  const handleCellLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  // FIX: was recomputed on every render (including every tooltip-driven
  // re-render of this parent). Now only recalculates when `data` changes.
  const monthPositions = useMemo(() => {
    const positions: { label: string; col: number }[] = [];
    if (!data) return positions;
    let lastMonth = -1;
    data.weeks.forEach((week, wi) => {
      const firstDay = week.contributionDays[0];
      if (!firstDay) return;
      const month = new Date(firstDay.date + "T00:00:00").getMonth();
      if (month !== lastMonth) {
        positions.push({ label: MONTH_LABELS[month], col: wi });
        lastMonth = month;
      }
    });
    return positions;
  }, [data]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[14px] uppercase text-black/70 dark:text-white/70 tracking-wider"
          style={{ fontFamily: "var(--font-anton)" }}
        >
          GitHub Contributions
        </span>

        {!data && !error && (
          <span className="h-[16px] w-[70px] rounded bg-black/6 dark:bg-white/6 animate-pulse" />
        )}
      </div>

      {error && (
        <p className="text-[9px] text-red-400/70" style={{ fontFamily: "var(--font-poppins)" }}>
          {error}
        </p>
      )}

      {!data && !error && <Skeleton />}

      {data && (
        <div className="w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div style={{ display: "inline-block", minWidth: "max-content" }}>
            {/* Month labels */}
            <div style={{ display: "flex", gap: 3, marginLeft: GRID_LEFT_OFFSET, marginBottom: 3 }}>
              {data.weeks.map((_, wi) => {
                const hit = monthPositions.find((m) => m.col === wi);
                return (
                  <div key={wi} style={{ width: 10, flexShrink: 0 }}>
                    {hit && (
                      <span
                        className="text-[8px] whitespace-nowrap text-black/70 dark:text-white/70"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {hit.label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: 4 }}>
              {/* Day-of-week labels */}
              <div className="flex flex-col w-4 gap-[3px]">
                {DAY_LABELS.map((label, i) => (
                  <div
                    key={i}
                    className="h-2.5 text-[8px] flex items-center text-black/70 dark:text-white/70"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {label}
                  </div>
                ))}
              </div>

              {/* The 371-cell grid — now memoized and isolated from tooltip state */}
              <ContributionGrid
                weeks={data.weeks}
                onCellHover={handleCellHover}
                onCellLeave={handleCellLeave}
              />
            </div>

            {/* Legend */}
            <div className="flex items-center justify-between mt-2" style={{ marginLeft: GRID_LEFT_OFFSET }}>
              <span className="text-[8px] text-black/60 dark:text-white/60" style={{ fontFamily: "var(--font-poppins)" }}>
                Learn. Build. Share.
              </span>
              <div className="flex items-center gap-1">
                <span className="text-[7px] text-black/30 dark:text-white/30" style={{ fontFamily: "var(--font-poppins)" }}>
                  Less
                </span>
                {(["NONE", "FIRST_QUARTILE", "SECOND_QUARTILE", "THIRD_QUARTILE", "FOURTH_QUARTILE"] as Level[]).map((l) => (
                  <div key={l} className={`w-[8px] h-[8px] rounded-[2px] ${LEVEL_CLASS[l]}`} />
                ))}
                <span className="text-[7px] text-black/30 dark:text-white/30" style={{ fontFamily: "var(--font-poppins)" }}>
                  More
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {tooltip && <Tooltip day={tooltip.day} x={tooltip.x} y={tooltip.y} />}
    </div>
  );
}

// Memoized default export — GitHubHeatmap takes no props, so this just
// guards against re-rendering if a future parent update ever passes it
// down through something re-rendering for unrelated reasons.
export default memo(GitHubHeatmap);