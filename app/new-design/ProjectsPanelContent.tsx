"use client";

import { useState } from "react";
import ProjectCircleGrid from "./ProjectSGridSection";
import ProjectShowcase from "./ProjectShowcase";
import { PROJECTS } from "./projectsData";
import { ChevronLeft } from "lucide-react";

export default function ProjectsPanelContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSelect = (id: string) => {
    const idx = PROJECTS.findIndex((p) => p.id === id);
    if (idx !== -1) setOpenIndex(idx);
  };

  if (openIndex !== null) {
    return (
      <div>
        <button
          onClick={() => setOpenIndex(null)}
          className="mb-4 text-xs tracking-wide text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <ChevronLeft />
        </button>
        <ProjectShowcase startIndex={openIndex} />
      </div>
    );
  }

  return <ProjectCircleGrid projects={PROJECTS} onSelect={handleSelect} />;
}
