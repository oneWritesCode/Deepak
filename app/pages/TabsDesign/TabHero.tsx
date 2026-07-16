"use client";

import Image from "next/image";
import { useId, useLayoutEffect, useRef, useState } from "react";
import SlideOverPanel from "../../components/SlideOverPanel";
import PanelContent from "../../components/PanelContent";
import About from "../About";
import RoughBorderBox from "../../components/RoughBorderBox";
import LightModeToggle from "../../components/LightModeToggle";
import Twitterx from "../icons/Twitterx";
import Download from "../icons/Download";
import Figma from "../icons/Figma";
import Postman from "../icons/Postman";
import Terminal from "../icons/Terminal";
import Linux from "../icons/Linux";
import Godot from "../icons/Godot";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Itch from "../icons/Itch";
import SocialGithub from "../icons/Github";
import Medium from "../icons/Medium";
import Arrows1 from "../icons/Arrows1";
import Arrows2 from "../icons/Arrows2";
import Arrows3 from "../icons/Arrows3";
import Arrows4 from "../icons/Arrows4";
import CursorFX from "../../components/CursorFX";
import MagneticGroup from "../../components/MagneticGroup";
import Experience from "../Experience/Experience";
import VsCode from "../icons/VsCode";

const RING_TEXT =
  "figma + next.js + typescript + express + AWS + postgress + motion + prisma + docker + typescript + linux + css +  godot + python + ";

type NavCorner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

const PHOTOS = [
  {
    src: "/assets/new/photo-1.png",
    label: "ABOUT",
    alt: "Portrait 1",
    top: "0%",
    left: "38%",
    size: 108,
  },
  {
    src: "/assets/new/photo-2.png",
    label: "PROJECTS",
    alt: "Portrait 2",
    top: "23%",
    left: "8%",
    size: 100,
  },
  {
    src: "/assets/new/photo-3.png",
    label: "BLOGS",
    alt: "Portrait 3",
    top: "33%",
    left: "49%",
    size: 110,
  },
  {
    src: "/assets/new/photo-4.png",
    label: "EXPERIENCE",
    alt: "Portrait 4",
    top: "53%",
    left: "-7%",
    size: 175,
  },
];

const NAV_ITEMS: { label: string; corner: NavCorner }[] = [
  {
    label: "ABOUT",
    corner: "top-right",
  },
  {
    label: "PROJECTS",
    corner: "top-left",
  },
  {
    label: "BLOGS",
    corner: "bottom-right",
  },
  {
    label: "EXPERIENCE",
    corner: "bottom-left",
  },
];

const SOCIAL_ICONS = [
  {
    icon: <Twitterx className="w-4 h-4 text-black dark:text-white" />,
    link: "https://x.com/triordeep",
    name: "twitter / x",
  },
  {
    icon: <SocialGithub className="w-4 h-4 text-black dark:text-white" />,
    link: "https://github.com/onewritescode",
    name: "github",
  },
  {
    icon: <Linkedin className="w-4 h-4 text-black dark:text-white/60" />,
    link: "https://www.linkedin.com/in/deepak-singh-27a17a321/",
    name: "linkedin",
  },
  {
    icon: <Medium className="w-4 h-4 text-black dark:text-white/60" />,
    link: "https://medium.com/@triordeep",
    name: "medium",
  },
  {
    icon: <Itch className="w-4 h-4 text-black dark:text-white" />,
    link: "https://d33pak.itch.io",
    name: "itch.io",
  },
];

