import React from "react";
import BlogComponent from "./BlogComponent";
import Cluener from "../../assets/video/Cluener.mp4";
import DMarts from "../../assets/video/D-Marts.mp4";
import Godgpt from "../../assets/video/Godgpt.mp4";
import GrandTheftAuto from "../../assets/video/Grand-Theft-Auto.mp4";
import thoughtPolice from "../../assets/video/Thought-Police.mp4";
import TypeZ from "../../assets/video/TypeZ.mp4";

function Blogs() {
  return (
    <div className="w-full top-0 flex items-center justify-center bg-am-50 z-0">
      <div className="w-full flex items-center justify-center z-40">
        <div className="w-full max-w-5xl relative p-2 sm:p-4 mt-0 lg:mt-10 capitalize">
          <div className="min-h-screen">
            <p className="Bonheur text-4xl sm:text-6xl md:text-7xl relative top-2 sm:top-0 text-center mb-10 sm:mb-20 ">
              My Blogs
            </p>

            {/* Web Development Blogs */}
            {/* <div className="w-full flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  Web Development
                </p>
                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <BlogComponent
                    video={Cluener}
                    title="Building a Modern Portfolio with React"
                    description="Learn how to create a stunning portfolio website using React, Tailwind CSS, and modern web development practices."
                    readTime={8}
                    category="Web Development"
                    tags={["React", "JavaScript", "Portfolio", "Web Design"]}
                    publishDate="December 15, 2024"
                    liveLink="https://medium.com/@yourusername/building-modern-portfolio"
                  />
                  <BlogComponent
                    video={DMarts}
                    title="Mastering TypeScript for Better Code"
                    description="A comprehensive guide to TypeScript features that will make your JavaScript code more robust and maintainable."
                    readTime={12}
                    category="Programming"
                    tags={["TypeScript", "JavaScript", "Programming", "Best Practices"]}
                    publishDate="December 10, 2024"
                    liveLink="https://dev.to/yourusername/mastering-typescript"
                  />
                </div>
              </ul>
            </div> */}

            {/* AI & Technology Blogs */}
            {/* <div className="w-full flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  AI & Technology
                </p>
                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <BlogComponent
                    video={Godgpt}
                    title="The Future of Web Development: AI Integration"
                    description="Exploring how artificial intelligence is transforming the way we build and maintain web applications."
                    readTime={15}
                    category="AI & Technology"
                    tags={["AI", "Web Development", "Future Tech", "Innovation"]}
                    publishDate="December 5, 2024"
                    liveLink="https://yourblog.com/ai-web-development"
                  />
                  <BlogComponent
                    video={GrandTheftAuto}
                    title="Optimizing React Performance"
                    description="Essential techniques and best practices for making your React applications faster and more efficient."
                    readTime={10}
                    category="Performance"
                    tags={["React", "Performance", "Optimization", "Frontend"]}
                    publishDate="November 28, 2024"
                    liveLink="https://yourblog.com/react-performance"
                  />
                </div>
              </ul>
            </div> */}

            {/* Programming & JavaScript Blogs */}
            {/* <div className="w-full flex justify-center items-center flex-wrap mb-8 sm:mb-0">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <p className="sourGummy text-lg sm:text-2xl mb-6 sm:mb-10">
                  Programming & JavaScript
                </p>
                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <BlogComponent
                    video={thoughtPolice}
                    title="Advanced JavaScript Concepts"
                    description="Deep dive into advanced JavaScript concepts like closures, promises, and async programming."
                    readTime={14}
                    category="JavaScript"
                    tags={["JavaScript", "Advanced", "Programming", "ES6+"]}
                    publishDate="November 20, 2024"
                    liveLink="https://yourblog.com/advanced-javascript"
                  />
                  <BlogComponent
                    video={TypeZ}
                    title="Modern CSS Techniques"
                    description="Exploring modern CSS features like Grid, Flexbox, and CSS custom properties for better layouts."
                    readTime={9}
                    category="CSS"
                    tags={["CSS", "Grid", "Flexbox", "Modern Web"]}
                    publishDate="November 15, 2024"
                    liveLink="https://yourblog.com/modern-css"
                  />
                </div>
              </ul>
            </div> */}

            {/* Call to Action */}
            <div className="text-center mt-16">
                <p className="text-gray-300 mb-4">currently blogs are not available please wait until developer uplaods them.</p>
              {/* <p className="text-gray-300 mb-4">
                Want to read more? Follow me on Medium for regular updates!
              </p> */}
              {/* <div className="flex justify-center gap-4">
                <a
                  href="https://medium.com/@yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-white border-1 text-white px-3 py-2 rounded-md transition-colors duration-200"
                >
                  Follow me on Medium
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
