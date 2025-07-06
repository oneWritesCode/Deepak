import React from "react";

function Project(props) {
  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md p-2 sm:p-3 rounded-sm text-white flex flex-col items-center">
      {/* Project Video/Media */}
      {props.video && (
        <div className="relative w-full mb-4">
          <video
            src={props.video}
            autoPlay
            loop
            muted
            className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover"
          />
          
          {/* Category badge */}
          {props.category && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {props.category}
            </div>
          )}
        </div>
      )}

      {/* Project Image */}
      {props.image && (
        <div className="relative w-full mb-4">
          <img
            src={props.image}
            alt={props.title || "Project"}
            className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover"
          />
          {/* Category badge */}
          {props.category && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {props.category}
            </div>
          )}
        </div>
      )}

      {/* Project Title */}
      <h3 className="sourGummy font-bold text-lg sm:text-xl text-center mb-2 text-gray-100">
        {props.title}
      </h3>

      {/* Project Description */}
      {props.description && (
        <p className="text-sm text-gray-300 text-center mb-3 leading-relaxed">
          {props.description}
        </p>
      )}

      {/* Tags */}
      {props.tags && props.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 justify-center mb-3">
          {props.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-700 text-xs px-2 py-1 rounded-full text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 mt-2">
        {/* Live Demo Link */}
        {props.live && (
          <a
            href={props.live}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-xs px-3 py-2 rounded-md flex items-center transition-colors duration-200 hover:bg-white hover:text-black"
            title="Live Demo"
          >
            <svg
              height="16"
              width="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1"
            >
              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z" />
              <path d="M5 5v14h14v-7h-2v5H7V7h5V5z" />
            </svg>
            Live Preview
          </a>
        )}

        {/* GitHub Repository Link */}
        {props.github && (
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-xs px-3 py-2 rounded-md flex items-center transition-colors duration-200 hover:bg-white hover:text-black"
            title="View on GitHub"
          >
            <svg
              height="16"
              width="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.286 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        )}

        {/* Alternative Live Link */}
        {props.liveLink && (
          <a
            href={props.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-xs px-3 py-2 rounded-md flex items-center transition-colors duration-200 hover:bg-white hover:text-black"
            title="View Project"
          >
            <svg
              height="16"
              width="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1"
            >
              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z" />
              <path d="M5 5v14h14v-7h-2v5H7V7h5V5z" />
            </svg>
            View Project
          </a>
        )}
      </div>
    </div>
  );
}

export default Project;
