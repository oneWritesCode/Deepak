export type ProjectCategory = "hackathon" | "personal" | "UI/UX";

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  badgeText: string; // arcs around the image circle
  image: string;
  size?: number; // relative circle weight for the grid (optional)
  category: ProjectCategory;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  itchUrl?: string;
};

export const PROJECTS: ProjectData[] = [
  {
    id: "medimate",
    title: "medimate",
    description:
      "built a symptom checker web application using Next.js, TypeScript, Tailwind CSS, and Recharts. The application allows users to input their symptoms and receive potential diagnoses based on a comprehensive medical database. I utilized the GROQ API and GROQ SDK to fetch and manage medical data efficiently. Additionally, I implemented Framer Motion for smooth animations and Lucide React for intuitive icons, enhancing the overall user experience.built in may 2026.",
    badgeText: "FROM BTH",
    image: "/assets/images/projects/medimate.png",
    category: "hackathon",
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
      "Zemen is an AI-powered market regime detection platform built with Next.js, TypeScript, Prisma, and Gemini AI. It analyzes global economic indicators, market sectors, and stock trends to identify changing market conditions and generate actionable investment insights. The project focuses on data visualization, intelligent analysis, responsive design, and delivering a seamless experience for investors and traders.",
    badgeText: "FROM ZERVEHACK HACKATHON",
    image: "/assets/images/projects/zemenLandingPage.png",
    category: "hackathon",
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
      "Thought Police is a web application that analyzes Reddit user activity to identify contradictory statements, inconsistent opinions, and potential double-dealing behavior. Built with React, TypeScript, Gemini AI, and the Reddit API, it collects posts and comments, generates AI-powered summaries, and presents clear insights through interactive charts, helping users evaluate online credibility before engaging with others.",
    badgeText: "FROM BOLTE.NEW HACKATHON",
    image: "/assets/new/photo-2.png",
    category: "hackathon",
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
    category: "hackathon",
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
    badgeText: "game dev",
    image: "/assets/images/projects/foxy_1.png",
    category: "personal",
    techStack: ["Godot", "gdscript", "pixel-art", "itch.io"],
    githubUrl: "https://github.com/onewritescode/foxy",
    itchUrl: "https://d33pak.itch.io/foxy",
  },
  {
    id: "skilltracker",
    title: "skilltracker",
    description:
      "SkillTracker is a habit-aware journaling platform designed to help users document progress, build consistent routines, and track personal growth. Built with Next.js, Prisma ORM, TypeScript, and Tiptap, it features secure Google authentication, cloud-based data storage, and a responsive interface. The project emphasizes productivity, organization, and a smooth writing experience across devices.",
    badgeText: "Personal Project",
    image: "/assets/images/projects/skilltracker.png",
    category: "personal",
    techStack: ["Next.js", "prisma ORM", "typescript", "tiptap", "PWA"],
    liveUrl: "https://skilltracker-ni7h.vercel.app/",
  },
  {
    id: "chat-app",
    title: "Chat-App",
    description:
      "This real-time chat application is built using the MERN stack and Socket.IO, enabling fast and secure communication between users. It includes authentication, one-to-one messaging, image, file, and video sharing, online presence indicators, and complete CRUD operations. The project demonstrates full-stack development, real-time data synchronization, responsive UI design, and secure user session management.",
    badgeText: "Personal Project",
    image: "/assets/new/photo-2.png",
    category: "personal",
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
      "T-Editor is a modern rich text editor built with React, Tiptap, and Tailwind CSS. It provides a smooth writing experience with support for rich text formatting, headings, lists, code blocks, blockquotes, and image embedding. Designed with a clean, responsive interface, it demonstrates building scalable, interactive frontend components for modern content creation.",
    badgeText: "Personal Project",
    image: "/assets/images/projects/T-editor.png",
    category: "personal",
    techStack: ["react", "tiptap", "tailwindcss"],
    githubUrl: "https://github.com/oneWritesCode/T-Editor",
    liveUrl: "https://teditor-livid.vercel.app/",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description:
      "This full-stack e-commerce platform is built with the MERN stack and provides a complete online shopping experience. Users can browse products, manage their cart, place orders, and complete checkout, while administrators can manage products, categories, and inventory through a dedicated dashboard. The project demonstrates authentication, CRUD operations, responsive design, and scalable backend architecture.",
    badgeText: "Personal Project",
    image: "/assets/new/photo-2.png",
    category: "personal",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    githubUrl: "https://github.com/oneWritesCode/ecommerce",
  },
  {
    id: "typez",
    title: "Type-Z",
    description:
      "Type-Z is a modern typing practice platform designed to improve typing speed, accuracy, and consistency through interactive challenges. Built with React and Framer Motion, it offers a responsive interface, real-time performance tracking, engaging animations, and instant feedback. The project focuses on creating an enjoyable learning experience with smooth interactions and clean UI design.",
    badgeText: "Personal Project",
    image: "/assets/new/photo-2.png",
    category: "personal",
    techStack: ["React", "framer motion"],
    githubUrl: "https://github.com/oneWritesCode/TypeZ",
    liveUrl: "https://type-z-liart.vercel.app/",
  },
  // {
  //   id: "gta-ui",
  //   title: "Grand Theft Auto UI",
  //   description:
  //     "A modern UI design inspired by Grand Theft Auto game interface with dynamic animations and interactive elements.",
  //   badgeText: "UI/UX Design",
  //   image: "/assets/new/photo-2.png",
  //   category: "UI/UX",
  //   techStack: ["React", "GSAP"],
  // },
];
