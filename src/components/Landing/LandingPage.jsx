import Lines from '../../assets/svg/Lines'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import CatOne from '../../assets/svg/CatOne'
import { NavLink } from 'react-router-dom'
import NavlinkMotion from './NavlinkMotion'

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

            {/* background lines ________________________________________________________________*/}
            <div className='w-full overflow-hidden fixed top-0 right-0 z-0'> <Lines /></div>




            <div className='w-full h-[90vh] flex items-center justify-center'>

                <div className='absolute flex flex-col items-center justify-center'>
                    <span className='backdrop-blur lg:backdrop-blur-none'>
                        <div className='relative w-full border-4 sm:border-10 z-0 border-blue-700 top-10 sm:top-22'></div>
                        <p className=' relative Bonheur text-6xl sm:text-9xl font-medium z-10'>hey, i am deepak</p>
                    </span>

                    <div className='lg:w-[600px] text-center pt-4 sm:pt-10 lg:p-0 px-10 text-yellow-9 00 text-sm sm:text-xl font-medium'>
                        <p className='mb-4'>hey there, wanna hear about me !!</p>
                        <p>
                            so, i am <span className='text-blue-600'>self taught developer</span> . just curious about things and trying to learn everything that peoples are afraid of.
                        </p>
                        <p className='mogra mt-6 text-xl'>here is my proof of work</p>
                    </div>
                    <div className='flex gap-10'>
                        
                    <NavlinkMotion link="projects" name="projects" />
                    <NavlinkMotion link="blogs" name="blogs" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
