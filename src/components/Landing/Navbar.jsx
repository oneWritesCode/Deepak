import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='w-full min-h-[10vh] flex items-center justify-center'>
            <div className='w-full h-[100px] top-0 flex items-center justify-center z-40'>
                <div className='w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-[80vw] p-2 sm:p-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-5 lg:gap-10 mb-6 sm:mb-8 lg:mb-10 mt-6 sm:mt-8 lg:mt-10'>

                    <div className='text-lg sm:text-xl md:text-2xl font-bold Bonheur order-1 sm:order-none'> {`< Codinnng />`}</div>

                    <div className='flex justify-center sm:justify-around items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 order-2 sm:order-none'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${isActive ? 'bg-blue-500 text-white' : 'hover:text-blue-600'} rounded-xl font-semibold px-2 sm:px-3 md:px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200 text-sm sm:text-base`}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/Projects"
                            className={({ isActive }) => `${isActive ? 'bg-blue-500 text-white' : 'hover:text-blue-600'} rounded-xl font-semibold px-2 sm:px-3 md:px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200 text-sm sm:text-base`}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) => `${isActive ? 'bg-blue-500 text-white' : 'hover:text-blue-600'} rounded-xl font-semibold px-2 sm:px-3 md:px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200 text-sm sm:text-base`}
                        >
                            Blogs
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar