import Project from "./ProjectComponent";
import FirstDesign from "../../assets/images/First-Design.png";
import SecondDesign from "../../assets/images/Second-Design.png";
import GrandTheftAuto from "../../assets/video/Grand-Theft-Auto.mp4";
import DMarts from "../../assets/video/D-Marts.mp4";
import TypeZ from "../../assets/video/TypeZ.mp4";
import thoughtPolice from "../../assets/video/Thought-Police.mp4";
import Godgpt from "../../assets/video/Godgpt.mp4";

function Projects() {
  return (
    <div className="w-full top-0 flex items-center justify-center bg-am-50 z-0">
      <div className="w-full flex items-center justify-center z-40">
        <div className="w-full max-w-5xl relative p-2 sm:p-4 mt-0 lg:mt-10 capitalize">
          <div className="min-h-screen">
            <p className="Bonheur text-4xl sm:text-6xl md:text-7xl relative top-2 sm:top-0 text-center mb-10 sm:mb-20 ">
              My projects
            </p>

            {/* related to freelance */}
            <div className="w-full flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  Code & Caffiene
                </p>
                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <Project
                    video={DMarts}
                    title="D-Marts - B2B Business Platform"
                    description="A website for B2B business which helps startups to make their strong digital performance so they can standout in market. build in 2024."
                    category="FREELANCE PROJECT"
                    tags={["React", "GSAP", "tailwindCSS"]}
                  />
                  <Project
                    video={TypeZ}
                    title="TypeZ - Typing Game"
                    description="A typing game website for peoples who want to improve their typing speed and accuracy. build in june 2025"
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
                    video={thoughtPolice}
                    title="THOUGHT POLICE"
                    description="A website for reddit users. It helps you find people with Double Dealing Character on Reddit people who post random and contradictory stuff just for reach, so you can find them and block them."
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
                    description="A next-generation AI chat platform with multi-LLM support (18+ models), real-time streaming, offline capabilities, and enterprise-grade features. Features include multi-model queue processing, vision capabilities, OAuth authentication, and cross-device synchronization."
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
            <div className="w-full flex justify-center items-center flex-wrap mb-8 sm:mb-0">
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

                  <Project 
                    image={FirstDesign} 
                    title="First Design Concept"
                    description="Initial UI/UX design concept showcasing modern design principles and user experience patterns."
                    category="UI/UX Design"
                    tags={["Figma", "UI/UX"]} 
                  />

                  <Project
                    image={SecondDesign}
                    title="Second Design Concept"
                    description="Refined UI/UX design concept with improved user interface and enhanced visual hierarchy."
                    category="UI/UX Design"
                    tags={["Figma", "UI/UX"]}
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
