"use client";

import { usePathname } from "next/navigation";
import Blogs from "@/app/components/Blogs";
import Navbar from "@/app/components/Navbar";
import NavlinkMotion from "@/app/components/NavlinkMotion";
import Footer from "@/app/components/Footer";
import Link from "next/link";

function page() {
  const location = usePathname();

  return (
    <>
      {/* <Navbar /> */}
      <div className="px-10 w-full fixed bottom-10 flex items-center justify-center gap-7 z-1000 ">
        <span className="shadow-xl shadow-blue-500/30 rounded-2xl text-xs md:text-md">
          <NavlinkMotion name="home" />
        </span>
          <span className="shadow-xl shadow-blue-500/30 rounded-2xl flex gap-7 text-xs md:text-md">
          <NavlinkMotion name="projects" link="projects" />
        </span>
      </div>
      <Blogs key={location} />
      <Footer />
    </>
  );
}

export default page;
