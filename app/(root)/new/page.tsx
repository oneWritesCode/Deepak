"use client";
import ClickPing from "@/app/new-design/ClickPing";
import Hero from "@/app/new-design/Hero";
import TabHero from "@/app/new-design/TabsDesign/TabHero";
import NewMob from "@/app/new-design/MobileView/NewMob";
import React from "react";

function page() {
  return (
    <div>
      <ClickPing ringLineWidth={1} dotSize={1} maxRadius={157}>
        {/*Content div*/}
        <Hero />
        <TabHero />
        <NewMob/>
      </ClickPing>
    </div>
  );
}

export default page;
