import { NavLink } from 'react-router-dom'

function Navbar() {
    return (

        <div className='w-full min-h-[10vh] flex items-center justify-center'>
            <div className='w-full h-[100px] top-0 flex items-center justify-center z-40'>
                <div className='w-[80vw] p-4 flex justify-around items-center flex-wrap gap-10 mb-10 mt-10 lg:mt-0'>

                    <div className='sm:text-2xl text-xl font-bold Bonheur lg:mt-0 mt-4'> {`< Codinnng />`}</div>

                    <div className='flex justify-around items-center gap-2 sm:gap-4'>
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
                </div>
            </div>
        </div>
    )
}

export default Navbar