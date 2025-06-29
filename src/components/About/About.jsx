import catFootprint from "../../assets/images/cat-footprint.png"
import LovedThings from "./LovedThings"

function About() {
    return (

        <div className='w-full top-0 flex items-center justify-center bg-am-50 z-0'>
            <div className='w-full flex items-center justify-center z-40'>
                <div className='w-[80vw] relative p-4 mt-0 lg:mt-10 capitalize'>

                    {/* animated blue background box */}
                    <div className='absolute w-full h-screen flex justify-end items-center flex-col overflow-hidden '>

                        <div className='relative lg-left-110 left-20 bottom-60 flex items- gap-4'>
                            <img src={catFootprint} className="h-[5vh] w-[5vh] opacity-15 rotate-5 self-center" />
                            <img src={catFootprint} className="h-[25vh] w-[25vh] opacity-15 rotate-2" />
                            <img src={catFootprint} className="h-[8vh] w-[8vh] opacity-15 -rotate-6 self-end" />
                        </div>

                    </div>

                    <p className="Bonheur text-7xl relative top-0 text-center mb-20"> About</p>
                    <div className="w-full h-[100%] flex justify-center items-center flex-wrap">

                        <ul className="italic text-gray-100 font-bold min-h-[30vh] mb-24 items-center flex flex-col">
                            <p className="sourGummy text-2xl mb-10">Things i had explore or loved before</p>

                            <div className="lg:pl-6 text-gray-200 flex gap-2.5  w-[80%] flex-wrap justify-center capitalize">
                                <LovedThings text='Psychology' />
                                <LovedThings text='philosophy' />
                                <LovedThings text='photography' />
                                <LovedThings text='dance' />
                                <LovedThings text='poetry' />
                                <LovedThings text='writing' />
                                <LovedThings text='boxing' />
                                <LovedThings text='businesses & Marketing' />
                                <LovedThings text='football' />
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
