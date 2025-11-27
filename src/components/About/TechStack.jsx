import expressjs from "../../assets/images/express-js.png"
import figma from "../../assets/images/figma.png"
import mongodb from "../../assets/images/mongodb.png"
import nextjs from "../../assets/images/nextjs.png"
import nodejs from "../../assets/images/nodejs.png"
import reactjs from "../../assets/images/react.png"
import tailwindcss from "../../assets/images/tailwindcss.png"
import typescript from "../../assets/images/typescript.png"
import python from "../../assets/images/python.png"
import postgressql from "../../assets/images/postgressql.png"
import AWS from "../../assets/images/amazon-aws.png"
import TechComponent from "./TechComponent"




function TechStack() {
    return (
        <div className='w-full top-0 z-40 flex items-center justify-center'>
            <div className='w-full flex items-center justify-center z-40'>
                <div className='lg:w-[80vw] lg;w-[90vw] lg:p-4 p-1 -mt-10 lg:-mt-15 flex flex-col items-center capitalize'>

                    <p className='Bonheur text-7xl text-center my-10'>My Tech stack</p>
                    <div className='flex items-center justify-center gap-7 flex-wrap w-[80%] p-4'>
                        {/* <TechComponent image={html} />
                        <TechComponent image={css} />
                        <TechComponent image={javascript} /> */}

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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack