"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import Image from "next/image";
import RoughBorderBox from "./RoughBorderBox";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitterx from "./icons/Twitterx";
import Medium from "./icons/Medium";
import GitHubHeatmap from "./GitHubHeatmap";

// ---- Data ----

const RING_TEXT = "Experimentor";

const SOCIALS = [
  {
    icon: "github",
    label: "GitHub",
    handle: "@onewritescode",
    href: "https://github.com/onewritescode",
    cursor: "github",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    handle: "/in/deepaksingh",
    href: "https://www.linkedin.com/in/deepak-singh-27a17a321/",
    cursor: "linkedin",
  },
  {
    icon: "x",
    label: "X (Twitter)",
    handle: "@triordeep",
    href: "https://x.com/triordeep",
    cursor: "twitter / x",
  },
  {
    icon: "medium",
    label: "Medium",
    handle: "@triordeep",
    href: "https://medium.com/@triordeep",
    cursor: "medium",
  },
  {
    icon: "email",
    label: "Email",
    handle: "triordeep@gmail.com",
    href: "mailto:triordeep@gmail.com",
    cursor: "email",
  },
];

const TECH_STACK: Record<string, string[]> = {
  LANGUAGES: ["html", "css", "JavaScript", "TypeScript", "Python", "C++"],
  FRONTEND: ["Next.js", "Tailwind CSS", "React", "gsap", "Framer Motion"],
  BACKEND: [
    "Node.js",
    "Express.js",
    "Prisma",
    "socket.io",
    "rest apis",
    "mongodb",
    "PostgreSQL",
  ],
  "TOOLS & OTHERS": [
    "aws",
    "openrouter",
    "api's",
    "Docker",
    "Git",
    "Figma",
    "VS Code",
  ],
};

// const EXPERIENCE = [
//   {
//     role: "Full-Stack Developer",
//     org: "Personal Projects & Freelance",
//     period: "2024 – Present",
//     desc: "Building modern web apps and tools with focus on performance and UX.",
//   },
//   {
//     role: "Hackathon Participant",
//     org: "Google Gen AI Exchange",
//     period: "2024",
//     desc: "Built AI-powered solutions and collaborated with amazing minds.",
//   },
//   {
//     role: "Open Source Contributor",
//     org: "Various Projects",
//     period: "2023 – Present",
//     desc: "Contributing to open source and helping the dev community.",
//   },
// ];

// const INTERESTS = [
//   { label: "AI/ML", icon: <AiIcon /> },
//   { label: "UI/UX", icon: <UiIcon /> },
//   { label: "Cybersecurity", icon: <CyberIcon /> },
//   { label: "Game Dev", icon: <GameIcon /> },
// ];

// const STATS = [
//   { value: "20+", label: "PROJECTS" },
//   { value: "10+", label: "TECHNOLOGIES" },
//   { value: "2+", label: "YEARS LEARNING" },
//   { value: "∞", label: "CURIOSITY" },
// ];

// const FOCUS_TAGS = [
//   "Building in Public",
//   "System Design",
//   "Clean Code",
//   "AI & Tools",
// ];

