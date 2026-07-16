"use client";

import { useState } from "react";
import ProjectCircleGrid from "../pages/Projects/ProjectSGridSection";
import ProjectShowcase from "../pages/Projects/ProjectShowcase";
import { PROJECTS } from "../pages/Projects/projectsData";
import BlogSGridSection from "../pages/Blogs/BlogSGridSection";
import BlogShowcase from "../pages/Blogs/BlogShowcase";
import { BLOGS } from "../pages/Blogs/blogsData";
import { ChevronLeft } from "lucide-react";

export default function PanelContent({ label }: { label: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isProject = label === "PROJECTS";

  const handleSelect = (id: string) => {
    if (isProject) {
      const idx = PROJECTS.findIndex((p) => p.id === id);
      if (idx !== -1) setOpenIndex(idx);
    } else {
      const idx = BLOGS.findIndex((b) => b.id === id);
      if (idx !== -1) setOpenIndex(idx);
    }
  };

  if (openIndex !== null) {
    return (
      <div>
        <button
          data-cursor="Click"
          onClick={() => setOpenIndex(null)}
          className="mb-4 text-xs tracking-wide text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:scale-120 hover:rotate-30 transition-all duration-300 ease-in-out"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          <ChevronLeft />
        </button>
        {isProject ? (
          <ProjectShowcase startIndex={openIndex} />
        ) : (
          <BlogShowcase startIndex={openIndex} />
        )}
      </div>
    );
  }

  if (isProject) {
    return <ProjectCircleGrid projects={PROJECTS} onSelect={handleSelect} />;
  } else {
    return <BlogSGridSection blogs={BLOGS} onSelect={handleSelect} />;
  }
}
