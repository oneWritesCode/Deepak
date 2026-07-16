"use client";

import { usePathname } from "next/navigation";
import LandingPage from "@/app/pages/LandingPage";
import MainPage from "@/app/old pages/MainPage";
import LoadingScreen from "@/app/pages/components/LoadingScreen";

export default function Home() {
  const location = usePathname();

  return (
    <>
      <LoadingScreen minDisplayMs={2000} />

      <div className="bg-black hidden md:block">
        <LandingPage key={location} />
      </div>

      <div className="md:hidden">
        <MainPage />
      </div>
    </>
  );
}
