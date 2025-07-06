import React from "react";

function BlogComponent(props) {
  return (
    <div className="w-full sm:max-w-xs md:max-w-sm lg:max-w-md p-2 sm:p-3 rounded-sm text-white flex flex-col items-center">
      {/* Blog Video/Media */}
      {(props.video || props.image) && (
        <div className="relative w-full mb-4">
          {/* Video */}
          {props.video && (
            <video
              src={props.video}
              autoPlay
              loop
              muted
              className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover"
            />
          )}
          
          {/* Image */}
          {props.image && (
            <img
              src={props.image}
              alt={props.title || "Blog thumbnail"}
              className="w-full h-auto max-h-56 sm:max-h-64 rounded-md object-cover"
            />
          )}
          
          {/* Read time badge */}
          {props.readTime && (
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-full">
              {props.readTime} min read
            </div>
          )}
          {/* Category badge */}
          {props.category && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
              {props.category}
            </div>
          )}
        </div>
      )}

      {/* Blog Title */}
      <h3 className="sourGummy font-bold text-lg sm:text-xl text-center mb-2 text-gray-100">
        {props.title}
      </h3>

      {/* Blog Description */}
      {props.description && (
        <p className="text-sm text-gray-300 text-center mb-3 leading-relaxed max-w-md overflow-hidden line-clamp-2">
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

      {/* Publication Date */}
      {props.publishDate && (
        <p className="text-xs text-gray-400 mb-3">
          Published on {props.publishDate}
        </p>
      )}


      {/* Links */}
      <div className="flex gap-3 mt-2">
        {props.liveLink && (
          <a
            href={props.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white text-white text-xs px-3 py-2 rounded-md flex items-center transition-colors duration-200 hover:bg-white hover:text-black"
            title="Read Full Article"
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
            Read Article
          </a>
        )}
      </div>

      {/* Stats */}
      {/* {(props.views || props.likes || props.comments) && (
        <div className="flex gap-4 mt-3 text-xs text-gray-400">
          {props.views && (
            <span className="flex items-center">
              <svg height="14" width="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              {props.views}
            </span>
          )}
          {props.likes && (
            <span className="flex items-center">
              <svg height="14" width="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              {props.likes}
            </span>
          )}
          {props.comments && (
            <span className="flex items-center">
              <svg height="14" width="14" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                <path d="M21.99 4c0-1.1-.89-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
              </svg>
              {props.comments}
            </span>
          )}
        </div>
      )} */}
    </div>
  );
}

export default BlogComponent;
