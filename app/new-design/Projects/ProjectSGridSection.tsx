"use client";

import { type ProjectData } from "./projectsData";
import { ArrowRight } from "lucide-react";
import RoughBorderBox from "../RoughBorderBox";

export default function ProjectSGridSection({
  projects,
  onSelect,
}: {
  projects: ProjectData[];
  onSelect: (id: string) => void;
}) {
  const categories = ["hackathon", "personal", "UI/UX"] as const;

  return (
    <div className="w-full h-[75vh] p-6 md:p-12 lg:px-10 lg:py-0">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6">
        {categories.map((category) => {
          const catProjects = projects.filter((p) => p.category === category);
          if (catProjects.length === 0) return null;

          return (
            <div key={category} className="flex flex-col gap-4">
              <h2
                className="text-2xl md:text-2xl text-black dark:text-white uppercase font-lighter tracking-widest"
                style={{ fontFamily: "var(--font-anton)" }}
              >
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 w-full">
                {catProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group flex flex-col cursor-pointer p-4 transition-all duration-100 hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)] hover:dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] active:scale-95 transition-scale duration-400 ease-in hover:scale-101 border border-black/80 dark:border-white/20 rounded-xl"
                    onClick={() => onSelect(project.id)}
                  >
                    {/* Project Title */}
                    <h3
                      className="text-[14px] font-bold mb-2 uppercase"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {project.title}
                    </h3>

                    {/* Clamped Description */}
                    <p
                      className="text-[11px] opacity-40 line-clamp-2 leading-relaxed mb-2 max-w-[280px]"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {project.description}
                    </p>

                    {/* Label / Badge */}
                    <span
                      className="text-[9px] uppercase tracking-widest opacity-40 mb-4"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {project.badgeText}
                    </span>

                    {/* Animated button */}
                    <button
                      data-cursor="Click"
                      className="mt-auto text-[10px] uppercase tracking-] transition-all duration-500 flex items-center gap-2"
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
          );
        })}
      </div>
    </div>
  );
}
