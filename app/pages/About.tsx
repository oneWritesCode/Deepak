"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useId, useState } from "react";
import Image from "next/image";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Twitterx from "./icons/Twitterx";
import Medium from "./icons/Medium";
import GitHubHeatmap from "../components/GitHubHeatmap";

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

// ---- Component ----
function About() {
  const ringPathId = useId();

  return (
    <div
      className="w-full h-[75vh] flex flex-row gap-6 items-start px-4 py-6 overflow-y-auto overflow-x-hidden"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      {/* ═══════════════ LEFT COLUMN ═══════════════ */}
      <div className="w-[20%] shrink-0 flex flex-col items-center gap-4">
        {/* Profile ring + photo */}
        <div className="relative w-full aspect-square flex items-center justify-center ">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-[100%] scale-[1.2] aspect-square rotate-180 animate-spin pointer-events-none z-[100]"
            style={{ animationDuration: "40s" }}
          >
            <defs>
              <path
                id={ringPathId}
                d="M 100,8 A 92,92 0 1 1 99.9,8 Z"
                fill="none"
              />
            </defs>
            <text
              style={{ fontFamily: "var(--font-poppins)", fontSize: "10px" }}
              className="font-lighter dark:fill-white/70 tracking-[0.22em] uppercase"
            >
              <textPath href={`#${ringPathId}`} startOffset="0%">
                {RING_TEXT}
              </textPath>
            </text>
          </svg>
          <div className="absolute group w-full h-full aspect-square rounded-full overflow-hidden transition-all duration-300 ease-out shadow-xl dark:shadow-[0_4px_10px_rgba(0,0,0,0.8)] hover:shadow-none hover:scale-[0.98] z-10">
            <Image
              src="/assets/new/photo-1.png"
              alt="Deepak Singh"
              fill
              className="object-cover rounded-full"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full transition-shadow duration-300 ease-out group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] dark:group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)]" />
          </div>
        </div>

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
            Deepak kr. Singh
          </h1>
          <p>
            <Roles />
          </p>
          <div className="mt-2 text-[12px] capitalize leading-relaxed text-black/70 dark:text-white/70 max-w-[500px]">
            <p>
               <span className="text-black dark:text-white">deepak</span> is the type of developer who won't stop until something
              feels right. he obsess over the tiny details, chase clean
              aesthetics, and genuinely enjoy building cool stuff. he's <span className="text-black dark:text-white">curious</span>,
              always <span className="text-black dark:text-white">experimenting</span>, and lowkey turning every project into
              something way more ambitious than it needs to be.
            </p>
            <p className="mt-1 text-right">~ChatGPT</p>
          </div>
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
        <div className="mt-2 mb-10">
          <Philosophies />
        </div>
      </div>
    </div>
  );
}

export default memo(About);

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

// animated components ________________________________________________________

const philosophies = [
  '"As long as I am alive, there are infinite chances."',
  '"Stay curious. Stay uncomfortable."',
  '"everything wants you, when you want nothing."',
  '"we can\'t learn without Pain."',
  '"don\'t suffer imagined troubles."',
  '"everything is a win when the goal is to experience."',
];

const Philosophies = memo(function Philosophies() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentQuote = philosophies[quoteIndex];
    let charIndex = 0;

    let pauseTimeout: ReturnType<typeof setTimeout> | undefined;

    const typing = setInterval(() => {
      setDisplayedText(currentQuote.slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === currentQuote.length) {
        clearInterval(typing);
        pauseTimeout = setTimeout(() => {
          setDisplayedText("");
          setQuoteIndex((prev) => (prev + 1) % philosophies.length);
        }, 5000);
      }
    }, 45);

    return () => {
      clearInterval(typing);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [quoteIndex]);

  return (
    <div>
      <p
        className="mb-3 text-[14px] uppercase tracking-[0.12em] text-black/70 dark:text-white/70"
        style={{ fontFamily: "var(--font-anton)" }}
      >
        Philosophies i live by
      </p>

      <blockquote className="border-l-2 border-black/20 pl-4 italic text-[14px] leading-relaxed text-black/70 dark:border-white/20 dark:text-white/70">
        {displayedText}
        <span className="animate-pulse"> |</span>
      </blockquote>
    </div>
  );
});

const MyRoles = [
  "Full-Stack Engineer",
  "gamedev paglu",
  "design engineer",
  "shitposter",
  "indie Hacker",
];

const ROTATE_INTERVAL_MS = 3800;

// Same reasoning as Philosophies — same isolation guard, no behavior change.
const Roles = memo(function Roles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % MyRoles.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[20px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0 flex"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            animate: { transition: { staggerChildren: 0.03 } },
            exit: {
              transition: {
                delayChildren: 0.1,
                staggerChildren: 0.02,
                staggerDirection: -1,
              },
            },
          }}
        >
          {MyRoles[index].split("").map((char, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre uppercase text-[14px] tracking-[0.10em] text-black/55 dark:text-white/55"
              variants={{
                initial: { y: "100%", opacity: 0 },
                animate: {
                  y: "0%",
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
                exit: {
                  y: "-100%",
                  opacity: 0,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
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
});

/**
 * Worst-case math, for "Open Source Contributor" (24 chars) — the
 * reason the numbers above were chosen:
 *
 * Exit:     delayChildren 0.1s + staggerChildren (0.02 × 24 = 0.48s)
 *           + last child's 0.4s duration           ≈ 0.98s
 * Entrance: staggerChildren (0.03 × 24 = 0.72s)
 *           + last child's 0.6s duration            ≈ 1.32s
 * Total:    ≈ 2.3s worst case, against a 3.8s interval —
 *           roughly 1.5s of margin, not ~0 like before.
 */