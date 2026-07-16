"use client";

import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback, useId, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "../../components/LightModeToggle";
import AboutMob from "./AboutMob";
import ExperienceMob from "./ExperienceMob";
import ProjectsMob from "./ProjectsMob";
import BlogsMob from "./BlogsMob";
import SmoothScroll from "@/app/components/SmoothScroll";

// ---- Data ----

// TODO: replace the `photo` / `ringText` / `Component` for "experience",
// "project", and "blogs" with your real ones once you've built them.
// I've only wired up "about" since AboutMob is the only real component
// you've given me — the other three currently render <ComingSoon />
// just so the swipe/timeline logic has something to show.
const SECTIONS: {
  title: string;
  ringText: string;
  photo: string;
  Component: React.ComponentType;
}[] = [
  {
    title: "about",
    ringText: "Experimentor",
    photo: "/assets/new/photo-1.png",
    Component: AboutMob,
  },
  {
    title: "project",
    ringText: "Experimentor", 
    photo: "/assets/new/photo-2.png",
    Component: ProjectsMob,
  },
  {
    title: "blogs",
    ringText: "Experimentor",
    photo: "/assets/new/photo-3.png",
    Component: BlogsMob,
  },
  {
    title: "experience",
    ringText: "Experimentor",
    photo: "/assets/new/photo-4.png",
    Component: ExperienceMob,
  },
];

// Minimum horizontal drag distance (px) before a swipe counts as an
// intentional section change rather than an incidental finger wobble.
const SWIPE_THRESHOLD = 100;
// Minimum time between section changes from a single wheel/swipe
// gesture, so one flick moves exactly one section, not several.
const GESTURE_COOLDOWN_MS = 4000;

const SLIDE_VARIANTS = {
  enter: (direction: number) => ({
    x: direction >= 0 ? 40 : -40,
    opacity: 0,
    position: "relative" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? -40 : 40,
    opacity: 0,
    // Pulled out of flow only while exiting, so the incoming section's
    // height takes over immediately instead of the container holding
    // the old (taller/shorter) height until the exit finishes.
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
  }),
};

function ComingSoon() {
  return (
    <div className="w-full py-16 flex items-center justify-center">
      <p className="text-[11px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
        Coming soon
      </p>
    </div>
  );
}

