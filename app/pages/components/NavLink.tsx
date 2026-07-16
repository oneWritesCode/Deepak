"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Define the props for your NavLink component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  // You can add more props like activeClassName if needed
  activeClassName?: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  activeClassName = "active",
  className = "",
}) => {
  const pathname = usePathname();
  // Check if the current path matches the link's href
  const isActive = pathname === href || pathname.startsWith(href); // Adjust logic for exact match vs startsWith

  // Combine default and active classes
  const combinedClassName = `${className} ${
    isActive ? activeClassName : ""
  }`.trim();

  return (
    <Link href={href} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default NavLink;
