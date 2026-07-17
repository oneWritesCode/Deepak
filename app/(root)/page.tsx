"use client";

import ClickPing from "@/app/components/ClickPing";
import Hero from "@/app/pages/Hero";
import TabHero from "@/app/pages/TabsDesign/TabHero";
import NewMob from "@/app/pages/MobileView/NewMob";
import Loading from "@/app/components/Loading";

function page() {
  return (
    <div>
      <Loading duration={4000} />
      <ClickPing ringLineWidth={1} dotSize={1} maxRadius={157}>
        {/* <div className="hidden lg:block"> */}
        <Hero />
        {/* </div> */}
        {/* <div className="hidden sm:block lg:hidden"> */}
          <TabHero />
        {/* </div> */}

        <div className="sm:hidden block">
          <NewMob />
        </div>
      </ClickPing>
    </div>
  );
}

export default page;
