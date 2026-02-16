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
        <button className="cursor-pointer px-3 py-1 rounded-xl shadow-xl shadow-blue-500/30 bg-blue-600 text-sm md:text-medium font-medium capitalize">
          {props.name} <span className="mogra ml-2 text-white">{`<3`}</span>
        </button>
      </NavLink>
    </nav>
  );
}

export default NavlinkMotion;
