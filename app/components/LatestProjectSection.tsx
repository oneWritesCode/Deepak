import NavlinkMotion from "./NavlinkMotion";
import Project from "./ProjectComponent";
const zemenLandingPage: string = "/assets/images/zemenLandingPage.png";

export default function LatestProjectSection() {
  return (
    <div className="w-full top-0 z-40 sm:hidden flex items-center justify-center pt-10 overflow-hidden">
      <div className="w-full flex items-center justify-center z-40">
        <div className="lg:w-] lg:p-4 p-1 -mt-10 lg:-mt-15 flex flex-col items-center capitalize">
          <p className="Bonheur text-5xl text-center my-10">
            my latest Project
          </p>

          <div className="relative flex items-center justify-center gap-7 flex-wrap w-[100%]">
            <div className="w-full max-w-[100vw] overflow-x-auto overflow-y-hidden px-10 [&::-webkit-scrollbar]:w-0 flex text-gray-200 gap-2">
              <Project
                image={zemenLandingPage}
                title="Zemen - A Regime detector"
                description="Built a regime detection platform using Next.js, Prisma, and TypeScript to analyze global economics, sectors, and stocks, delivering actionable insights for investors and traders."
                category="FROM ZERVEHACK"
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
            </div>
            <span className="flex items-center justify-center gap-2">
              <NavlinkMotion name="all of my projects" link="projects" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
