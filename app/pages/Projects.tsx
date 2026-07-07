import React from "react";
import Project from "../components/ProjectComponent";

const GrandTheftAuto: string = "/assets/video/Grand-Theft-Auto.mp4";
const Ecommerce: string = "/assets/video/E-Commerce.mp4";
const Skilltracker: string = "/assets/video/skilltracker.mp4";
const TypeZ: string = "/assets/video/TypeZ.mp4";
const thoughtPolice: string = "/assets/video/Thought-Police.mp4";
const Godgpt: string = "/assets/video/Godgpt.mp4";
const ChatApp: string = "/assets/video/Chat-app.mp4";
const teditor: string = "/assets/images/T-editor.png";

function Projects(): React.ReactElement {
  return (
    <div className="w-full top-0 flex items-center justify-center z-0 bg-black">
      <div className="w-full flex items-center justify-center z-40">
        <div className="w-full max-w-5xl relative p-2 sm:p-4 pt-10 capitalize">
          <div className="min-h-screen">
            <p className="Bonheur text-6xl md:text-7xl relative sm:top-0 text-center mb-10 sm:mb-20 ">
              My projects
            </p>

            <div className="w-full flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  Code & Caffiene
                </p>
                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <Project
                    // image={foxy}
                    ytLink="https://www.youtube.com/embed/DQSueb0xeak?si=KhEDZIxEUlAeNZGy"
                    title="foxy"
                    description="Foxy is a 2D pixel-art platformer built in Godot 4 featuring custom enemy AI, hazard-based level design, physics puzzles, animated UI, and browser deployment. I developed every aspect—from GDScript gameplay and scene architecture to asset processing, pixel-art integration, and performance optimization—gaining hands-on experience in complete game development.built in may 2026."
                    category="game"
                    tags={["Godot", "gdscript", "pixel-art", "itch.io"]}
                    live="https://d33pak.itch.io/foxy"
                    github="https://github.com/onewritescode/foxy"
                  />
                  <Project
                    video={Skilltracker}
                    title="A note taking app"
                    description="Developed a habit-aware journaling platform with secure Google login, persistent cloud storage."
                    category="Personal Project"
                    tags={[
                      "Next.js",
                      "prisma ORM",
                      "typescript",
                      "tiptap",
                      "PWA",
                    ]}
                    live="https://skilltracker-ni7h.vercel.app/"
                  />
                  <Project
                    video={ChatApp}
                    title="real time Chat-App"
                    description="building a real-time chat application in MERN stack and socket.io. Secure Login & Signup, Files, pictures & Video Transfer with all CRUD operations. built in september 2025."
                    category="Personal Project"
                    tags={[
                      "Socket.io",
                      "mongoDB",
                      "Express.js",
                      "react",
                      "node.js",
                      "tailwindcss",
                    ]}
                    github="https://github.com/oneWritesCode/chat-app"
                    live="https://chat-app-five-jet-76.vercel.app"
                  />
                  <Project
                    image={teditor}
                    title="T-Editor"
                    description="A rich text editor built with React and Tiptap. It allows you to write, edit, and format text, paste images directly, and manage content easily. Designed for smooth and intuitive writing experiences."
                    category="Personal Project"
                    tags={["react", "tiptap", "tailwindcss"]}
                    github="https://github.com/oneWritesCode/T-Editor"
                    live="https://teditor-livid.vercel.app/"
                  />
                  <Project
                    video={Ecommerce}
                    title="E-Commerce website"
                    description="A full-stack e-commerce platform with MERN stack featuring product listings, cart, checkout,edit and admin dashboard. using all CRUD operations Built in July 2025."
                    category="Personal Project"
                    tags={["MongoDB", "Express.js", "React.js", "Node.js"]}
                    github="https://github.com/oneWritesCode/ecommerce"
                    // live="https://ecommerce-demo.vercel.app/"
                  />
                  <Project
                    video={TypeZ}
                    title="TypeZ - Typing Game"
                    description="A typing game website for peoples who want to improve their typing speed and accuracy. build in may 2025"
                    category="Personal Project"
                    tags={["React", "framer motion"]}
                    github="https://github.com/oneWritesCode/TypeZ"
                    live="https://type-z-liart.vercel.app/"
                  />
                </div>
              </ul>
            </div>

            <div className="w-full flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  hackathon and stuffs
                </p>
                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <Project
                    ytLink="https://youtube.com/embed/KZbB5Of4yR0"
                    title="medimate - Your Healthcare Assistant"
                    description="built a symptom checker web application using Next.js, TypeScript, Tailwind CSS, and Recharts. The application allows users to input their symptoms and receive potential diagnoses based on a comprehensive medical database. I utilized the GROQ API and GROQ SDK to fetch and manage medical data efficiently. Additionally, I implemented Framer Motion for smooth animations and Lucide React for intuitive icons, enhancing the overall user experience.built in may 2026."
                    category="FROM BTH"
                    tags={[
                      "Next.js",
                      "typescript",
                      "Tailwind CSS",
                      "recharts",
                      "GROQ API",
                      "GROQ SDK",
                      "Framer Motion",
                      "Lucide React",
                    ]}
                    live="https://medimate-ruby.vercel.app/"
                    github="https://github.com/onewritescode/medimate"
                  />
                  <Project
                    ytLink="https://youtube.com/embed/96cxXVIj2Tw"
                    title="Zemen - A Regime detector"
                    description="Built a regime detection platform using Next.js, Prisma, and TypeScript to analyze global economics, sectors, and stocks, delivering actionable insights for investors and traders. built in april 2026."
                    category="FROM ZERVEHACK HACKATHON"
                    tags={[
                      "Next.js",
                      "prisma ORM",
                      "typescript",
                      "FRED API",
                      "Tailwind CSS",
                      "Google Gemini AI",
                      "Framer Motion",
                      "Lucide React",
                    ]}
                    live="https://zemen-liard.vercel.app/"
                    github="https://github.com/onewritescode/zemen"
                  />
                  <Project
                    video={thoughtPolice}
                    title="THOUGHT POLICE"
                    description="A website for reddit users. It helps you find people with Double Dealing Character on Reddit people who post random and contradictory stuff just for reach, so you can find them and block them. built in july 2025."
                    category="FROM BOLTE.NEW HACKATHON"
                    tags={[
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
                    ]}
                    github="https://github.com/oneWritesCode/Thought_police"
                  />
                  <Project
                    video={Godgpt}
                    title="GODGPT"
                    description="A next-generation AI chat platform with multi-LLM support (18+ models), real-time streaming, offline capabilities, and enterprise-grade features. Features include multi-model queue processing, vision capabilities, OAuth authentication, and cross-device synchronization. built in june 2025"
                    category="FROM t3 chat CLONEATHON"
                    tags={[
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
                    ]}
                    github="https://github.com/oneWritesCode/Godgpt-2"
                  />
                </div>
              </ul>
            </div>


            {/* related to ui/ux  */}
            <div className="w-full flex justify-center items-center flex-wrap sm:mb-0">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  UI/UIx
                </p>

                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <Project
                    video={GrandTheftAuto}
                    title="Grand Theft Auto UI"
                    description="A modern UI design inspired by Grand Theft Auto game interface with dynamic animations and interactive elements."
                    category="UI/UX Design"
                    tags={["React", "GSAP"]}
                  />
                </div>
              </ul>
            </div>
            {/* 
            <div className="w-full flex justify-center items-center flex-wrap mb-8 sm:mb-0">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  Freelance project
                </p>

                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <Project
                    video={DMarts}
                    title="D-Marts - B2B Business Platform"
                    description="A website for B2B business which helps startups to make their strong digital performance so they can standout in market. build in 2024."
                    category="FREELANCE PROJECT"
                    tags={["React", "GSAP", "tailwindCSS"]}
                  />
                </div>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
