"use client";

import Image from "next/image";
import RoughBorderBox from "./RoughBorderBox";
import LightModeToggle from "./LightModeToggle";
import Twitterx from "./icons/Twitterx";
import Download from "./icons/Download";
import Figma from "./icons/Figma";
import Postman from "./icons/Postman";
import Terminal from "./icons/Terminal";
import Linux from "./icons/Linux";
import Godot from "./icons/Godot";
import Github from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import Itch from "./icons/Itch";
import SocialGithub from "./icons/Github";
import Medium from "./icons/Medium";
import Arrows1 from "./icons/Arrows1";
import Arrows2 from "./icons/Arrows2";
import Arrows3 from "./icons/Arrows3";
import Arrows4 from "./icons/Arrows4";
const RING_TEXT =
  "figma + next.js + typescript + express + AWS + postgress + motion + prisma + docker + typescript + js + css +  godot + python +";

const PHOTOS = [
  {
    src: "/assets/new/photo-1.png",
    alt: "Portrait 1",
    top: "0%",
    left: "38%",
    size: 108,
  },
  {
    src: "/assets/new/photo-2.png",
    alt: "Portrait 2",
    top: "25%",
    left: "8%",
    size: 100,
  },
  {
    src: "/assets/new/photo-3.png",
    alt: "Portrait 3",
    top: "35%",
    left: "47%",
    size: 110,
  },
  {
    src: "/assets/new/photo-4.png",
    alt: "Portrait 4",
    top: "60%",
    left: "0%",
    size: 175,
  },
];

type NavCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const NAV_ITEMS: {
  label: string;
  corner: NavCorner;
  paragraph: string;
}[] = [
  {
    label: "PROJECTS",
    corner: "top-left",
    paragraph:
      "A collection of shipped work — web apps, tools, and experiments built with Next.js, TypeScript, and Prisma. Each one solves a real problem, not just a portfolio exercise.",
  },
  {
    label: "HOME",
    corner: "top-right",
    paragraph:
      "Full-stack developer building fast, scalable products with clean architecture and thoughtful interfaces. I care about how software feels to use, not just how it performs.",
  },
  {
    label: "EXPERIENCE",
    corner: "bottom-left",
    paragraph:
      "Years spent across frontend and backend, from Godot game prototypes to production APIs. I've learned that good code and good design are the same discipline, applied twice.",
  },
  {
    label: "BLOGS",
    corner: "bottom-right",
    paragraph:
      "Notes on building things properly — debugging war stories, architecture decisions, and lessons from projects that didn't go as planned. Written for developers who read past the headline.",
  },
];

// TODO: swap Pen→Figma and GitBranch→Github via @iconify/react for true brand marks.
const APP_ICONS = [
  { iconSource: "/assets/svg/Figma.svg" },
  { iconSource: "/assets/svg/Github.svg" },
  { iconSource: "/assets/svg/Godot.svg" },
  { iconSource: "/assets/svg/Linux.svg" },
  { iconSource: "/assets/svg/Postman.svg" },
  { iconSource: "/assets/svg/Terminal.svg" },
];

