"use client";

import { usePathname } from "next/navigation";
import LandingPage from "@/app/pages/LandingPage";
import MainPage from "@/app/old pages/MainPage";

export default function Home() {
  const location = usePathname();

  return (
    <>
      <div className="bg-black hidden md:block">
        <LandingPage key={location} />
      </div>

      <div className="md:hidden">
        <MainPage />
      </div>
    </>
  );
}
