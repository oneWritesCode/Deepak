import BlogComponent from "@/app/components/BlogComponent";
import Project from "@/app/components/ProjectComponent";
const medimate: string = "/assets/images/medimate.png";
const webScrapper: string = "/assets/images/webScrapper.png";

export default function LatestProjectSection() {
  return (
    <div className="w-full mt-10 flex justify-center z-40 borer-2 sourGummy">
      <div className="lg:p-4 p-1 -mt-10 lg:-mt-15 flex flex-col capitalize">
        <p className="Bonheur text-5xl text-center my-10">my latest work</p>

        <div className="relative flex justify-center gap-7 flex-wrap">
          <div className="w-full flex justify-center flex-wrap text-gray-200 gap-2">
            <Project
              image={medimate}
              title="medimate - Your Healthcare Assistant"
              description="built a symptom checker web application using Next.js, TypeScript, Tailwind CSS, and Recharts. The application allows users to input their symptoms and receive potential diagnoses based on a comprehensive medical database. I utilized the GROQ API and GROQ SDK to fetch and manage medical data efficiently. Additionally, I implemented Framer Motion for smooth animations and Lucide React for intuitive icons, enhancing the overall user experience. built in may 2026"
              category="FROM BTH"
              tags={[
                "Next.js",
                "typescript",
                "Tailwind CSS",
                "recharts",
                "recharts",
                "GROQ API",
                "GROQ SDK",
                "Framer Motion",
                "Lucide React",
              ]}
              live="https://medimate-ruby.vercel.app/"
              github="https://github.com/onewritescode/medimate"
            />
            <BlogComponent
              image={webScrapper}
              title="Build a Web Scraper in Under 10 Minutes from Scratch"
              description="Hey there, today we are going to learn about web scraping and how you can build it locally within minutes. So, as you know, web scraping is one of the most powerful skills for developers, data analysts, researchers, and entrepreneurs. It's a beginner-friendly tutorial, so don't worry and stick to me till the end."
              readTime={6}
              category="Web scraping"
              tags={["web scraping", "python"]}
              publishDate="may 8, 2026"
              liveLink="https://medium.com/@triordeep/build-a-web-scraper-in-under-10-minutes-from-scratch-0af9c379e565"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
