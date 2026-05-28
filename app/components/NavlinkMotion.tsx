import React from "react";
import NavLink from "./NavLink";
// import { motion } from 'framer-motion'

interface NavlinkMotionProps {
  link?: string;
  name: string;
}

function NavlinkMotion(props: NavlinkMotionProps): React.ReactElement {
  return (
    <nav>
      <NavLink
        href={`${props.link ? `/${props.link}` : `/`}`}
        className="cursor-pointer inline"
      >
        <button className="cursor-pointer px-3 py-1 rounded-xl shadow-xl shadow-neutral-600/30 bg-neutral-900 text-sm md:text-medium font-medium capitalize sourGummy">
          {props.name}
        </button>
      </NavLink>
    </nav>
  );
}

export default NavlinkMotion;
