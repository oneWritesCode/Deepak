import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useState } from "react";

const MyRoles = [
  "Full-Stack Engineer",
  "gamedev paglu",
  "design engineer",
  "shitposter",
  "indie Hacker",
];

const ROTATE_INTERVAL_MS = 3800;

// roles_________________________________________________________
export default memo(function Roles() {
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