export default function Hero() {
  return (
    <section
      className="
        relative w-full h-screen overflow-hidden
        border border-black/10 dark:border-white/10
        bg-[#f5f5f5] dark:bg-[#161616]
        text-black dark:text-white
        transition-colors duration-300
      "
    >
      {/* ============ DESKTOP / TABLET LAYOUT (lg and up) ============ */}
      <div className="relative hidden h-screen w-full lg:block">
        {/* ---- Inner content box (the bordered rectangle from the design) ---- */}
        <div className="absolute w-full h-screen flex items-center justify-center px-10 py-5">
          <div className="absolute min-w-7xl h-[800px]">
            {/* ---- Ring + photo cluster (centered in content box) ---- */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[600px] -translate-x-1/2 -translate-y-1/2 uppercase">
              <svg
                viewBox="0 0 700 700"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <path
                    id="ring-path"
                    d="M 350,20 A 330,330 0 1 1 349.9,20 Z"
                    fill="none"
                  />
                </defs>
                <text
                  className="fill-black/90 font-poppins text-[19.3px] tracking-[0.3em] dark:fill-white/90"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  <textPath href="#ring-path" startOffset="0%">
                    {RING_TEXT}
                  </textPath>
                </text>
              </svg>

              {/* Photo cluster sits inside the ring, in its own relative box */}
              <div className="absolute left-1/2 top-1/2 h-[62%] w-[46%] -translate-x-1/2 -translate-y-1/2">
                {PHOTOS.map((photo, i) => (
                  <div
                    key={i}
                    className="absolute overflow-hidden rounded-full shadow-2xl ring-1 ring-black/5 dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)] dark:ring-white/10"
                    style={{
                      top: photo.top,
                      left: photo.left,
                      width: photo.size,
                      height: photo.size,
                    }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={`${photo.size}px`}
                      className="object-cover shadows-xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ---- Nav corner blocks (positioned at corners of content box) ---- */}
            {NAV_ITEMS.map((item) => (
              <NavCornerBlock key={item.label} {...item} />
            ))}
          </div>

          {/* ---- Left side useful icon rail (outside content box) ---- */}
          <div className="w-full h-full flex flex-col items-start justify-start py-5">
            <div className="flex items-center justify-center flex-col gap-2">
              <LightModeToggle />
              <button>
                <Download className="w-4 h-4 text-black/80 dark:text-white/80 font-bold" />
              </button>
            </div>
          </div>

          {/* ---- Right side icon rail (outside content box) ---- */}
          <div className="w-full h-full flex flex-col items-end justify-center gap-5">
            <Figma className="w-7 h-7 text-black dark:text-white/60" />
            <Github className="w-7 h-7 text-black dark:text-white/60" />
            <Godot className="w-7 h-7 text-black dark:text-white/60" />
            <Linux className="w-7 h-7 text-black dark:text-white/60" />
            <Terminal className="w-7 h-7 text-black dark:text-white/60" />
            <Postman className="w-7 h-7 text-black dark:text-white/60" />
          </div>

          {/* ---- Social icons footer (outside content box, bottom-left) ---- */}
          <div className="absolute w-1/2 left-10 self-end">
            <div
              className="w-full text-[12px] uppercase tracking-[0.2em] text-black/80 dark:text-white/80 border-b border-black/60 dark:border-white/60 text-right"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <h6>BUILT BY DEEPAK &lt;3</h6>
            </div>
            <div className="flex gap-4 py-2 ">
              <a
                href=" "
                className="hover:text-black dark:hover:text-white transition-colors flex items-center justify-center gap-4"
              >
                <Twitterx className="w-4 h-4 text-black dark:text-white" />
                <SocialGithub className="w-4 h-4 text-black dark:text-white" />
                <Linkedin className="w-4 h-4 text-black dark:text-white/60" />
                <Medium className="w-4 h-4 text-black dark:text-white" />
                <Itch className="w-4 h-4 text-black dark:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// navbar blocks --------------------------------------------------------------------------------
function NavCornerBlock({
  label,
  corner,
  paragraph,
}: {
  label: string;
  corner: NavCorner;
  paragraph: string;
}) {
  const svgMap = {
    "top-left": {
      arrow: <Arrows1 className="text-black/60 dark:text-white/60" />,
      width: 274,
      height: 125,
      labelX: 0,
      labelY: 9,
      labelAlign: "left",
      dotX: 270,
      dotY: 120,
      textSide: "right",
    },
    "top-right": {
      arrow: <Arrows2 className="text-black/60 dark:text-white/60" />,
      width: 308,
      height: 149,
      labelX: 304,
      labelY: 9,
      labelAlign: "right",
      dotX: 4,
      dotY: 134,
      textSide: "left",
    },
    "bottom-left": {
      arrow: <Arrows3 className="text-black/60 dark:text-white/60" />,
      width: 169,
      height: 117,
      labelX: 2,
      labelY: 107,
      labelAlign: "left",
      dotX: 165,
      dotY: 4,
      textSide: "right",
    },
    "bottom-right": {
      arrow: <Arrows4 className="text-black/60 dark:text-white/60" />,
      width: 433,
      height: 109,
      labelX: 428,
      labelY: 99,
      labelAlign: "right",
      dotX: 4,
      dotY: 10,
      textSide: "left",
    },
  }[corner] as any;

  /* Positions are now relative to the content box (not the full viewport) */
  const positionClasses = {
    "top-left": "left-[200px] top-[80px]",
    "top-right": "right-[200px] top-[40px]",
    "bottom-left": "left-[350px] bottom-[100px]",
    "bottom-right": "right-[100px] bottom-[60px]",
  }[corner];

  return (
    <div
      className={`absolute ${positionClasses}`}
      style={{ width: svgMap.width, height: svgMap.height }}
    >
      {svgMap.arrow}

      {/* Label */}
      <div
        className="absolute"
        style={{
          top: svgMap.labelY,
          transform: "translateY(-50%)",
          left: svgMap.labelAlign === "right" ? "100%" : "auto",
          right: svgMap.labelAlign === "left" ? "100%" : "auto",
          marginLeft: svgMap.labelAlign === "right" ? "16px" : "0",
          marginRight: svgMap.labelAlign === "left" ? "16px" : "0",
        }}
      >
        <button className="group relative flex items-center justify-center transition-transform hover:scale-105 active:scale-95">
          <RoughBorderBox className="px-3 flex items-center justify-center">
            <span
              className="relative z-10 text-[16px] uppercase text-black dark:text-white font-extralight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {label}
            </span>
          </RoughBorderBox>
        </button>
      </div>

      {/* Paragraph */}
      <div
        className="absolute"
        style={{
          top: svgMap.dotY,
          transform: "translateY(-50%)",
          left: svgMap.textSide === "left" ? svgMap.dotX + 16 : "auto",
          right:
            svgMap.textSide === "right"
              ? svgMap.width - svgMap.dotX + 16
              : "auto",
          width: 280, // Forced uniform paragraph width
        }}
      >
        <p
          className={`text-[11px] leading-[1.3] tracking-widest font-light text-black dark:text-white ${svgMap.textSide === "left" ? "text-left" : "text-right"}`}
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
}