// ---- Component ----
function NewMob() {
  const ringPathId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // const touchStartX = useRef<number | null>(null);
  // const touchStartY = useRef<number | null>(null);
  // const lastGestureAt = useRef(0);

  // Functional setState throughout, so this never needs `activeIndex`
  // as a dependency and the gesture handlers below never go stale.
  const goToDelta = useCallback((delta: number) => {
    setActiveIndex((prev) => {
      const next = Math.max(0, Math.min(SECTIONS.length - 1, prev + delta));
      if (next !== prev) setDirection(delta > 0 ? 1 : -1);
      return next;
    });
  }, []);

  const goTo = useCallback((index: number) => {
    setActiveIndex((prev) => {
      if (index === prev) return prev;
      setDirection(index > prev ? 1 : -1);
      return index;
    });
  }, []);

// never ever delet this code,,, for y-axis based scrolling on mobile

  // const handleTouchStart = (e: React.TouchEvent) => {
  //   touchStartX.current = e.touches[0].clientX;
  //   touchStartY.current = e.touches[0].clientY;
  // };

  // const handleTouchEnd = (e: React.TouchEvent) => {
  //   if (touchStartX.current === null || touchStartY.current === null) return;
  //   const dx = e.changedTouches[0].clientX - touchStartX.current;
  //   const dy = e.changedTouches[0].clientY - touchStartY.current;
  //   touchStartX.current = null;
  //   touchStartY.current = null;

  //   // Horizontal intent only — a mostly-vertical drag is just page
  //   // scroll and shouldn't touch the active section at all.
  //   if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) < Math.abs(dy)) return;

  //   const now = Date.now();
  //   if (now - lastGestureAt.current < GESTURE_COOLDOWN_MS) return;
  //   lastGestureAt.current = now;

  //   goToDelta(dx < 0 ? 1 : -1);
  // };

  // // Trackpad horizontal scroll — bonus for desktop testing, touch swipe
  // // above is the primary interaction on an actual phone.
  // const handleWheel = (e: React.WheelEvent) => {
  //   if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;

  //   const now = Date.now();
  //   if (now - lastGestureAt.current < GESTURE_COOLDOWN_MS) return;
  //   lastGestureAt.current = now;

  //   goToDelta(e.deltaX > 0 ? 1 : -1);
  // };

  const activeSection = SECTIONS[activeIndex];
  const ActiveComponent = activeSection.Component;

  return (
    <SmoothScroll>
    <section
      className="
        relative w-full min-h-screen overflow-hidden
        border border-black/10 dark:border-white/10
        bg-[#f4f4f2] dark:bg-[#161616]
        text-black dark:text-white
        transition-colors duration-300
        sm:hidden
      "
    >
      {/* Navbar */}
      <nav className="w-full flex items-center justify-end px-2 xs:px-4 pt-4">
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>

      <div
        className="w-full flex flex-col justify-center gap-6 items-start px-2 xs:px-5"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        {/* ═══════════════ LEFT COLUMN ═══════════════ */}
        <div className="w-full flex items-center justify-between pl-5 pb-2">
          {/* Profile ring + photo — crossfades with the active section */}
          <div className="relative min-w-35 w-[30%] aspect-square">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeSection.title}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-[100%] scale-[1.2] aspect-square rotate-180 animate-spin pointer-events-none z-[100]"
                  style={{ animationDuration: "40s" }}
                >
                  <defs>
                    <path
                      id={`${ringPathId}-${activeSection.title}`}
                      d="M 100,8 A 92,92 0 1 1 99.9,8 Z"
                      fill="none"
                    />
                  </defs>
                  <text
                    style={{ fontFamily: "var(--font-poppins)", fontSize: "10px" }}
                    className="font-lighter dark:fill-white/70 tracking-[0.22em] uppercase"
                  >
                    <textPath href={`#${ringPathId}-${activeSection.title}`} startOffset="0%">
                      {activeSection.ringText}
                    </textPath>
                  </text>
                </svg>
                <div className="absolute group w-full h-full aspect-square rounded-full overflow-hidden transition-all duration-300 ease-out shadow-xl dark:shadow-[0_4px_10px_rgba(0,0,0,0.8)] hover:shadow-none hover:scale-[0.98] z-10">
                  <Image
                    src={activeSection.photo}
                    alt="Deepak Singh"
                    fill
                    className="object-cover rounded-full"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-full transition-shadow duration-300 ease-out group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] dark:group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)]" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Timeline nav — tap a label to jump, active one scales up */}
          <div className="pr-5 relative flex items-center justify-center">
            <div className="flex flex-col gap-0">
              {SECTIONS.map((section, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={section.title}
                    onClick={() => goTo(i)}
                    className="relative flex items-end justify-end items-stretch cursor-pointer"
                  >
                    <motion.p
                      animate={{
                        scale: isActive ? 1.18 : 1,
                        opacity: isActive ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="origin-right text-[12px] px-2 py-1 text-black/50 dark:text-white/50 mt-0.5 uppercase"
                    >
                      {section.title}
                    </motion.p>

                    <div className="shrink-0 flex items-center z-10">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.4 : 1,
                          backgroundColor: isActive ? "currentColor" : "transparent",
                        }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="w-[5px] aspect-square rounded-full border-3 -ml-[5px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-0.25 h-[150px] absolute right-5.25 top-0 bg-black/20 dark:bg-white/15" />
          </div>
        </div>

        {/* Swipeable section stage — touch-action: pan-y hands vertical
            scroll entirely back to the browser; only horizontal drags
            reach the JS handlers below. */}
        <div
          className="relative w-full"
          style={{ touchAction: "pan-y" }}
          // onTouchStart={handleTouchStart}
          // onTouchEnd={handleTouchEnd}
          // onWheel={handleWheel}
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={activeSection.title}
              custom={direction}
              variants={SLIDE_VARIANTS}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <ActiveComponent />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
    </SmoothScroll>

  );
}

// NewMob takes no props — memoizing costs nothing and guards against a
// future parent re-render forcing the active-section state to reset.
export default memo(NewMob);