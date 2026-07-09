"use client";

import Image from "next/image";
import { Code2, Container, Terminal, PenTool, GitBranch, Pen } from "lucide-react";

/**
 * Tech-stack string displayed as plain text on mobile (ring is desktop-only).
 */
const RING_TEXT =
  "figma + next.js + typescript + express + AWS + postgress + motion + prisma + docker + typescript + js + css +  godot + python +";

/**
 * Center photo cluster — same data as Hero.tsx, scaled down for mobile.
 */
const PHOTOS = [
  { src: "/assets/new/photo-1.png", alt: "Portrait 1", top: "0%", left: "38%", size: 108 },
  { src: "/assets/new/photo-2.png", alt: "Portrait 2", top: "25%", left: "8%", size: 100 },
  { src: "/assets/new/photo-3.png", alt: "Portrait 3", top: "35%", left: "47%", size: 110 },
  { src: "/assets/new/photo-4.png", alt: "Portrait 4", top: "60%", left: "0%", size: 175 },
];

const NAV_ITEMS = [
  {
    label: "PROJECTS",
    paragraph:
      "A collection of shipped work — web apps, tools, and experiments built with Next.js, TypeScript, and Prisma. Each one solves a real problem, not just a portfolio exercise.",
  },
  {
    label: "HOME",
    paragraph:
      "Full-stack developer building fast, scalable products with clean architecture and thoughtful interfaces. I care about how software feels to use, not just how it performs.",
  },
  {
    label: "EXPERIENCE",
    paragraph:
      "Years spent across frontend and backend, from Godot game prototypes to production APIs. I've learned that good code and good design are the same discipline, applied twice.",
  },
  {
    label: "BLOGS",
    paragraph:
      "Notes on building things properly — debugging war stories, architecture decisions, and lessons from projects that didn't go as planned. Written for developers who read past the headline.",
  },
];

// Social row — TODO: replace with Twitter/Instagram/Medium/BMC via Iconify.
const SOCIAL_ICONS = [GitBranch, GitBranch, GitBranch, GitBranch, GitBranch];

export default function MobHero() {
  return (
    <section
      className="
        relative w-full overflow-hidden rounded-[2.5rem]
        border border-black/10 dark:border-white/10
        bg-[#f4f4f2] dark:bg-[#161616]
        text-black dark:text-white
        transition-colors duration-300
        lg:hidden
      "
    >
      <div className="flex min-h-screen flex-col gap-10 px-6 py-12">
        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {NAV_ITEMS.map((item) => (
            <span
              key={item.label}
              className="rounded-sm border border-black/25 px-3 py-1.5 text-[10px] uppercase tracking-widest dark:border-white/25"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {item.label}
            </span>
          ))}
        </nav>

        <div className="relative mx-auto h-[220px] w-[220px]">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className="absolute overflow-hidden rounded-full shadow-2xl ring-1 ring-black/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)] dark:ring-white/10"
              style={{
                top: photo.top,
                left: photo.left,
                width: photo.size * 0.75,
                height: photo.size * 0.75,
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={`${photo.size * 0.75}px`}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <p
          className="text-center text-xs leading-relaxed text-black/60 dark:text-white/60"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {RING_TEXT}
        </p>

        <div className="flex flex-col gap-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <h3
                className="mb-2 text-[10px] font-medium uppercase tracking-widest"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {item.label}
              </h3>
              <p className="text-[6px] font-extralight leading-[1.2] text-black/60 dark:text-white/60">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-5">
          <div className="h-px w-full bg-black/15 dark:bg-white/15" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-6 text-black/50 dark:text-white/50">
              {SOCIAL_ICONS.map((Icon, i) => (
                <button key={i} className="hover:text-black dark:hover:text-white transition-colors">
                  <Icon size={18} strokeWidth={1.5} />
                </button>
              ))}
            </div>
            <span
              className="text-[10px] uppercase tracking-widest text-black/60 dark:text-white/60"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              BUILT BY DEEPAK &lt;3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
