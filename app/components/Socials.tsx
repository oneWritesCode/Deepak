import { memo } from "react";
import SocialGithub from "../pages/icons/Github";
import TwitterX from "../pages/icons/Twitterx";
import Linkedin from "../pages/icons/Linkedin";
import Medium from "../pages/icons/Medium";
import Itch from "../pages/icons/Itch";

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


function Socials() {
  return (
    <>
      {" "}
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
    </>
  );
}

export default memo(Socials);

function SocialIconBox({ name }: { name: string }) {
  const cls =
    "w-5 h-5 xs:w-5 xs:h-5 mr-1 xs:mr-0 flex items-center justify-center shrink-0 text-black dark:text-white";
  if (name === "github") return <SocialGithub className={cls} />;
  if (name === "linkedin") return <Linkedin className={cls} />;
  if (name === "x") return <TwitterX className={cls} />;
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