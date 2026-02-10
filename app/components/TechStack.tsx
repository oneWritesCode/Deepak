import React from "react";

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
import TechComponent from "./TechComponent" 




function TechStack(): React.ReactElement {
    return (
        <div className='w-full top-0 z-40 flex items-center justify-center bg-black pt-10'>
            <div className='w-full flex items-center justify-center z-40'>
                <div className='lg:w-[80vw] lg;w-[90vw] lg:p-4 p-1 -mt-10 lg:-mt-15 flex flex-col items-center capitalize'>

                    <p className='Bonheur text-7xl text-center my-10'>My Tech stack</p>
                    <div className='flex items-center justify-center gap-3 md:gap-7 flex-wrap w-[80%] pX-4'>
                        <TechComponent image={reactjs} />
                        <TechComponent image={tailwindcss} />
                        <TechComponent image={typescript} />
                        <TechComponent image={nextjs} />
                        <TechComponent image={expressjs} />
                        <TechComponent image={AWS} />
                        <TechComponent image={mongodb} />
                        <TechComponent image={nodejs} />
                        <TechComponent image={postgressql} />
                        <TechComponent image={python} />
                        <TechComponent text="GSAP" classes="mogra" />
                        <TechComponent text="motion"/>   
                        <TechComponent image={figma} />
                        <TechComponent image={prisma} />
                        <TechComponent image={docker} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack