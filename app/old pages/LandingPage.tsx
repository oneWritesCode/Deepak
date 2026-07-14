import React from "react";
import NavlinkMotion from "../components/NavlinkMotion";

function LandingPage(): React.ReactElement {
  return (
    <>
      <div className="fixed w-full min-h-screen  overflow-hidden z-0">
        <div className="min-h-screen w-full bg-black absolute opacity-18 overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
       linear-gradient(to right, #fff 1px, transparent 0px),
       linear-gradient(to bottom, #fff 1px, transparent 0px),
       radial-gradient(circle 600px at 0% 200px, #000, transparent),
       radial-gradient(circle 600px at 100% 200px, #000, transparent)
     `,
              backgroundSize: "15px 20px, 20px 15px, 100% 100%, 100% 100%",
            }}
          />
        </div>{" "}
      </div>{" "}
      {/* sword scar */}
      {/* <div className="absolute w-full min-h-screen flex md:items-end md:justify-start items-start justify-center overflow-hidden">
        <div className="absolute md:left-200 left-15 bottom-5 md:-bottom-5">
          <img
            src="/assets/images/SwordScar.png"
            alt="meeeee"
            className="rounded-full border-4 border-transparent opacity-20"
          />
        </div>
      </div> */}
      {/* content */}
      <div className="w-full h-screen flex items-center justify-center bg-black">
        <div className="flex flex-col items-center justify-center">
          <div className="w-40 h-40 md:w-50 md:h-50 flex item-center justify-center border-2 border-zinc-700 rounded-full mb-4 z-100">
            <img
              src="/assets/images/Animated-Image.png"
              alt="me"
              className="rounded-full border-4 border-transparent"
            />
          </div>

          <span className="">
            {/* <div className="relative w-full border-2 sm:border-10 z-0 border-zinc-700 top-8 sm:top-22"></div> */}
            <p className="relative Bonheur text-5xl sm:text-6xl md:text-9xl font-medium z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-500">
              Hey, I Am Deepak
            </p>
          </span>

          <div className="sm:w-150 text-center pt-4 lg:p-0 px-10 text-sm sm:text-xl font-medium sourGummy z-100">
            <p className="text-[12px] md:text-sm">
              also known as {""}
              <h1 className="text-zinc-400 font-bold capitalize inline">
                ( triordeep )
              </h1>{" "}
              by some . just curious about things and doing whatever my brain's
              saying. building and breaking things to satisfy my soul. Exploring
              tech for fun and trying to showcase some cool stuffs i created.
              <h1 className="opacity-0 text-[1px]"> deepak kumar singh</h1>
            </p>
          </div>

          <div className="flex gap-10 mt-6 z-50">
            <NavlinkMotion link="projects" name="projects" />
            <NavlinkMotion link="blogs" name="blogs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
