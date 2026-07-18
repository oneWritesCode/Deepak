"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useState } from "react";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Twitterx from "../icons/Twitterx";
import Medium from "../icons/Medium";
import GitHubHeatmap from '../../components/GitHubHeatmap';
import Itch from "../icons/Itch";
import Philosophies from "./Philosophies";
import Roles from "./Roles";


const SOCIALS = [
  {
    icon: "email",
    label: "Email",
    handle: "triordeep@gmail.com",
    href: "mailto:triordeep@gmail.com",
    cursor: "email",
  },
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
  }, {
    icon: "Itch",
    label: "Itch",
    handle: "@d33pak",
    href: "https://d33pak.itch.io",
    cursor: "itch.io",
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


export default function AboutMob() {
  return (
       <div className="flex-1 w-full flex flex-col gap-4 pl-4">
          {/* Socials */}
          <div className="w-full flex flex-col gap-0.5">
            <p className="text-[8px] uppercase tracking-[0.2em] text-black/80 dark:text-white/80  ">
              Socials
            </p>
            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.icon === "email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  data-cursor={s.cursor}
                  className="flex items-center gap-2 py-0.5 xs:py-1 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors group"
                >
                  <SocialIconBox name={s.icon} />
                </a>
              ))}
            </div>
          </div>
          {/* Name / Title */}
          <div>
            <p className="text-[11px] ml-px uppercase tracking-[0.25em] text-black/60 dark:text-white/60">
              Hi, I&apos;m
            </p>
            <h1
              className="text-4xl xs:text-7xl font-bold uppercase text-black dark:text-white"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Deepak kr. Singh
            </h1>
            <div>
              <Roles />
            </div>
            <div className="mt-2 text-[12px] capitalize leading-relaxed text-black/70 dark:text-white/70 max-w-[500px]">
              <p>
                <span className="text-black dark:text-white">deepak</span> is
                the type of developer who won&apos;t stop until something feels
                right. he obsess over the tiny details, chase clean aesthetics,
                and genuinely enjoy building cool stuff. he&apos;s{" "}
                <span className="text-black dark:text-white">curious</span>,
                always{" "}
                <span className="text-black dark:text-white">
                  experimenting
                </span>
                , and lowkey turning every project into something way more
                ambitious than it needs to be.
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
                        className="text-[10px] xs:text-[12px] px-2 py-px xs:py-0.5 border capitalize border-black/15 dark:border-white/15 rounded-md text-black/70 dark:text-white/70"
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
  )
}

// export default AboutMob


function SocialIconBox({ name }: { name: string }) {
  const cls =
    "w-5 h-5 xs:w-5 xs:h-5 mr-1 xs:mr-0 flex items-center justify-center shrink-0 text-black dark:text-white";
  if (name === "github") return <Github className={cls} />;
  if (name === "linkedin") return <Linkedin className={cls} />;
  if (name === "x") return <Twitterx className={cls} />;
  if (name === "medium") return <Medium className={cls} />;
  if (name === "Itch") return <Itch className={cls} />;
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
