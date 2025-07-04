// import GithubLogo from "../../assets/svg/GithubLogo.jsx";

function Project(props) {
  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md p-2 sm:p-3 rounded-sm text-white flex flex-col items-center">
      {props.video && (
        <video
          src={props.video}
          autoPlay
          loop
          controls
          className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover mb-2"
        ></video>
      )}
      {props.image && (
        <img
          src={props.image}
          className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover mb-2"
        />
      )}
      <p className="sourGummy font-medium text-xs sm:text-sm text-gray-100 mt-2 sm:mt-3 mr-0 sm:mr-2 text-center">
        {(props.texts || []).map((text, idx) => (
          <span key={idx} className="block">{text}</span>
        ))}
      </p>

      {props.techStack && props.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1 justify-center mt-2 mb-2">
          {props.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-2 mt-2">
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-xs flex items-center"
            title="GitHub"
          >
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        )}
        {props.live && (
          <a
            href={props.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 text-xs flex items-center"
            title="Live Demo"
          >
            {/* External link SVG icon */}
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1"
            >
              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z" />
              <path d="M5 5v14h14v-7h-2v5H7V7h5V5z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
