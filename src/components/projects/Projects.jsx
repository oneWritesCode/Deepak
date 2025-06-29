import Project from "./ProjectComponent"
import FirstDesign from "../../assets/images/First-Design.png"
import SecondDesign from "../../assets/images/Second-Design.png"
import GrandTheftAuto from "../../assets/video/Grand-Theft-Auto.mp4"
import DMarts from "../../assets/video/D-Marts.mp4"
import Cluener from "../../assets/video/Cluener.mp4"

function Projects() {
  return (
    <div className='w-full top-0 flex items-center justify-center bg-am-50 z-0'>
      <div className='w-full flex items-center justify-center z-40'>
        <div className='w-[60vw] relative p-4 mt-0 lg:mt-10 capitalize'>

          <div className='min-h-screen'>


            <p className="Bonheur text-7xl relative top-6 sm:top-0 text-center mb-20 ">My projects</p>
            {/* related to ui/ux  */}
            <div className="w-full h-[60%] flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[30vh] mb-24 items-center flex flex-col">
                <p className="sourGummy text-2xl mb-10">UI/UIx</p>

                <div className="lg:pl-6 text-gray-200 flex gap-2.5  w-[100%] flex-wrap justify-center">

                  <Project video={GrandTheftAuto} />
                  <Project image={FirstDesign} />
                  <Project image={SecondDesign} text="" />
                </div>
              </ul>
            </div>

            {/* related to freelance */}
            <div className="w-full h-[60%] flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[30vh] mb-24 items-center flex flex-col">
                <p className="sourGummy text-2xl mb-10">some of my Freelance work</p>

                <div className="lg:pl-6 text-gray-200 flex -2.5  w-[100%] flex-wrap justify-center">

                  <Project
                    video={DMarts}
                    text="A website for B2B business which helps startups to make their strong digital performance so they can standout in market. build in 2024" />
                  <Project video={Cluener} text="a website for a startup who wants to sell organic products to thier customer and give home delivery service to them. build in 2024" />
                </div>
              </ul>
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects