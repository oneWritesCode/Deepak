import Lines from '../../assets/svg/Lines'
import Navbar from './Navbar'
import plane from "../../assets/images/plane.png"
import rays from "../../assets/images/rays.png"
import { motion } from 'framer-motion'
import CatOne from '../../assets/svg/CatOne'
import { NavLink } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            {/* designs there _____________________________________________________________________________________________________________________________*/}


            {/* background aeroplane_________________________________________________________*/}
            <div className='absolute top-0 w-full h-screen flex justify-end flex-col overflow-hidden '>

                <div className='relative left-50 bottom-70'>
                    <div class="w-[30vw] z-0 h-[30vw] rounded-full bg-gradient-to-br from-blue-500/70 via-blue-500/70 to-transparent opacity-30 blur-3xl"></div>
                </div>

            </div>

            {/* background cats ______________________________________________________________*/}

            <div className='absolute top-0 w-full h-screen flex justify-end flex-col overflow-hidden'>
                <span className='relative bottom-0 left-100 flex justify-center '>
                    <span className='opacity-35'>
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                    </span>
                </span>
            </div>

            <div className='absolute bottom-50 w-full h-screen flex justify-end flex-col overflow-hidden'>
                <span className='relative bottom-0 left-120 flex justify-center '>
                    <span className='opacity-30'>
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                    </span>
                </span>
            </div>

            <div className='absolute top-0 w-full h-screen flex justify-end flex-col overflow-hidden'>
                <span className='relative bottom-0 left-140 flex justify-center '>
                    <span className='opacity-25'>
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                    </span>
                </span>
            </div>

            <div className='absolute top-0 w-full h-screen flex justify-end flex-col overflow-hidden'>
                <span className='relative top-45 left-160 flex justify-center '>
                    <span className='opacity-20'>
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                    </span>
                </span>
            </div>

            <div className='absolute top-0 w-full h-screen flex justify-end flex-col overflow-hidden'>
                <span className='relative bottom-20 left-180 flex justify-center '>
                    <span className='opacity-15'>
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                        <CatOne />
                    </span>
                </span>
            </div>

            {/* background lines ________________________________________________________________*/}
            <div className='w-full h-screen overflow-hidden fixed top-0 right-0 z-0'> <Lines /></div>




            <div className='w-full h-[90vh] flex items-center justify-center'>

                <div className='absolute flex flex-col items-center justify-center'>
                    <span className='backdrop-blur lg:backdrop-blur-none'>
                        <div className='relative w-full border-4 sm:border-10 z-0 border-blue-700 top-10 sm:top-22'></div>
                        <p className=' relative Bonheur text-6xl sm:text-9xl font-medium z-10'>hey, i am deepak</p>
                    </span>

                    <div className='lg:w-[600px] text-center pt-4 sm:pt-10 lg:p-0 px-10 text-yellow-9 00 text-sm sm:text-xl font-medium'>
                        <p className='mb-4'>hey there, wanna hear about me !!</p>
                        <p>
                            so, i am <span className='text-blue-600'>self taught developer</span>. just curious about things and try to learn everything that people are afraid of.
                        </p>
                        <p className='mogra mt-6 text-xl'>i am CAT</p>
                    </div>
                    <NavLink to='/projects' className="cursor-pointer">
                        <motion.button
                            animate={{
                                rotate: [14, 0, -2, 1, 10, 4, 9, -3, 2 - 2, 0, 0, 0, 0, 0, 0, 0, 0, , 0, 0, , 0, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity
                            }}
                            className='cursor-pointer px-4 py-2 mt-10 rounded rotate-4 shadow-xl shadow-blue-500/30 hover:rotate-0 bg-blue-600 text-xl font-bold'
                        >

                            Projects <span className='mogra ml-2 text-white'>{`<3`}</span>
                        </motion.button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default LandingPage