// ---- Component ----
export default function About() {
  const ringPathId = useId();

  return (
    <div
      className="w-full h-[70vh] flex flex-row gap-6 items-start px-4 py-6"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* ═══════════════ LEFT COLUMN ═══════════════ */}
      <div className="w-[20%] shrink-0 flex flex-col items-center gap-4">
        {/* Profile ring + photo */}
        <div className="relative w-full aspect-square flex items-center justify-center ">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-[100%] scale-120 aspect-square animate-spin pointer-events-none"
            style={{ animationDuration: "20s" }}
          >
            <defs>
              <path
                id={ringPathId}
                d="M 100,8 A 92,92 0 1 1 99.9,8 Z"
                fill="none"
              />
            </defs>
            <text
              style={{ fontFamily: "var(--font-poppins)", fontSize: "9px" }}
              className="fill-black/80 dark:fill-white/50 tracking-[0.22em] uppercase"
            >
              <textPath href={`#${ringPathId}`} startOffset="0%">
                {RING_TEXT}
              </textPath>
            </text>
          </svg>
          <div className="w-full h-full aspect-square rounded-full overflow-hidden shadow-lg dark:shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            <Image
              src="/assets/new/photo-1.png"
              alt="Deepak Singh"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>

        {/* Availability badge */}
        {/* <span className="flex items-center gap-1.5 border border-black/20 dark:border-white/20 rounded-full px-3 py-1 text-[9px] uppercase tracking-widest text-black/70 dark:text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </span> */}

        {/* Socials */}
        <div className="w-full flex flex-col gap-0.5 mt-4">
          <p className="text-[8px] uppercase tracking-[0.2em] text-black/80 dark:text-white/80 mb-1">
            Socials
          </p>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.icon === "email" ? "_self" : "_blank"}
              rel="noopener noreferrer"
              data-cursor={s.cursor}
              className="flex items-center gap-2 py-1 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors group"
            >
              <SocialIconBox name={s.icon} />
              <div className="min-w-0">
                <p className="text-[10px] font-medium leading-none">
                  {s.label}
                </p>
                <p className="text-[8px] text-black/40 dark:text-white/40 leading-tight truncate">
                  {s.handle}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA box */}
        {/* <div className="w-full mt-auto border border-black/10 dark:border-white/10 rounded-xl p-3">
          <p className="text-[10px] font-medium leading-snug mb-2 text-black dark:text-white">
            Let&apos;s build something amazing together.
          </p>
          <a
            href="mailto:deepak.dev@gmail.com"
            data-cursor="email"
          >
            <RoughBorderBox className="px-3 py-1.5 text-[9px] uppercase tracking-widest flex items-center justify-center gap-1 text-black dark:text-white">
              GET IN TOUCH ↗
            </RoughBorderBox>
          </a>
        </div> */}
      </div>

      {/* ═══════════════ CENTER COLUMN ═══════════════ */}
      <div className="flex-1 min-w-0 flex flex-col gap-4 pl-4">
        {/* Name / Title */}
        <div>
          <p className="text-[11px] ml-px uppercase tracking-[0.25em] text-black/60 dark:text-white/60">
            Hi, I&apos;m
          </p>
          <h1
            className="text-7xl font-bold uppercase text-black dark:text-white"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Deepak Singh
          </h1>
          <p>
            <Roles />
          </p>
          <p className="mt-2 text-[12px] leading-relaxed text-black/70 dark:text-white/70 max-w-[500px]">
            I build fast, scalable, and thoughtful digital products with clean
            architecture and intuitive interfaces. I care about how software
            feels to use, not just how it performs.
          </p>
        </div>

        {/* GitHub Contributions heatmap — live data */}
        <div className="">
          <GitHubHeatmap />
        </div>

        {/* Tech Stack */}
        <div className=" ">
          <h3
            className="text-[14px] uppercase text-black/70 tracking-wider dark:text-white/70 mb-3"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Tech Stack
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(TECH_STACK).map(([label, techs]) => (
              <div key={label}>
                <h4 className="text-[9px] uppercase tracking-[0.2em] text-black dark:text-white/60 mb-1.5">
                  {label}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-[12px] px-2 py-0.5 border capitalize border-black/15 dark:border-white/15 rounded-md text-black/70 dark:text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus */}
        {/* <div className="flex items-start gap-4 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3">
          <div className="w-5 h-5 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center shrink-0 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[8px] uppercase tracking-widest text-black/35 dark:text-white/35 mb-0.5">Current Focus</p>
            <p className="text-[10px] text-black/70 dark:text-white/70 leading-snug">
              Exploring AI Integrations, improving my system design skills, and building products that solve real-world problems.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 shrink-0 max-w-[180px] justify-end">
            {FOCUS_TAGS.map((tag) => (
              <span
                key={tag}
                className="text-[8px] px-2 py-0.5 border border-black/15 dark:border-white/15 rounded-full text-black/55 dark:text-white/55 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div> */}
      </div>

      {/* ═══════════════ RIGHT COLUMN ═══════════════ */}
      {/* <div className="w-[210px] shrink-0 flex flex-col gap-4">

        Quote
        <div className="border border-black/10 dark:border-white/10 rounded-xl p-4">
          <span
            className="text-3xl leading-none text-black/25 dark:text-white/25"
            style={{ fontFamily: "Georgia, serif" }}
          >
            "
          </span>
          <p className="text-[10px] leading-relaxed text-black/70 dark:text-white/70 -mt-1">
            Code is like humor. When you have to explain it, it&apos;s bad.
          </p>
          <p className="mt-2 text-[9px] text-black/40 dark:text-white/40">– Cory House</p>
        </div>

        Experience Highlights
      <div className="border border-black/10 dark:border-white/10 rounded-xl p-4 flex flex-col gap-3">
          <h3 className="text-[9px] uppercase tracking-widest font-semibold text-black/70 dark:text-white/70">
            Experience Highlights
          </h3>
          {EXPERIENCE.map((exp) => (
            <div key={exp.role} className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white mt-1 shrink-0" />
              <div>
                <p className="text-[10px] font-semibold leading-snug text-black dark:text-white">{exp.role}</p>
                <p className="text-[9px] text-black/50 dark:text-white/50 leading-snug">{exp.org}</p>
                <p className="text-[8px] text-black/35 dark:text-white/35">{exp.period}</p>
                <p className="text-[9px] text-black/60 dark:text-white/60 mt-0.5 leading-snug">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div> 

         What I'm Interested In
        <div className="border border-black/10 dark:border-white/10 rounded-xl p-4">
          <h3 className="text-[9px] uppercase tracking-widest font-semibold text-black/70 dark:text-white/70 mb-3">
            What I&apos;m Interested In
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {INTERESTS.map(({ label, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center border border-black/10 dark:border-white/10 rounded-lg py-2.5 gap-1.5"
              >
                <span className="text-black/60 dark:text-white/60">{icon}</span>
                <span className="text-[8px] text-black/55 dark:text-white/55 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>

        Stats
        <div className="grid grid-cols-2 gap-2">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center border border-black/10 dark:border-white/10 rounded-xl py-3 gap-0.5"
            >
              <span
                className="text-xl font-black text-black dark:text-white"
                style={{ fontFamily: "var(--font-anton)" }}
              >
                {stat.value}
              </span>
              <span className="text-[7px] uppercase tracking-widest text-black/40 dark:text-white/40 text-center px-1 leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

// ─── Icon helpers ───────────────────────────────────────────────────────────

function SocialIconBox({ name }: { name: string }) {
  const cls =
    "w-5 h-5 flex items-center justify-center shrink-0 text-black dark:text-white";
  if (name === "github") return <Github className={cls} />;
  if (name === "linkedin") return <Linkedin className={cls} />;
  if (name === "x") return <Twitterx className={cls} />;
  if (name === "medium") return <Medium className={cls} />;
  // Email — simple @ envelope outline
  return (
    <svg
      className={cls}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

const MyRoles = [
  "Full-Stack Developer",
  "gamedev paglu",
  "design engineer",
  "shitposter",
  "Open Source Contributor",
];

function Roles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % MyRoles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[20px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.03,
              },
            },
            exit: {
              transition: {
                staggerChildren: 0.02,
                staggerDirection: -1,
              },
            },
          }}
        >
          {MyRoles[index].split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre uppercase text-[14px] tracking-[0.10em] text-black/55 dark:text-white/55 z-100"
              variants={{
                initial: {
                  y: "100%",
                  opacity: 0,
                },
                animate: {
                  y: "0%",
                  opacity: 1,
                  transition: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
                exit: {
                  y: "-100%",
                  opacity: 0,
                  transition: {
                    duration: 1,
                    ease: [0.4, 1, 0.36, 1],
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// function AiIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4Z" />
//       <circle cx="12" cy="12" r="1" />
//     </svg>
//   );
// }

// function UiIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="3" y="3" width="18" height="18" rx="2" />
//       <path d="M3 9h18M9 21V9" />
//     </svg>
//   );
// }

// function CyberIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
//     </svg>
//   );
// }

// function GameIcon() {
//   return (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect x="2" y="6" width="20" height="12" rx="4" />
//       <path d="M8 12h4M10 10v4" />
//       <circle cx="16" cy="11" r="0.5" fill="currentColor" />
//       <circle cx="18" cy="13" r="0.5" fill="currentColor" />
//     </svg>
//   );
// }
