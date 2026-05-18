"use client";

import { usePathname } from "next/navigation";
import LandingPage from "@/app/pages/LandingPage";
import TechStack from "@/app/components/TechStack";
// import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Experience from "../components/Experience";
import LatestProjectSection from "../components/LatestProjectSection";
import MainPage from "@/app/old pages/MainPage";

export default function Home() {
  const location = usePathname();

  return (
    <>
      <div className="bg-black hidden md:block">
        <LandingPage key={location} />
        <TechStack />
        <Experience />
        <LatestProjectSection />
        {/* <Contact /> */}
        <Footer />
      </div>

      <div className="md:hidden">
        <MainPage />
      </div>
    </>
  );
}
