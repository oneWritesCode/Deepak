export type ExperienceData = {
  id: string;
  role: string;
  type: string;
  organization?: string;
  startedfrom: string;
  workedtil: string;
  description: string;
  techStack: string[];
  isPresent?: boolean;
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
];
