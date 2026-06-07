type ExperinceType = {
  workingAt: string;
  workingSince: string;
  workedSince?: string;
  roleWas: string;
  descriptionOfTheRole: string;
  jobType?: string;
  startUpLogoImage: string;
  wasRemote: string;
};

export default function Experience() {
  return (
    <div className="w-full pt-8">
      <div className="w-full">
        <div className="flex flex-col items- capitalize">
          <p className="Bonheur mb-4 md:mb-6 text-4xl md:text-6xl">experience</p>
          <div className="flex gap-7 flex-wrap w-[90%] md:w-[80%]">
            <ExperienceComponent
              startUpLogoImage="/assets/images/thezeroone.png"
              workingAt="The zeroone labs"
              workingSince="dec 2025"
              workedSince="april 2026"
              roleWas="full stack developer"
              descriptionOfTheRole="Led development of multiple client websites, building UI components, animations, and backend APIs while managing a small team."
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

  return (
    <div className="bg-Dark rounded-2xl max-w-100 bg-black text-white p-2 md:p-4 border border-gray-800">
      <div className="pl-1 mb-2 sourGummy uppercase gap-1 md:gap-2">
        <h3 className="text-xs md:text-2xl font-bold">{roleWas}</h3>
        {jobType && <span> • </span> }
        <span className="text-xs text-green-300"> {jobType}</span>
      </div>

      <div className="w-full h-10 md:h-12 pb-2 flex items-center justify-between md:gap-10">
        <div className="h-full  gap-2 flex items-center justify-center">
          <img
            src={startUpLogoImage}
            alt="the zero one llp logo"
            className="h-full rounded-full border border-gray-400"
          />
          <h2 className="text-xs md:text-xl sourGummy uppercase text-gray-300 font-semibold">
            {workingAt}
          </h2>
        </div>

        <p className="text-xs text-gray-200 bg-white/10 border border-gray-800 px-2 py-px rounded-3xl">
          {wasRemote}
        </p>
      </div>

      <div>
        <p className="text-xs md:text-sm text-gray-100 pl-px sourGummy font-medium">
          {workingSince} -
          {workedSince ? (
            <span className="text-green-400"> {workedSince}</span>
          ) : (
            <span className="text-green-400"> current</span>
          )}
        </p>

        <p className="text-xs md:text-sm pl-px pt-1 text-gray-400 sourGummy line-clamp-3">
          {descriptionOfTheRole}
        </p>
      </div>
    </div>
  );
}
