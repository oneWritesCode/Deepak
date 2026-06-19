import React from "react";
import Project from "../components/ProjectComponent";
const radSoonFreelanceProject: string =
  "/assets/images/rad-soon-freelance-project.png";
const mashooriya: string = "/assets/video/mashooriya.mp4";
const xpressprints: string = "/assets/video/xpressprints.mp4";
const firstDesign: string = "/assets/images/First-Design.png";
const secondDesign: string = "/assets/images/Second-Design.png";
const saktimax: string = "/assets/images/saktimax.png";
const restaurantsWebLandingPage: string =
  "/assets/images/restaurants-web-landing-page.png";

export default function Freelance(): React.ReactElement {
  return (
    <div className="w-full top-0 flex items-center justify-center z-0 bg-black">
      <div className="w-full flex items-center justify-center z-40">
        <div className="w-full max-w-5xl relative p-2 sm:p-4 pt-10 capitalize">
          <div className="min-h-screen">
            <p className="Bonheur text-6xl md:text-7xl relative sm:top-0 text-center my-10 sm:mb-20 ">
              My freelance work
            </p>

            <div className="w-full flex justify-center items-center flex-wrap">
              <Project
                image={saktimax}
                title="saktimax battery"
                tags={[
                  "next.js",
                  "tailwind css",
                ]}
                // description="worked on the maintenance for the website for a ecommerce shop to showcase their products and brand with a proper backend and frontend."
              />
              <Project
                video={mashooriya}
                title="mashooriya - a music brand"
                tags={["next.js", "tailwind css", "gsap", "spotify API"]}
                // description="website of a music brand to represent them online and show case their music and founders to their fans and followers."
              />
              <Project
                video={xpressprints}
                title="kigoprints - a ecommerce website"
                tags={[
                  "react.js",
                  "mongodb",
                  "node.js",
                  "express.js",
                  "tailwind css",
                ]}
                // description="worked on the maintenance for the website for a ecommerce shop to showcase their products and brand with a proper backend and frontend."
              />
              <Project
                image={radSoonFreelanceProject}
                title="coming soon page"
                tags={["html", "tailwind css"]}
                // description="website for a agency to show that their website is under construction and not to make it conplicated for customers to find them online."
              />
              <Project
                image={firstDesign}
                title="music brand's landing page"
                tags={["react.js", "tailwind css"]}
                // description="landing page of a music agency to showcase their brand and work on the internet."
              />
              <Project
                image={secondDesign}
                title="perfume shop's landing page"
                tags={["react.js", "tailwind css"]}
                // description="landing page of a perfume shop to showcase their brand and quality of work on the internet."
              />
              <Project
                image={restaurantsWebLandingPage}
                title="restaurant's website"
                tags={["html", "tailwind css"]}
                // description="website for a restaurant to showcase their work, food quality, menu and location and to improve the digital prescence of the restaurant and to make it easier for customers to find them online."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
