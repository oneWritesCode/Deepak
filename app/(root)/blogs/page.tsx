"use client";

import { usePathname } from "next/navigation";
import Blogs from "@/app/components/Blogs";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function page() {
  const location = usePathname();

  return (
    <>
      <Navbar />
      <Blogs key={location} />
      <Footer />
    </>
  );
}

export default page;
