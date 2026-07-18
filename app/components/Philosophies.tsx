import { memo, useEffect, useState } from "react";

const philosophies = [
  '"As long as I am alive, there are infinite chances."',
  '"Stay curious. Stay uncomfortable."',
  '"everything wants you, when you want nothing."',
  '"we can\'t learn without Pain."',
  '"don\'t suffer imagined troubles."',
  '"everything is a win when the goal is to experience."',
];

// philosophieeeees
export default memo(function Philosophies() {
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
