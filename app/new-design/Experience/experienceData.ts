export type ExperienceData = {
  id: string;
  role: string;
  type: string; // e.g. "Freelance", "Google Gen AI Exchange"
  organization?: string;
  startedfrom: string;
  workedtil: string;
  description: string;
  techStack: string[];
  isPresent?: boolean; // true if currently active
};

export const EXPERIENCES: ExperienceData[] = [
  {
    id: "supervisor",
    role: "supervisor",
    type: "supervisor",
    organization: "MEC",
    startedfrom: "2025, june",
    workedtil: "current",
    description:
      "working and leading the work staff to reach the goal before the deadline with full efficiency and effectiveness",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    isPresent: true,
  },
  {
    id: "fullstack-freelance",
    role: "freelancer",
    type: "self-employed",
    // organization: "The ZeroOne Labs",
    startedfrom: "2024, dec",
    workedtil: "current",
    description:
      "Led development of multiple client websites, building UI components, animations, and backend APIs while managing a small team.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    isPresent: true,
  },
  {
    id: "fullstack-freelance",
    role: "Full-Stack Developer",
    type: "Freelancer",
    organization: "The ZeroOne Labs",
    startedfrom: "2024, dec",
    workedtil: "2025, april",
    description:
      "Led development of multiple client websites, building UI components, animations, and backend APIs while managing a small team.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    isPresent: true,
  },
  // {
  //   id: "open-source",
  //   role: "Open Source Contributor",
  //   type: "SWE",
  //   organization: "deveral labs",
  //   startedfrom: "2024, aug",
  //   workedtil: "2025, current",
  //   description:
  //     "Contributing to open source and helping the developer community.",
  //   techStack: ["JavaScript", "TypeScript"],
  //   isPresent: true,
  // },
];
