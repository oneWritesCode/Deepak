import React, { useState, useRef } from "react";
import NavLink from "./components/NavLink";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import LatestProjectSection from "./components/LatestProjectSection";
import Lines from "./components/Lines";
import GitHubContributions from "./components/githubContributions";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "projects", href: "/projects" },
  { label: "blogs", href: "/blogs" },
];

function LandingPage(): React.ReactElement {
  const [bgStyle, setBgStyle] = useState<React.CSSProperties>({
    width: "90px",
    left: "0px",
    opacity: 1,
  });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = e.currentTarget.getBoundingClientRect();

    setBgStyle({
      width: `${buttonRect.width}px`,
      left: `${buttonRect.left - containerRect.left}px`,
      opacity: 1,
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="absolute max-w-5xl px-5 pt-5 md:px-15 md:pt-20 z-50">
          <div className="flex md:gap-8 flex-wrap">
            <img
              src="/assets/images/Animated-Image.png"
              alt="me"
              className="w-75 h-75 border-4 border-transparent"
            />

            <div>
              <h1 className="relative Bonheur mt-2 md:mt-0 md:mb-4 text-5xl sm:text-5xl md:text-7xl font-medium z-10 ext-center bg-clip-text text-transparent bg-gradient-to-r from-zinc-500 to-zinc-500 capitalize">
                hey, i am deepak
              </h1>

              <div className="w-60 lg:w-100 sm:w-80 pt-2 md:pt-4 text-sm sm:text-xl font-medium sourGummy">
                <p className="text-[12px] md:text-sm">
                  also known as {""}
                  <h1 className="text-zinc-400 font-bold capitalize inline">
                    ( triordeep )
                  </h1>{" "}
                  by some . just curious about things and doing whatever my
                  brain's saying. building and breaking things to satisfy my
                  soul. Exploring tech for fun and trying to showcase some cool
                  stuffs i created.
                  <h1 className="opacity-0 inline text-[1px]">
                    {" "}
                    deepak kumar singh
                  </h1>
                </p>
              </div>

              <div
                ref={containerRef}
                className="relative flex gap-10 mt-2 md:mt-6 sourGummy"
              >
                {/* sliding bg pill */}
                <div
                  className="absolute bottom-0 h-full border-b pointer-events-none"
                  style={{
                    ...bgStyle,
                    transition:
                      "left 0.25s cubic-bezier(0.4,0,0.2,1), width 0.25s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease",
                  }}
                />

                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    className="cursor-pointer inline z-10"
                  >
                    <button
                      data-cursor="Click"
                      className="cursor-pointer px-3 py-1 decoration-dotted text-sm md:text-medium font-medium capitalize"
                      onMouseEnter={handleMouseEnter}
                    >
                      {item.label}
                    </button>
                  </NavLink>
                ))}
              </div>

              <div className="flex mt-4 md:mt-6">
                <a
                  href="https://x.com/triordeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg font-bold p-3 cursor-pointer transition-all duration-300 hover:scale-105"
                  title="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 1227"
                    width="24"
                    height="24"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path
                      d="M714.7 561.7L1157 0H1051.6L671.8 484.3 352.3 0H0L462.2 687.8 0 1227h105.4l403.6-490.6 
                 337.6 490.6H1200L714.7 561.7zM557.8 614.4l-46.7-67.2L141.7 83.9h157.8l289.4 417.1 
                 46.7 67.2 383.4 552.6H918.9L557.8 614.4z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/deepak-singh-27a17a321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg font-bold p-3 cursor-pointer transition-all duration-300 hover:scale-105"
                  title="LinkedIn"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/oneWritesCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg font-bold p-3 cursor-pointer transition-all duration-300 scale-120"
                  title="GitHub"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://d33pak.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold rounded-full w-8 flex items-center justify-center pb-0.5 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
                  title="itch.io"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    width="80"
                    height="24"
                    fill="#ffffff"
                  >
                    <path d="M135.9 98.8C114.2 111.7 71.4 160.8 71 173.7L71 195C71 222.1 96.3 245.8 119.2 245.8C146.8 245.8 169.7 223 169.7 195.8C169.7 222.9 191.9 245.8 219.5 245.8C247.1 245.8 268.5 223 268.5 195.8C268.5 222.9 292.1 245.8 319.7 245.8L320.2 245.8C347.8 245.8 371.4 223 371.4 195.8C371.4 222.9 392.9 245.8 420.4 245.8C447.9 245.8 470.2 223 470.2 195.8C470.2 222.9 493.2 245.8 520.7 245.8C543.7 245.8 569 222 569 195L569 173.7C568.6 160.8 525.8 111.6 504.1 98.7C436.7 96.4 389.9 96 320.1 96C250.3 96 155.1 97.1 135.9 98.8zM268.2 233.2C246.2 271.6 190.3 271.9 168.4 233.4C155.2 256.5 125.2 265.5 112.4 261.1C108.5 301.3 98.7 498.2 130.1 530.3C210.1 549 432.2 548.4 509.9 530.3C541.5 498 531.2 298.3 527.6 261.1C514.7 265.5 484.7 256.5 471.6 233.4C449.6 271.9 393.8 271.5 371.8 233.2C364.7 245.7 348.8 262.1 320 262.1C309.6 262.4 299.2 259.9 290.1 254.8C281 249.7 273.4 242.2 268.2 233.2L268.2 233.2zM226.6 287C243.1 287 257.7 287 275.8 306.8C305.1 303.8 334.7 303.8 364 306.8C382.2 287.1 396.8 287.1 413.2 287.1C465.5 287.1 478.4 364.6 497.1 431.5C514.4 493.7 491.6 495.2 463.1 495.2C421 493.6 397.6 463 397.6 432.4C358.3 438.8 295.7 441.2 242 432.4C242 463 218.7 493.6 176.5 495.2C148.1 495.1 125.3 493.6 142.6 431.5C161.3 364.5 174.2 287.1 226.5 287.1L226.5 287zM320 334.8C320 334.8 275.6 375.6 267.6 390L296.6 388.8L296.6 414.1C296.6 415.6 317.9 414.3 319.9 414.3C331.5 414.8 343.2 415.3 343.2 414.1L343.2 388.8L372.2 390C364.2 375.5 319.8 334.8 319.8 334.8L319.9 334.8z" />
                  </svg>
                </a>
                <a
                  href="https://medium.com/@triordeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold p-3 rounded-full w-8 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
                  title="Medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80"
                    height="24"
                    fill="none"
                    aria-labelledby="wordmark-medium-desc"
                    viewBox="0 0 719 160"
                    className=""
                  >
                    <desc id="wordmark-medium-desc">Medium Logo</desc>
                    <path
                      fill="#ffffff"
                      d="m174.104 9.734.215-.047V8.02H130.39L89.6 103.89 48.81 8.021H1.472v1.666l.212.047c8.018 1.81 12.09 4.509 12.09 14.242V137.93c0 9.734-4.087 12.433-12.106 14.243l-.212.047v1.671h32.118v-1.665l-.213-.048c-8.018-1.809-12.089-4.509-12.089-14.242V30.586l52.399 123.305h2.972l53.925-126.743V140.75c-.687 7.688-4.721 10.062-11.982 11.701l-.215.05v1.652h55.948v-1.652l-.215-.05c-7.269-1.639-11.4-4.013-12.087-11.701l-.037-116.774h.037c0-9.733 4.071-12.432 12.087-14.242m25.555 75.488c.915-20.474 8.268-35.252 20.606-35.507 3.806.063 6.998 1.312 9.479 3.714 5.272 5.118 7.751 15.812 7.368 31.793zm-.553 5.77h65.573v-.275c-.186-15.656-4.721-27.834-13.466-36.196-7.559-7.227-18.751-11.203-30.507-11.203h-.263c-6.101 0-13.584 1.48-18.909 4.16-6.061 2.807-11.407 7.003-15.855 12.511-7.161 8.874-11.499 20.866-12.554 34.343q-.05.606-.092 1.212a50 50 0 0 0-.065 1.151 85.807 85.807 0 0 0-.094 5.689c.71 30.524 17.198 54.917 46.483 54.917 25.705 0 40.675-18.791 44.407-44.013l-1.886-.664c-6.557 13.556-18.334 21.771-31.738 20.769-18.297-1.369-32.314-19.922-31.042-42.395m139.722 41.359c-2.151 5.101-6.639 7.908-12.653 7.908s-11.513-4.129-15.418-11.63c-4.197-8.053-6.405-19.436-6.405-32.92 0-28.067 8.729-46.22 22.24-46.22 5.657 0 10.111 2.807 12.236 7.704zm43.499 20.008c-8.019-1.897-12.089-4.722-12.089-14.951V1.309l-48.716 14.353v1.757l.299-.024c6.72-.543 11.278.386 13.925 2.83 2.072 1.915 3.082 4.853 3.082 8.987v18.66c-4.803-3.067-10.516-4.56-17.448-4.56-14.059 0-26.909 5.92-36.176 16.672-9.66 11.205-14.767 26.518-14.767 44.278-.003 31.72 15.612 53.039 38.851 53.039 13.595 0 24.533-7.449 29.54-20.013v16.865h43.711v-1.746zM424.1 19.819c0-9.904-7.468-17.374-17.375-17.374-9.859 0-17.573 7.632-17.573 17.374s7.721 17.374 17.573 17.374c9.907 0 17.375-7.47 17.375-17.374m11.499 132.546c-8.019-1.897-12.089-4.722-12.089-14.951h-.035V43.635l-43.714 12.551v1.705l.263.024c9.458.842 12.047 4.1 12.047 15.152v81.086h43.751v-1.746zm112.013 0c-8.018-1.897-12.089-4.722-12.089-14.951V43.635l-41.621 12.137v1.71l.246.026c7.733.813 9.967 4.257 9.967 15.36v59.279c-2.578 5.102-7.415 8.131-13.274 8.336-9.503 0-14.736-6.419-14.736-18.073V43.638l-43.714 12.55v1.703l.262.024c9.459.84 12.05 4.097 12.05 15.152v50.17a56.3 56.3 0 0 0 .91 10.444l.787 3.423c3.701 13.262 13.398 20.197 28.59 20.197 12.868 0 24.147-7.966 29.115-20.43v17.311h43.714v-1.747zm169.818 1.788v-1.749l-.213-.05c-8.7-2.006-12.089-5.789-12.089-13.49v-63.79c0-19.89-11.171-31.761-29.883-31.761-13.64 0-25.141 7.882-29.569 20.16-3.517-13.01-13.639-20.16-28.606-20.16-13.146 0-23.449 6.938-27.869 18.657V43.643L545.487 55.68v1.715l.263.024c9.345.829 12.047 4.181 12.047 14.95v81.784h40.787v-1.746l-.215-.053c-6.941-1.631-9.181-4.606-9.181-12.239V66.998c1.836-4.289 5.537-9.37 12.853-9.37 9.086 0 13.692 6.296 13.692 18.697v77.828h40.797v-1.746l-.215-.053c-6.94-1.631-9.18-4.606-9.18-12.239V75.066a42 42 0 0 0-.578-7.26c1.947-4.661 5.86-10.177 13.475-10.177 9.214 0 13.691 6.114 13.691 18.696v77.828z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <GitHubContributions />
          <TechStack />
          <Experience />
          <LatestProjectSection />
          <Footer />
        </div>
      </div>
      <div className="w-full h-screenoverflow-hidden fixed top-0 right-0 z-0 md:scale-100 scale-250 bg-whte">
        <div className="opacity-60">
          <Lines />
          <Lines />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
