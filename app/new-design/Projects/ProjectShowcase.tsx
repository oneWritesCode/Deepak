"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import RoughBorderBox from "../RoughBorderBox";
import ProjectArrow5 from "../icons/ProjectArrow5";

import { PROJECTS } from "./projectsData";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  initial: { y: "-100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 1, ease: "easeIn" },
  },
};

export default function ProjectShowcase({
  startIndex = 0,
}: {
  startIndex?: number;
}) {
  const [index, setIndex] = useState(startIndex);

  // Guards against the component being reused without a remount — if that
  // ever happens, a new startIndex would otherwise be silently ignored
  // since useState only reads its initializer once.
  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);
  const project = PROJECTS[index];

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % PROJECTS.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  }, []);

  // Real keyboard arrow support, in addition to the on-screen buttons
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // ---- Scroll-to-navigate ----
  // A callback ref so we can attach a non-passive wheel listener.
  // Non-passive is required to call preventDefault() and prevent the
  // parent SlideOverPanel (overflow-y-auto) from scrolling while the
  // user cycles through projects.
  const rootRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;

      let cooling = false;

      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (cooling) return;
        cooling = true;
        setTimeout(() => {
          cooling = false;
        }, 700);

        if (e.deltaY > 0) {
          next();
        } else {
          prev();
        }
      };

      node.addEventListener("wheel", onWheel, { passive: false });

      // Cleanup when the element unmounts (React calls the ref cb with null,
      // but we've already closed over `node` so the listener gets removed).
      return () => {
        node.removeEventListener("wheel", onWheel);
      };
    },
    [next, prev],
  );

  return (
    <div
      ref={rootRef}
      className="relative flex w-full h-full min-h-[70vh] items-center justify-between"
    >
      {/* Decorative corner flourish (the tiny arrow they want kept) */}
      <div className="w-1/3 shrink-0 self-stretch flex items-end">
        {/* Decorative connecting line */}
        <div className="absolute hidden top-10 left-1/6 lg:block text-black/20 dark:text-white/20 pointer-events-none">
          <ProjectArrow5 />
        </div>
        {/* ---- Image + arc badge ---- */}
        <div className="relative w-full aspect-square">
          <div className="relative mx-auto aspect-square w-full max-w-[400px] flex items-center justify-center overflow-hidden">
            <AnimatePresence>
              <motion.svg
                key={project.id}
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.9 }}
                viewBox="0 0 420 420"
                className="absolute inset-0 w-full rounded-full rotate-30"
              >
                <defs>
                  <path
                    id="badge-arc"
                    d="M 210,10 A 200,200 0 0 1 210,410"
                    fill="none"
                  />
                </defs>
                <text
                  className="fill-black/70 dark:fill-white/70 text-[14px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <textPath href="#badge-arc" startOffset="4%">
                    {project.badgeText}
                  </textPath>
                </text>
              </motion.svg>
            </AnimatePresence>

            <div className="group absolute inset-[10%] scale-110 overflow-hidden rounded-full bg-[#f5f5f5] dark:shadow-[0_4px_20px_rgba(0,0,0,0.8)] shadow-[0_2px_20px_rgba(0,0,0,0.8)] hover:shadow-none">
              {/* <AnimatePresence mode="wait"> */}
              <motion.div key={project.id} className="relative h-full w-full">
                <Image
                  src="/assets/new/photo-2.png"
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="420px"
                />
              </motion.div>
              {/* </AnimatePresence> */}
              <div className="pointer-events-none absolute inset-0 rounded-full transition-shadow duration-300 ease-out group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] dark:group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* ---- Text content ---- */}
      <div className="flex-1 w-1/2 shrink-0 self-stretch flex flex-col items-end justify-start gap-6 text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-end justify-start gap-6 w-full"
          >
            <span className="overflow-hidden">
              <motion.h1
                variants={itemVariants}
                className="text-6xl font-black leading-none tracking-tight sm:text-7xl uppercase"
                style={{ fontFamily: "var(--font-anton)" }}
              >
                {project.title}
              </motion.h1>
            </span>
            <span className="w-7/10 overflow-hidden">
              <motion.p
                variants={itemVariants}
                className="w-full pr-2 text-xs capitalize w-[80%] leading-relaxed text-black/80 dark:text-white"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {project.description}
              </motion.p>
            </span>
            <motion.div
              variants={itemVariants}
              className="w-5/10 flex flex-wrap pr-2 justify-end gap-x-3 gap-y-1 text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {project.techStack.map((tag, i) => (
                <span key={i} className="flex items-center">
                  <span className="overflow-hidden">
                    <p>{tag}</p>
                  </span>
                </span>
              ))}
            </motion.div>
            <span className="overflow-hidden">
              <motion.div
                variants={itemVariants}
                className="mt-2 flex justify-end gap-4"
              >
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="github"
                    className="block"
                  >
                    <RoughBorderBox
                      className="px-5 py-2 text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70 text-black dark:text-white"
                      strokeWidth={0.1}
                    >
                      GITHUB
                    </RoughBorderBox>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="live preview"
                    className="block"
                  >
                    <RoughBorderBox
                      className="px-5 py-2 text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70 text-black dark:text-white"
                      strokeWidth={0.1}
                    >
                      LIVE PREVIEW
                    </RoughBorderBox>
                  </a>
                )}
                {project.itchUrl && (
                  <a
                    href={project.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="itch.io"
                    className="block"
                  >
                    <RoughBorderBox
                      className="px-5 py-2 text-[10px] tracking-widest uppercase transition-opacity hover:opacity-70 text-black dark:text-white"
                      strokeWidth={0.1}
                    >
                      ITCH.IO
                    </RoughBorderBox>
                  </a>
                )}
              </motion.div>
            </span>
          </motion.div>
        </AnimatePresence>

        {/* ---- Pagination ---- */}
        <div className="mt-auto flex items-center justify-end gap-2 text-[11px] uppercase tracking-widest text-black/60 dark:text-white/60">
          <button
            data-cursor="Click"
            onClick={prev}
            aria-label="Previous project"
            className="p-1 transition-all duration-200 hover:scale-[1.15] border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full"
          >
            <ChevronLeft size={14} />
          </button>
          <span style={{ fontFamily: "var(--font-poppins)" }}>
            PROJECT {index + 1}/{PROJECTS.length}
          </span>
          <button
            data-cursor="Click"
            onClick={next}
            aria-label="Next project"
            className="group p-1 transition-all duration-200 hover:scale-[1.15] border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* ---- Scroll hint (bottom-center) ---- */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-black/60 dark:text-white/60 pointer-events-none select-none"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <span
          className="text-[9px] uppercase tracking-[0.2em]"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.div>
    </div>
  );
}
