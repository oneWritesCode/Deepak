"use client";

import { usePathname } from "next/navigation";
import LandingPage from "@/app/old pages/LandingPage";
import TechStack from "@/app/old pages/TechStack";
import Footer from "@/app/old pages/Footer";
import Experience from "@/app/old pages/Experience";
import LatestProjectSection from "@/app/old pages/LatestProjectSection";

export default function Home() {
  const location = usePathname();

  return (
    <div className="bg-black">
      <LandingPage key={location} />
      <TechStack />
      <Experience />
      <LatestProjectSection />
      <Footer />
    </div>
  );``
}
