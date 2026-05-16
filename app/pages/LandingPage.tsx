import React from "react";
import Lines from "../components/Lines";
import NavlinkMotion from "../components/NavlinkMotion";

function LandingPage(): React.ReactElement {
  return (
    <>
      {/* designs there _____________________________________________________________________________________________________________________________*/}

      {/* background aeroplane_________________________________________________________*/}
      <div className="absolute w-full min-h-screen flex md:items-end md:justify-start items-start justify-center overflow-hidden bg-wh">
        <div className="relative md:left-50 md:bottom-70">
          <div className="w-100 z-0 h-100 rounded-full border-4 bg-gradient-to-br from-black via-black to-transparent opacity-30 blur-3xl"></div>
        </div>
      </div>

      <div className="absolute w-full min-h-screen flex md:items-end md:justify-start items-start justify-center overflow-hidden bg-wh">
        <div className="absolute md:left-200 left-15 bottom-5 md:-bottom-5">
          <img
            src="/assets/images/SwordScar.png"
            alt="me"
            className="rounded-full border-4 border-transparent opacity-20"
          />
        </div>
      </div>

      {/* background lines ________________________________________________________________*/}
      <div className="w-full overflow-hidden fixed top-0 right-0 z-0 md:scale-100 scale-250 opacity-70">
        <Lines />
        <Lines />
      </div>

      <div className="w-full h-[75vh] md:min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute flex flex-col items-center justify-center">
          <div className="w-40 md:w-50 border-2 border-zinc-700 rounded-full mt-10 mb-4 md:mt-0 md:mb-0">
            <img
              src="/assets/images/image.png"
              alt="me"
              className="rounded-full border-4 border-transparent"
            />
          </div>

          <span className=" lg:backdrop-blur-none">
            {/* <div className="relative w-full border-2 sm:border-10 z-0 border-zinc-700 top-8 sm:top-22"></div> */}
            <p className="relative Bonheur text-5xl sm:text-6xl md:text-9xl font-medium z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-700 to-zinc-500">
              Hey, I Am Deepak
            </p>
          </span>

          <div className="sm:w-150 text-center pt-4 lg:p-0 px-10 text-yellow-9 00 text-sm sm:text-xl font-medium">
            <p className="mb-2 md:mb-4">hey, wanna hear about me?</p>
            <p className="text-xs md:text-sm">
              so, i am{" "}
              <span className="text-zinc-400 font-bold capitalize">
                self taught developer
              </span>
              . just curious about things and trying to do everything, i should
              not. building and creating things to solve my personal problems
              but sometimes it helps other peoples too.
            </p>
            <p className="mogra mt-6 text-xl">here is the proof</p>
          </div>

          <div className="flex gap-10 mt-10">
            <NavlinkMotion link="projects" name="projects" />
            <NavlinkMotion link="blogs" name="blogs" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
