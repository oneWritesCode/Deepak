export type ProjectData = {
  id: string;
  title: string;
  description: string;
  badgeText: string; // arcs around the image circle
  image: string;
  size?: number; // relative circle weight for the grid (optional)
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  itchUrl?: string;
};

export const PROJECTS: ProjectData[] = [
  {
    id: "medimate",
    title: "medimate - Your Healthcare Assistant",
    description:
      "built a symptom checker web application using Next.js, TypeScript, Tailwind CSS, and Recharts. The application allows users to input their symptoms and receive potential diagnoses based on a comprehensive medical database. I utilized the GROQ API and GROQ SDK to fetch and manage medical data efficiently. Additionally, I implemented Framer Motion for smooth animations and Lucide React for intuitive icons, enhancing the overall user experience.built in may 2026.",
    badgeText: "FROM BTH",
    image: "/assets/images/projects/medimate.png",
    size: 4,
    techStack: [
      "Next.js",
      "typescript",
      "Tailwind CSS",
      "recharts",
      "GROQ API",
      "GROQ SDK",
      "Framer Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/onewritescode/medimate",
    liveUrl: "https://medimate-ruby.vercel.app/",
  },
  {
    id: "zemen",
    title: "Zemen - A Regime detector",
    description:
      "Built a regime detection platform using Next.js, Prisma, and TypeScript to analyze global economics, sectors, and stocks, delivering actionable insights for investors and traders. built in april 2026.",
    badgeText: "FROM ZERVEHACK HACKATHON",
    image: "/assets/new/projects/zemenLandingPage.png",
    size: 4,
    techStack: [
      "Next.js",
      "prisma ORM",
      "typescript",
      "FRED API",
      "Tailwind CSS",
      "Google Gemini AI",
      "Framer Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/onewritescode/zemen",
    liveUrl: "https://zemen-liard.vercel.app/",
  },
  {
    id: "thought-police",
    title: "THOUGHT POLICE",
    description:
      "A website for reddit users. It helps you find people with Double Dealing Character on Reddit people who post random and contradictory stuff just for reach, so you can find them and block them. built in july 2025.",
    badgeText: "FROM BOLTE.NEW HACKATHON",
    image: "/assets/new/photo-2.png",
    size: 2,
    techStack: [
      "React 18",
      "TypeScript",
      "Framer Motion",
      "Lucide React",
      "Recharts",
      "Auth0",
      "Google Gemini AI",
      "OpenRouter API",
      "Reddit API",
      "Pushshift API",
      "Axios",
      "ESLint",
      "PostCSS",
      "Date-fns",
    ],
    githubUrl: "https://github.com/oneWritesCode/Thought_police",
  },
  {
    id: "godgpt",
    title: "GODGPT",
    description:
      "A next-generation AI chat platform with multi-LLM support (18+ models), real-time streaming, offline capabilities, and enterprise-grade features. Features include multi-model queue processing, vision capabilities, OAuth authentication, and cross-device synchronization. built in june 2025",
    badgeText: "FROM t3 chat CLONEATHON",
    image: "/assets/new/photo-2.png",
    size: 3,
    techStack: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Better Auth",
      "AI SDK",
      "OpenRouter",
      "Google AI SDK",
      "OpenAI SDK",
      "Tailwind CSS",
      "Radix UI",
      "Lucide React",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Dexie.js",
      "Cloudinary",
      "bcryptjs",
    ],
    githubUrl: "https://github.com/oneWritesCode/Godgpt-2",
  },
  {
    id: "foxy",
    title: "foxy",
    description:
      "Foxy is a 2D pixel-art platformer built in Godot 4 featuring custom enemy AI, hazard-based level design, physics puzzles, animated UI, and browser deployment. I developed every aspect—from GDScript gameplay and scene architecture to asset processing, pixel-art integration, and performance optimization—gaining hands-on experience in complete game development.built in may 2026.",
    badgeText: "game",
    image: "/assets/images/projects/foxy_1.png",
    size: 2,
    techStack: ["Godot", "gdscript", "pixel-art", "itch.io"],
    githubUrl: "https://github.com/onewritescode/foxy",
    itchUrl: "https://d33pak.itch.io/foxy",
  },
  {
    id: "skilltracker",
    title: "A note taking app",
    description:
      "Developed a habit-aware journaling platform with secure Google login, persistent cloud storage.",
    badgeText: "Personal Project",
    image: "/assets/images/projects/skilltracker.png",
    size: 1,
    techStack: ["Next.js", "prisma ORM", "typescript", "tiptap", "PWA"],
    liveUrl: "https://skilltracker-ni7h.vercel.app/",
  },
  {
    id: "chat-app",
    title: "real time Chat-App",
    description:
      "building a real-time chat application in MERN stack and socket.io. Secure Login & Signup, Files, pictures & Video Transfer with all CRUD operations. built in september 2025.",
    badgeText: "Personal Project",
    image: "/assets/new/photo-2.png",
    size: 2,
    techStack: [
      "Socket.io",
      "mongoDB",
      "Express.js",
      "react",
      "node.js",
      "tailwindcss",
    ],
    githubUrl: "https://github.com/oneWritesCode/chat-app",
    liveUrl: "https://chat-app-five-jet-76.vercel.app",
  },
  {
    id: "t-editor",
    title: "T-Editor",
    description:
      "A rich text editor built with React and Tiptap. It allows you to write, edit, and format text, paste images directly, and manage content easily. Designed for smooth and intuitive writing experiences.",
    badgeText: "Personal Project",
    image: "/assets/images/projects/T-editor.png",
    size: 1,
    techStack: ["react", "tiptap", "tailwindcss"],
    githubUrl: "https://github.com/oneWritesCode/T-Editor",
    liveUrl: "https://teditor-livid.vercel.app/",
  },
  {
    id: "ecommerce",
    title: "E-Commerce website",
    description:
      "A full-stack e-commerce platform with MERN stack featuring product listings, cart, checkout,edit and admin dashboard. using all CRUD operations Built in July 2025.",
    badgeText: "Personal Project",
    image: "/assets/new/photo-2.png",
    size: 1,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubUrl: "https://github.com/oneWritesCode/ecommerce",
  },
  {
    id: "typez",
    title: "TypeZ - Typing Game",
    description:
      "A typing game website for peoples who want to improve their typing speed and accuracy. build in may 2025",
    badgeText: "Personal Project",
    image: "/assets/new/photo-2.png",
    size: 1,
    techStack: ["React", "framer motion"],
    githubUrl: "https://github.com/oneWritesCode/TypeZ",
    liveUrl: "https://type-z-liart.vercel.app/",
  },
  {
    id: "gta-ui",
    title: "Grand Theft Auto UI",
    description:
      "A modern UI design inspired by Grand Theft Auto game interface with dynamic animations and interactive elements.",
    badgeText: "UI/UX Design",
    image: "/assets/new/photo-2.png",
    size: 1,
    techStack: ["React", "GSAP"],
  },
];
