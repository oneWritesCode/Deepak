"use client";

import { usePathname } from "next/navigation";
import LandingPage from "@/app/components/LandingPage";
import TechStack from "@/app/components/TechStack";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Experience from "../components/Experience";

export default function Home() {
  const location = usePathname();

  return (
    <>
      {/* <Navbar /> */}
      <LandingPage key={location} />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
