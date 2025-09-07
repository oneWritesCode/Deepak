import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function NavlinkMotion(props) {
  return (
    <NavLink to={`/${props.link}`} className = "cursor-pointer inline" >
      <motion.button
        // animate={{
        //   rotate: [14, 0, -2, 1, 10, 4, 9, -3, 2 - 2, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, , 0, 0]
        // }} 
        // transition={{
        //   duration: 5,
        //   repeat: Infinity
        // }}
        className='cursor-pointer px-3 py-1 mt-10 rounded-xl shadow-xl shadow-blue-500/30 bg-blue-600 text-medium font-medium capitalize'
      >

        {props.name} <span className='mogra ml-2 text-white'>{`<3`}</span>
      </motion.button>
    </NavLink >
  )
}

export default NavlinkMotion