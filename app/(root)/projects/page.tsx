"use client";

import { usePathname } from "next/navigation";
import Projects from "@/app/components/Projects";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function page() {
  const location = usePathname();

  return (
    <>
      {/* <Navbar /> */}
      <Projects key={location} />;
      <Footer />
    </>
  );
}

export default page;
