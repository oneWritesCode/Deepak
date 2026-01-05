import React from "react";
import Lines from "./Lines";
// import Navbar from './Navbar'
// import { motion } from 'framer-motion'
// import CatOne from '../../assets/svg/CatOne'
// import { NavLink } from 'react-router-dom'
import NavlinkMotion from "./NavlinkMotion";

function LandingPage(): React.ReactElement {
  return (
    <>
      {/* designs there _____________________________________________________________________________________________________________________________*/}

      {/* background aeroplane_________________________________________________________*/}
      <div className="absolute top-0 w-full h-screen flex md:items-end md:justify-start items-start justify-center overflow-hidden bg-black">
        <div className="relative md:left-50 md:bottom-70">
          <div className="w-100 z-0 h-100 rounded-full border-4 bg-gradient-to-br from-blue-700/90 via-blue-700/70 to-transparent opacity-30 blur-3xl"></div>
        </div>
      </div>

      {/* background lines ________________________________________________________________*/}
      <div className="w-full overflow-hidden fixed top-0 right-0 z-0">
        {" "}
        <Lines />
      </div>

      <div className="w-full h-[75vh] md:min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
        <div className="absolute flex flex-col items-center justify-center">
          <div className="w-50 border-2 border-blue-700 rounded-full">
            <img
              src="/assets/images/me2.png"
              alt="me"
              className="rounded-full border-4 border-transparent"
            />
          </div>
          
          <span className="backdr lg:backdrop-blur-none">
            <div className="relative w-full border-4 sm:border-10 z-0 border-blue-700 top-10 sm:top-22"></div>
            <p className=" relative Bonheur text-6xl sm:text-9xl font-medium z-10">
              Hey, I Am Deepak
            </p>
          </span>

          <div className="lg:w-[600px] text-center pt-4 lg:p-0 px-10 text-yellow-9 00 text-sm sm:text-xl font-medium">
            <p className="mb-2 md:mb-4">hey, wanna hear about me?</p>
            <p className="text-xs md:text-sm">
              so, i am{" "}
              <span className="text-blue-500">self taught developer</span>.
              just curious about things and trying to do everything, i should not.
              building and creating things to solve my personal problems
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
