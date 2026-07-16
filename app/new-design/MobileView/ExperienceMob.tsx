"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "../Experience/experienceData";
// import Image from "next/image";
// import Arrows5 from "../icons/Arrow5";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0, 0, 0.58, 1] as const,
    },
  }),
};

export default function ExperienceMob() {
  return (
    <div className="w-full" style={{ fontFamily: "var(--font-poppins)" }}>
      {/* ---- Left Column: Text & Timeline ---- */}
      <div className="w-full flex flex-col relative">
        {/* Right border line */}
        {/* <div className="w-full"> */}
        <div className="flex flex-col w-full relative">
          <h1
            className="text-5xl font-black uppercase tracking-tight text-black dark:text-white bg-[#f5f5f5] dark:bg-[#1a1a1a] z-1"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Experience
          </h1>
          <span className="text-[10px] uppercase tracking-[0.25em] text-black/80 dark:text-white/60">
            Timeline
          </span>
          <p className="mt-2 text-[12px] leading-relaxed text-black/50 dark:text-white/50 w-[360px]">
            A journey of learning, building and solving real-world problems.
          </p>
        </div>
        {/* </div> */}

        {/* ── Timeline ── */}
        <div className="relative mt-2 h-full self-stretch">
          {/* Vertical line */}
          <div className="w-px h-full absolute left-[120px] md:left-[140px] top-0 bottom-0 bg-black/15 dark:bg-white/15" />

          <div className="flex flex-col gap-0">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                initial="initial"
                animate="animate"
                custom={i}
                className="relative flex items-stretch min-h-[160px]"
              >
                {/* ── Year column ── */}
                <div className="w-[120px] md:w-[140px] shrink-0 flex items-start justify-end pt-6 pr-4">
                  <div
                    className="h-10 flex flex-col items-center justify-center gap-px text-[11px] self-stretch tracking-wide text-black/50 dark:text-white/50"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    <span>{exp.startedfrom}</span>
                    <div className="right-0 w-px h-10 bg-black/20 dark:bg-white/20"></div>
                    <span className="block text-black/80 dark:text-white/60 font-medium">
                      {exp.workedtil}
                    </span>
                  </div>
                </div>

                {/* ── Dot on timeline ── */}
                <div className="relative shrink-0 flex items-start pt-6 z-10">
                  <div
                    className={`w-[10px] h-[10px] rounded-full border-2 -ml-[5px] ${
                      exp.isPresent
                        ? "bg-black dark:bg-white border-black dark:border-white"
                        : "bg-[#f5f5f5] dark:bg-[#1a1a1a] border-black/40 dark:border-white/40"
                    }`}
                  />
                </div>

                {/* ── Content ── */}
                <div className="flex-1 pl-8 pb-8 pt-3 border-b border-black/8 dark:border-white/8 last:border-b-0">
                  {/* Role + Type */}
                  <div className="w-16/20 flex items-center justify-between gap-3 flex-wrap">
                    <h3
                      className="text-[16px] md:text-[18px] capitalize text-black dark:text-white"
                      style={{ fontFamily: "var(--font-anton)" }}
                    >
                      {exp.role}
                    </h3>
                    <span className="text-[10px] py-px px-3 rounded-xl border border-black/15 dark:border-white/15">
                      {exp.type}
                    </span>
                  </div>

                  {/* Organization */}
                  <p className="text-[11px] text-black/50 dark:text-white/50 mt-0.5">
                    {exp.organization}
                  </p>

                  {/* Description */}
                  <p className="mt-2 text-[12px] leading-relaxed text-black/60 dark:text-white/60 max-w-[500px]">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="w-3/10 self-stretch flex items-end justify-end">
        <div className="absolute -top-[7%] -left-[20rem] lg:-left-[13rem] scale-70  text-black dark:text-white/80 pointer-events-none z-0 hidden lg:block">
          <Arrows5 />
        </div>
        <div className="relative group w-full aspect-square rounded-full overflow-hidden bg-[#f5f5f5] dark:shadow-[0_4px_20px_rgba(0,0,0,0.8)] shadow-[0_2px_20px_rgba(0,0,0,0.2)] hover:shadow-none hidden lg:block">
          <motion.div className="">
            <Image src="/assets/new/photo-4.png" alt="Experience" fill />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 rounded-full transition-shadow duration-300 ease-out group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] dark:group-hover:shadow-[inset_0_4px_10px_rgba(0,0,0,0.6)]" />
        </div>
      </div> */}
    </div>
  );
}
