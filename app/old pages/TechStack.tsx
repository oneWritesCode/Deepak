import React, { useState, useRef } from "react";

const expressjs: string = "/assets/images/express-js.png";
const figma: string = "/assets/images/figma.png";
const mongodb: string = "/assets/images/mongodb.png";
const nextjs: string = "/assets/images/nextjs.png";
const nodejs: string = "/assets/images/nodejs.png";
const reactjs: string = "/assets/images/react.png";
const tailwindcss: string = "/assets/images/tailwindcss.png";
const typescript: string = "/assets/images/typescript.png";
const python: string = "/assets/images/python.png";
const postgressql: string = "/assets/images/postgressql.png";
const AWS: string = "/assets/images/amazon-aws.png";
const prisma: string = "/assets/images/prisma.png";
const docker: string = "/assets/images/docker.png";
const godot: string = "/assets/images/godot.png";

interface TechComponentProps {
  image?: string;
  text?: string;
  label?: string;
  classes?: string;
  animationDelay?: number;
  cycleDuration?: number;
}

function TechComponent(props: TechComponentProps): React.ReactElement {
  const { animationDelay = 0, cycleDuration = 16 } = props;
  const [manualFlip, setManualFlip] = useState(false);
  const flipTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animationName = `spin_${String(animationDelay).replace(".", "_")}`;

  const SPIN_DURATION = 1;
  const PAUSE_DURATION = 1.5;

  const total = cycleDuration;
  const spinStartPct = (animationDelay / total) * 100;
  const spin1EndPct = ((animationDelay + SPIN_DURATION) / total) * 100;
  const pauseEndPct =
    ((animationDelay + SPIN_DURATION + PAUSE_DURATION) / total) * 100;
  const spin2EndPct =
    ((animationDelay + SPIN_DURATION * 2 + PAUSE_DURATION) / total) * 100;

  const keyframes = `
    @keyframes ${animationName} {
      0%                           { transform: rotateY(0deg);   z-index: 1;  }
      ${spinStartPct.toFixed(3)}%  { transform: rotateY(0deg);   z-index: 1;  }
      ${spin1EndPct.toFixed(3)}%   { transform: rotateY(180deg); z-index: 50; }
      ${pauseEndPct.toFixed(3)}%   { transform: rotateY(180deg); z-index: 50; }
      ${spin2EndPct.toFixed(3)}%   { transform: rotateY(360deg); z-index: 1;  }
      100%                         { transform: rotateY(360deg); z-index: 1;  }
    }

    @keyframes manual_flip {
      0%   { transform: rotateY(0deg);   z-index: 50; }
      30%  { transform: rotateY(180deg); z-index: 50; }
      70%  { transform: rotateY(180deg); z-index: 50; }
      100% { transform: rotateY(360deg); z-index: 50; }
    }
  `;

  const MANUAL_TOTAL = SPIN_DURATION + PAUSE_DURATION + SPIN_DURATION; // 3.5s

  // on hover/click: override with manual_flip, then hand back to auto after it finishes
  const triggerFlip = () => {
    if (manualFlip) return; // already flipping manually
    setManualFlip(true);
    if (flipTimeout.current) clearTimeout(flipTimeout.current);
    flipTimeout.current = setTimeout(() => {
      setManualFlip(false);
    }, MANUAL_TOTAL * 1000);
  };

  const cardStyle: React.CSSProperties = manualFlip
    ? {
        animation: `manual_flip ${MANUAL_TOTAL}s ease-in-out 1`,
        transformStyle: "preserve-3d",
        position: "relative",
        zIndex: 50,
      }
    : {
        animation: `${animationName} ${cycleDuration}s linear infinite`,
        transformStyle: "preserve-3d",
        position: "relative",
      };

  const faceBase =
    "absolute inset-0 rounded-2xl shadow-xl shadow-white/10 bg-black/90 flex items-center justify-center [backface-visibility:hidden] cursor-pointer";

  const frontFaceStyle: React.CSSProperties = {
    width: "50px",
    left: "50%",
    transform: "translateX(-50%) rotateY(0deg)",
  };

  const backFaceStyle: React.CSSProperties = {
    transform: "rotateY(180deg)",
    minWidth: "70px",
    width: "auto",
    whiteSpace: "nowrap",
    left: "50%",
    marginLeft: "-35px",
  };

  return (
    <>
      <style>{keyframes}</style>

      {props.image && (
        <div
          className="[perspective:600px] h-[50px] lg:h-[70px]"
          style={{ width: "auto", minWidth: "50px" }}
          onMouseEnter={triggerFlip}
          onClick={triggerFlip}
        >
          <div style={cardStyle} className="h-full w-full">
            {/* Front */}
            <div className={`${faceBase} lg:p-2 p-1`} style={frontFaceStyle}>
              <img
                src={props.image}
                className={`${props.classes} max-w-full max-h-full`}
                alt={props.label ?? "tech icon"}
              />
            </div>
            {/* Back */}
            <div
              className={`${faceBase} px-3 bg-black/95`}
              style={backFaceStyle}
            >
              <span className="text-white text-[10px] lg:text-xs font-semibold tracking-wider text-center leading-tight">
                {props.label ?? ""}
              </span>
            </div>
          </div>
        </div>
      )}

      {props.text && !props.image && (
        <div
          className="[perspective:600px] h-[50px] lg:h-[70px]"
          style={{ width: "auto", minWidth: "60px" }}
          onMouseEnter={triggerFlip}
          onClick={triggerFlip}
        >
          <div style={cardStyle} className="h-full w-full">
            {/* Front */}
            <div
              className={`${faceBase} px-3`}
              style={{ whiteSpace: "nowrap" }}
            >
              <p className={props.classes} style={{ whiteSpace: "nowrap" }}>
                {props.text}
              </p>
            </div>
            {/* Back */}
            <div
              className={`${faceBase} px-3 bg-black/95`}
              style={{ transform: "rotateY(180deg)", whiteSpace: "nowrap" }}
            >
              <span className="text-white text-[10px] lg:text-xs font-semibold tracking-wider leading-tight">
                {props.label ?? props.text ?? ""}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const SPIN_DURATION = 1;
const PAUSE_DURATION = 1.5;
const IDLE_BETWEEN = 0.4;
const TOTAL_CARDS = 15;
const CYCLE = TOTAL_CARDS * (SPIN_DURATION * 2 + PAUSE_DURATION + IDLE_BETWEEN);

function TechStack(): React.ReactElement {
  const delay = (i: number) =>
    i * (SPIN_DURATION * 2 + PAUSE_DURATION + IDLE_BETWEEN);

  return (
    <div className="w-full top-0 z-40 flex items-center justify-center bg-black">
      <div className="w-full flex items-center justify-center z-40">
        <div className="p-1 flex flex-col items-center capitalize">
          <p className="Bonheur text-5xl text-center mt-4 mb-4">
            My Tech Stack
          </p>

          <div className="flex items-center justify-center gap-2 flex-wrap w-[80%] px-4 sourGummy">
            <TechComponent
              image={reactjs}
              label="React"
              animationDelay={delay(0)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={tailwindcss}
              label="Tailwind CSS"
              animationDelay={delay(1)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={typescript}
              label="TypeScript"
              animationDelay={delay(2)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={nextjs}
              label="Next.js"
              animationDelay={delay(3)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={expressjs}
              label="Express.js"
              animationDelay={delay(4)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={AWS}
              label="AWS"
              animationDelay={delay(5)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={mongodb}
              label="MongoDB"
              animationDelay={delay(6)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={nodejs}
              label="Node.js"
              animationDelay={delay(7)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={postgressql}
              label="PostgreSQL"
              animationDelay={delay(8)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={python}
              label="Python"
              animationDelay={delay(9)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              text="GSAP"
              label="GSAP"
              classes="mogra"
              animationDelay={delay(10)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              text="motion"
              label="Motion"
              animationDelay={delay(11)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={figma}
              label="Figma"
              animationDelay={delay(12)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={prisma}
              label="Prisma"
              animationDelay={delay(13)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={docker}
              label="Docker"
              animationDelay={delay(14)}
              cycleDuration={CYCLE}
            />
            <TechComponent
              image={godot}
              label="GoDot"
              animationDelay={delay(15)}
              cycleDuration={CYCLE}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
