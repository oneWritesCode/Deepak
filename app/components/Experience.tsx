type ExperinceType = {
  workingAt: string;
  workingSince: string;
  workedSince?: string;
  roleWas: string;
  descriptionOfTheRole: string;
  jobType: string;
  startUpLogoImage: string;
  wasRemote: string;
};

export default function Experience() {
  return (
    <div className="w-full top-0 z-40 flex items-center justify-center bg-black pt-10">
      <div className="w-full flex items-center justify-center z-40">
        <div className="lg:w-[80vw] lg;w-[90vw] lg:p-4 p-1 -mt-10 lg:-mt-15 flex flex-col items-center capitalize">
          <p className="Bonheur text-7xl text-center my-10">experience</p>
          <div className="flex items-center justify-center gap-7 flex-wrap w-[90%] md:w-[80%] p-4">
            <ExperienceComponent
              startUpLogoImage="/assets/images/thezeroone.png"
              workingAt="The zeroone labs"
              workingSince="dec 2025"
              roleWas="full stack developer"
              descriptionOfTheRole="Led development of multiple client websites, building UI components, animations, and backend APIs while managing a small team."
              jobType="internship"
              wasRemote="remote"
            />
             <ExperienceComponent
              startUpLogoImage="/assets/images/deverallabs.png"
              workingAt="Deveral labs"
              workingSince="aug 2025"
              roleWas="software developer"
              descriptionOfTheRole="Actively contributed to open-source projects, collaborating with developers to build, improve, and maintain applications."
              jobType="contributer"
              wasRemote="remote"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceComponent({
  workingAt,
  workingSince,
  workedSince,
  startUpLogoImage,
  roleWas,
  descriptionOfTheRole,
  jobType,
  wasRemote,
}: ExperinceType) {
    
    workedSince = workedSince || "current";

  return (
    <div className="bg-Dark rounded-2xl max-w-100 bg-black text-white p-2 md:p-4 border border-gray-800">
        <div className="pl-1 mb-2 sourGummy uppercase flex items-center justify-start gap-1 md:gap-2">
        <span className="text-xs md:text-2xl font-bold">{roleWas}</span> 
        <span> • </span>
        <span className="text-xs text-green-300"> {jobType}</span> 
        </div>

      <div className="w-full h-10 md:h-12 pb-2 flex items-center justify-between md:gap-10">
        <div className="h-full  gap-2 flex items-center justify-center">
          <img
            src={startUpLogoImage}
            alt="the zero one llp logo"
            className="h-full rounded-full border border-gray-400"
          />
          <p className="text-xs md:text-xl sourGummy uppercase text-gray-300 font-semibold">{workingAt}</p>
        </div>

        <p className="text-xs text-gray-200 bg-white/10 border border-gray-800 px-2 py-px rounded-3xl">{wasRemote}</p>
      </div>

      <div>
        <p className="text-xs md:text-sm text-gray-100 pl-px sourGummy font-medium">{workingSince} -
             {workedSince=== "current"? <span className="text-green-300"> {workedSince}</span>:" "}
        </p>

        <p className="text-xs md:text-sm pl-px pt-1 text-gray-400 sourGummy line-clamp-3">{descriptionOfTheRole}</p>
      </div>
    </div>
  );
}
