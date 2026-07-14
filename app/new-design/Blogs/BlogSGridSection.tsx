"use client";

import { memo, useMemo } from "react";
import { type BlogData } from "./blogsData";
import { ArrowRight } from "lucide-react";

const CATEGORIES = ["Blog"] as const;

function BlogSGridSection({
  blogs,
  onSelect,
}: {
  blogs: BlogData[];
  onSelect: (id: string) => void;
}) {
  const grouped = useMemo(() => {
    return CATEGORIES.map((category) => ({
      category,
      items: blogs.filter((b) => b.category === category),
    })).filter((group) => group.items.length > 0);
  }, [blogs]);

  return (
    <div className="w-full h-[75vh] p-6 md:p-12 lg:px-10 lg:py-0">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6">
        {grouped.map(({ category, items }) => (
          <div key={category} className="flex flex-col gap-4">
            <h2
              className="text-2xl md:text-2xl text-black dark:text-white uppercase font-lighter tracking-widest"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4 w-full">
              {items.map((blog) => (
                <div
                  key={blog.id}
                  className="group flex flex-col cursor-pointer p-4 rounded-xl border border-black/80 dark:border-white/20 transition-all duration-200 ease-out hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.25)] hover:dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] hover:scale-[1.01] active:scale-95"
                  onClick={() => onSelect(blog.id)}
                >
                  <h3
                    className="text-[14px] font-bold mb-2 uppercase"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="text-[11px] opacity-40 line-clamp-2 leading-relaxed mb-2 max-w-[280px]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {blog.description}
                  </p>

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

export default memo(BlogSGridSection);