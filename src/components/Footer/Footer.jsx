import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../Landing/Navbar'

function Footer() {
    return (

        <div className='w-full top-0 z-40 flex items-center justify-center bg-am-50'>
            <div className='w-full flex items-center justify-center z-40'>
                <div className='w-[80vw] relative mt-10 lg:mt-0 flex items-center justify-center gap-4 flex-col capitalize'>

                    <div className='backdrop-blur-sm w-full min-h-[100px] py-10 flex flex-col gap-10'>
                        <div className='flex items-center justify-center lg:gap-6 gap-4 flex-wrap'>

                            <NavLink
                                to="/"
                                className={({ isActive }) => `${isActive ? 'bg-blue-500' : ""} rounded-lg font-bold px-2 sm:px-4 hover:bg-blue-500 cursor-pointer`}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/About"
                                className={({ isActive }) => `${isActive ? 'bg-blue-500' : ""} rounded-lg font-bold px-2 sm:px-4 hover:bg-blue-500 cursor-pointer`}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `${isActive ? 'bg-blue-500' : ""} rounded-lg font-bold px-2 sm:px-4 hover:bg-blue-500 cursor-pointer`}
                            >
                                Contact
                            </NavLink>

                        </div>

                        <div className='flex items-center justify-center lg:gap-6 gap-2 text-gray-200 flex-wrap'>
                            <p>Made with ❤️ by Deepak</p>
                            <p>© 2025 All rights reserved</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer