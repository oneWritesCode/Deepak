"use client";

import { memo, useMemo } from "react";
import { type ProjectData } from "./projectsData";
import { ArrowRight } from "lucide-react";

const CATEGORIES = ["hackathon", "personal", "UI/UX"] as const;

function ProjectSGridSection({
  projects,
  onSelect,
}: {
  projects: ProjectData[];
  onSelect: (id: string) => void;
}) {
  // FIX: was filtering the full array 3x on every single render, even
  // when `projects` hadn't changed. Now only recomputes when the actual
  // data changes.
  const grouped = useMemo(() => {
    return CATEGORIES.map((category) => ({
      category,
      items: projects.filter((p) => p.category === category),
    })).filter((group) => group.items.length > 0);
  }, [projects]);

  return (
    <div className="w-full h-[75vh]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 pb-10 ">
        {grouped.map(({ category, items }) => (
          <div key={category} className="flex flex-col gap-4">
            <h2
              className="text-2xl md:text-2xl text-black dark:text-white uppercase font-lighter tracking-widest"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 w-full">
              {items.map((project) => (
                <div
                  key={project.id}
                  className="group flex flex-col cursor-pointer p-4 rounded-xl border border-black/80 dark:border-white/20 transition-all duration-200 ease-out hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)] hover:dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] hover:scale-[1.01] active:scale-95"
                  onClick={() => onSelect(project.id)}
                >
                  <h3
                    className="text-[14px] font-bold mb-2 uppercase"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-[11px] opacity-40 line-clamp-2 leading-relaxed mb-2 max-w-[280px]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {project.description}
                  </p>

                  <span
                    className="text-[9px] uppercase tracking-widest opacity-40 mb-4"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {project.badgeText}
                  </span>

                  <button
                    data-cursor="Click"
                    className="mt-auto text-[10px] uppercase tracking-widest transition-all duration-500 flex items-center gap-2"
                  >
                    expand
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-500 group-hover:translate-x-4"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// FIX: memoized so a re-render triggered elsewhere (theme toggle, sibling
// state change, etc.) doesn't force this entire grid to re-render unless
// `projects` or `onSelect` actually changed. IMPORTANT CAVEAT: this only
// works if `onSelect` is a stable reference from the parent — if the
// parent passes an inline arrow function (e.g. onSelect={(id) => ...}),
// a new function is created every parent render, memo sees a "changed"
// prop every time, and this optimization does nothing. Wrap it in
// useCallback at the call site if that's currently the case.
export default memo(ProjectSGridSection);