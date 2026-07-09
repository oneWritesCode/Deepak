"use client";
import ClickPing from "@/app/new-design/ClickPing";
import Hero from "@/app/new-design/Hero";
import MobHero from "@/app/new-design/MobHero";
import React from "react";

function page() {
  return (
    <div>
      <ClickPing ringLineWidth={1} dotSize={1} maxRadius={157}>
        {/*Content div*/}
        <Hero />
        <MobHero />
      </ClickPing>
    </div>
  );
}

export default page;
