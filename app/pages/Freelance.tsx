import React from "react";
import Project from "../components/ProjectComponent";

const mashooriya: string = "/assets/video/mashooriya.mp4";

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
                video={mashooriya}
                title="mashooriya - a music brand"
                description="website of a music brand to represent them online and show case their music and founders to their fans and followers."
                category="freelance work"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
