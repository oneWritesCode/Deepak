"use client";

import { memo, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../Projects/projectsData";
import Image from "next/image";

const CATEGORIES = ["personal", "hackathon", "UI/UX"] as const;

function ProjectsMobView() {
  const grouped = useMemo(() => {
    return CATEGORIES.map((category) => ({
      category,
      items: PROJECTS.filter((p) => p.category === category),
    })).filter((group) => group.items.length);
  }, []);

  return (
    <div className="overflow-y-auto pb-24">
      <div className="flex flex-col gap-10">
        {grouped.map(({ category, items }) => (
          <section key={category} className="mb-">
            {/* Category */}
            <div className="flex items-center gap-3 mb-6">
              <h2
                className="text-3xl uppercase tracking-[0.2em] leading-none"
                style={{ fontFamily: "var(--font-anton)" }}
              >
                {category}
              </h2>

              <div className="h-px flex-1 bg-black/15 dark:bg-white/15" />
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-5">
              {items.map((project) => (
                <article
                  key={project.id}
                  className="relative group w flex flex-col cursor-pointer p-4 rounded-2xl border border-black/20 dark:border-white/20 transition-all duration-400 ease-out shadow-[0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)] hover:dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] hover:scale-[1.01] active:scale-95 overflow-hidden"
                >
                  <Image
                    src="/assets/new/photo-2.png"
                    alt="project image"
                    fill
                    className="opacity-5 dark:opacity-3 z-0 scale-110"
                  />
                  <div className="z-10 object-cover">

                  {/* Title */}
                  <h3
                    className="text-xl font-medium uppercase leading-none"
                    style={{ fontFamily: "var(--font-anton)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-2 text-[10px] xs:text-[13px] text-black/60 dark:text-white/60"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {project.description}
                  </p>

                  {/* Badge */}
                  <p
                    className="mt-2 text-[9px] xs:text-[10px] uppercase tracking-[0.25em] text-black/50 dark:text-white/35"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {project.badgeText}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-2xl border border-black/20 dark:border-white/10 px-1.5 xs:px-2 py-px text-[9px] xs:text-[10px] uppercase tracking-wider"
                        style={{ fontFamily: "var(--font-poppins)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded border border-black/30 dark:border-white/15 px-2 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-500 active:scale-95 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:font-bold"
                      >
                        Github
                        <ArrowUpRight size={12} />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded border border-black/30 dark:border-white/15 px-2 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-500 active:scale-95 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:font-bold"
                      >
                        Live
                        <ArrowUpRight size={12} />
                      </a>
                    )}

                    {project.itchUrl && (
                      <a
                        href={project.itchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 rounded border border-black/30 dark:border-white/15 px-2 py-1.5 text-[10px] uppercase tracking-[0.18em] transition-all duration-500 active:scale-95 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:font-bold"
                      >
                        Itch.io
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                  </div>

                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default memo(ProjectsMobView);
