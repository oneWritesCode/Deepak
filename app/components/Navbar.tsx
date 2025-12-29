"use client"

import React from "react";
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function Navbar(): React.ReactElement {
    const pathname = usePathname();
    
    return (
        <div className='w-full min-h-[12vh] pb-10 flex items-center justify-center bg-black'>
            <div className='w-full h-[100px] top-0 flex items-center justify-center z-40'>
                <div className='w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 lg:gap-10 mb-6 sm:mb-8 lg:mb-10 mt-6 sm:mt-8 lg:mt-10'>

                    <div className='text-lg sm:text-xl md:my-0 mb-2 mt-15 md:text-2xl font-bold Bonheur order-1 sm:order-none'> {`< Codinnng />`}</div>

                    <div className='flex justify-center sm:justify-around items-center gap-1 sm:gap-3 md:gap-4 lg:gap-5 order-2'>
                        <Link
                            href="/"
                            className={`${pathname === '/' ? 'bg-blue-500 text-white' : 'hover:text-blue-600'} rounded-xl font-semibold px-2 sm:px-3 md:px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200 text-md sm:text-base`}
                        >
                            Home
                        </Link>

                        <Link
                            href="/projects"
                            className={`${pathname === '/projects' || pathname.startsWith('/projects') ? 'bg-blue-500 text-white' : 'hover:text-blue-600'} rounded-xl font-semibold px-2 sm:px-3 md:px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200 text-md sm:text-base`}
                        >
                            Projects
                        </Link>
                        <Link
                            href="/blogs"
                            className={`${pathname === '/blogs' || pathname.startsWith('/blogs') ? 'bg-blue-500 text-white' : 'hover:text-blue-600'} rounded-xl font-semibold px-2 sm:px-3 md:px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200 text-md sm:text-base`}
                        >
                            Blogs
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar