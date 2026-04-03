"use client";

import { usePathname } from "next/navigation";
import Projects from "@/app/pages/Projects";
import Navbar from "@/app/components/Navbar";
import NavlinkMotion from "@/app/components/NavlinkMotion";
import Footer from "@/app/components/Footer";
import Link from "next/link";

function page() {
  const location = usePathname();

  return (
    <>
      {/* <Navbar /> */}
      <div className="px-10 w-full fixed bottom-10 flex items-center justify-center gap-7 z-1000 text-xs md:text-md">
        <span className="shadow-xl shadow-blue-500/30 rounded-2xl flex gap-7">
          <NavlinkMotion name="home" />
        </span>
        <span className="shadow-xl shadow-blue-500/30 rounded-2xl flex gap-7 text-xs md:text-md">
          <NavlinkMotion name="blogs" link="blogs" />
        </span>
      </div>
      <Projects key={location} />
      <Footer />
    </>
  );
}

export default page;
