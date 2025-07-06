import React from "react";
import BlogComponent from "./BlogComponent";
import PythonBlog from "../../assets/images/Python-blog.png";

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
            <div className="w-full flex justify-center items-center flex-wrap">
              <ul className="italic text-gray-100 font-bold min-h-[20vh] sm:min-h-[30vh] mb-12 sm:mb-24 items-center flex flex-col w-full">
                <div className="pl-0 sm:pl-6 text-gray-200 flex gap-2 w-full flex-wrap justify-center">
                  <BlogComponent
                    image={PythonBlog}
                    title="How python engine gets down"
                    description="Python's got that clean, readable syntax that makes coding feel like a breeze, but behind the scenes, it's got a straight-up beast of an engine turning your code into reality. We're talking CPython here — the standard Python implementation that's running the show. Let's break down the steps of how your Python code goes from a .py file to straight-up magic."
                    readTime={10}
                    category="Python"
                    tags={["Python", "CPython"]}
                    publishDate="july 6, 2025"
                    liveLink="https://medium.com/@lalmohansingh83/how-pythons-engine-gets-down-a-guide-to-python-s-inner-workings-699ea581ad96"
                  />
                </div>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <p className="text-gray-300 mb-4">
                Want to read more? Follow me on Medium for regular updates!
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://medium.com/@lalmohansingh83"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-white border-1 text-white px-3 py-2 rounded-md transition-colors duration-200"
                >
                  Follow me on Medium
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