export default function TabHero() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const active = NAV_ITEMS.find((item) => item.label === activeSection);
  const ringPathId = useId();

  const CORNER_TO_DIRECTION: Record<
    NavCorner,
    "top" | "bottom" | "left" | "right"
  > = {
    "top-left": "left",
    "top-right": "top",
    "bottom-left": "bottom",
    "bottom-right": "right",
  };

  return (
    <section
      className="
        relative w-full overflow-hidden
        border border-black/10 dark:border-white/10
        bg-[#f4f4f2] dark:bg-[#161616]
        text-black dark:text-white
        transition-colors duration-300
        hidden sm:block lg:hidden
      "
    >
      <div className="relative flex w-full h-screen ">
        <div className="absolute w-full h-screen flex items-center justify-center px-4 sm:px-5 py-5">
          <nav className="absolute top-10 flex flex-wrap gap-x-4 gap-y-3">
            {NAV_ITEMS.map((item) => (
              <button
                data-cursor="Click"
                onClick={() => setActiveSection(item.label)}
                className="group relative flex items-center justify-center rounded transition-all hover:scale-110 hover:font-bold active:scale-95 duration-400 ease-in- hover:shadow-[0_1px_10px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_1px_10px_rgba(255,255,255,0.1)] border-2 border-black/15 dark:border-white/15 px-2 py-0.15"
              >
                <span
                  className="relative z-10 text-[16px] uppercase text-black dark:text-white/70 font-extralight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="absolute left-1/2 top-1/2 aspect-square w-[600px] -translate-x-1/2 -translate-y-1/2 uppercase">
            <svg
              viewBox="0 0 700 700"
              className="absolute inset-0 h-full w-full animate-spin overflow-visible"
              style={{ animationDuration: "100s" }}
            >
              <defs>
                <path
                  id={ringPathId}
                  d="M 350,20 A 330,330 0 1 1 349.9,20 Z"
                  fill="none"
                />
              </defs>

              <MagneticGroup>
              <text
                className="fill-black/90 text-[19px] tracking-[0.3em] dark:fill-white/90"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <textPath href={`#${ringPathId}`} startOffset="0%">
                  {RING_TEXT}
                </textPath>
              </text>
              </MagneticGroup>
            </svg>

            {/* Photo cluster sits inside the ring, in its own relative box */}
            <div className="absolute left-1/2 top-1/2 h-[70%] w-[46%] -translate-x-1/2 -translate-y-1/2">
              {PHOTOS.map((photo, i) => (
                <RingContent photo={photo} key={i} onClick={() => setActiveSection(photo.label)} />
              ))}
            </div>
          </div>

          {/* ---- Left side light mode ---- */}
          <div className="w-full h-full flex flex-col items-start justify-start py-5">
            <div className="flex items-center justify-center flex-col gap-2">
              <LightModeToggle />
              {/* <button data-cursor="download cv">
                <Download className="w-7 h-4 text-black/80 dark:text-white/80 font-bold hover:scale-110 transition-transform duration-300 ease-in-out" />
              </button> */}
            </div>
          </div>

          {/* ---- Right side icons ---- */}
          <div className="w-full h-full flex flex-col items-end justify-center gap-1">
            <Godot className="w-7 aspect-square text-black dark:text-white/60" />
            <Figma className="w-7 aspect-square text-black dark:text-white/60" />
            <VsCode className="w-7 aspect-square text-black dark:text-white/60" />
            <Github className="w-7 aspect-square text-black dark:text-white/60" />
            <Linux className="w-7 aspect-square text-black dark:text-white/60" />
            <Terminal className="w-7 aspect-square text-black dark:text-white/60" />
            <Postman className="w-7 aspect-square text-black dark:text-white/60" />
          </div>

          {/* ---- Social icons footer ---- */}
          <div className="absolute w-8/10 self-end">
            <div
              className="w-full text-[12px] uppercase tracking-[0.2em] text-black/80 dark:text-white/80 border-b border-black/60 dark:border-white/60 text-right"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <h6>BUILT BY DEEPAK &lt;3</h6>
            </div>
            <div className="flex gap-4 py-2 ">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  href={Icon.link}
                  key={i}
                  data-cursor={Icon.name}
                  className="group flex items-center justify-center gap-4"
                >
                  <span className="group-hover:-translate-y-1 group-hover:scale-120 transition-all duration-400">
                    {Icon.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {active && (
        <SlideOverPanel
          open={!!active}
          onClose={() => setActiveSection(null)}
          corner={active.corner}
        >
          {active.label === "PROJECTS" || active.label === "BLOGS" ? (
            <PanelContent label={active.label} />
          ) : active.label === "ABOUT" ? (
            <About />
          ) : active.label === "EXPERIENCE" ? (
            <Experience />
          ) : (
            "empty string"
          )}
        </SlideOverPanel>
      )}
    </section>
  );
}

function RingContent({ photo, onClick }: { photo:any, onClick: () => void }) {
 
  return (
      <button
        key={photo.label}
        type="button"
        data-cursor={photo.label}
        onClick={onClick}
        className="group absolute overflow-hidden rounded-full hover:scale-[0.98] scale-110 transition-all duration-300 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.10)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-none"
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
          className="rounded-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 rounded-full transition-shadow duration-300 group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.25)] dark:group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)]" />
      </button>
  );
}
