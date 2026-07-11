{/* WRONG (what you had): MagneticElement wrapping the whole <svg> —
    a div can't legally sit inside svg, so this only worked by accident
    of being OUTSIDE the svg entirely, moving the ring path along with it. */}

{/* CORRECT: MagneticGroup as a <g>, inside the <svg>, wrapping only <text> */}

<svg viewBox="0 0 700 700" className="absolute inset-0 h-full w-full animate-spin" style={{ animationDuration: "100s" }}>
  <defs>
    <path id="ring-path" d="M 350,20 A 330,330 0 1 1 349.9,20 Z" fill="none" />
  </defs>

  <MagneticGroup>
    <text
      className="fill-black/90 font-poppins text-[19px] tracking-[0.3em] dark:fill-white/90"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <textPath href="#ring-path" startOffset="0%">
        {RING_TEXT}
      </textPath>
    </text>
  </MagneticGroup>
</svg>
