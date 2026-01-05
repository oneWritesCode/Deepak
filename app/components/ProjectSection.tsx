import NavlinkMotion from "./NavlinkMotion";
import Project from "./ProjectComponent";

const TypeZ: string = "/assets/video/TypeZ.mp4";
const thoughtPolice: string = "/assets/video/Thought-Police.mp4";
const Godgpt: string = "/assets/video/Godgpt.mp4";
const ChatApp: string = "/assets/video/Chat-app.mp4";
const teditor: string = "/assets/images/T-editor.png";

function ProjectSection() {
  return (
    <div className="w-full top-0 z-40 sm:hidden flex items-center justify-center bg-black pt-10 overflow-hidden">
      <div className="w-full flex items-center justify-center z-40">
        <div className="lg:w-] lg:p-4 p-1 -mt-10 lg:-mt-15 flex flex-col items-center capitalize">
          <p className="Bonheur text-7xl text-center my-10">Projects</p>

          <div className="relative flex items-center justify-center  gap-7 flex-wrap w-[100%] bg-black">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-black via-black/80 to-black/0 w-[10%] h-full z-1000" />
            <div className="absolute top-0 right-0 bg-gradient-to-l from-black via-black/80 to-black/0 w-[10%] h-full z-1000" />

            <div className="w-full max-w-[100vw] overflow-x-auto overflow-y-hidden px-10 [&::-webkit-scrollbar]:w-0 flex text-gray-200 gap-2">
              {/* <Project video={Ecommerce} title="E-Commerce website" /> */}
              <Project video={ChatApp} title="real time Chat-App" />
              <Project image={teditor} title="T-Editor" />
              <Project video={thoughtPolice} title="THOUGHT POLICE" />
              <Project video={Godgpt} title="GODGPT" />
              <Project video={TypeZ} title="TypeZ - Typing Game" />
            </div>
            <span className="flex items-center justify-center gap-2">
              <NavlinkMotion name="all of my projects" link="projects" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
