"use client";

import { useState } from "react";
import BlogCircleGrid from "./BlogSGridSection";
import BlogShowcase from "./BlogShowcase";
import { BLOGS } from "./blogsData";
import { ChevronLeft } from "lucide-react";

export default function BlogsPanelContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSelect = (id: string) => {
    const idx = BLOGS.findIndex((b) => b.id === id);
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
        <BlogShowcase startIndex={openIndex} />
      </div>
    );
  }

  return <BlogCircleGrid blogs={BLOGS} onSelect={handleSelect} />;
}
