import html from "../../assets/images/html.png"
import appwrite from "../../assets/images/Appwrite.png"
import css from "../../assets/images/css.png"
import expressjs from "../../assets/images/express-js.png"
import figma from "../../assets/images/figma.png"
import javascript from "../../assets/images/javascript.png"
import mongodb from "../../assets/images/mongodb.png"
import nextjs from "../../assets/images/nextjs.png"
import nodejs from "../../assets/images/nodejs.png"
import reactjs from "../../assets/images/react.png"
import tailwindcss from "../../assets/images/tailwindcss.png"
import typescript from "../../assets/images/typescript.png"
import vite from "../../assets/images/vite.png"
import AWS from "../../assets/images/amazon-aws.png"
import TechComponent from "./TechComponent"




function TechStack() {
    return (
        <div className='w-full top-0 z-40 flex items-center justify-center'>
            <div className='w-full flex items-center justify-center z-40'>
                <div className='lg:w-[80vw] lg;w-[90vw] lg:p-4 p-1 -mt-10 lg:-mt-15 flex flex-col items-center capitalize'>

                    <p className='Bonheur text-7xl text-center my-10'>My Tech stack</p>
                    <div className='flex items-center justify-center gap-7 flex-wrap w-[80%] p-4'>
                        <TechComponent image={html} />
                        <TechComponent image={css} />
                        <TechComponent image={javascript} />
                        <TechComponent image={appwrite} />
                        <TechComponent image={expressjs} />
                        <TechComponent image={figma} />
                        <TechComponent image={mongodb} />
                        <TechComponent image={nextjs} />
                        <TechComponent image={typescript} />
                        <TechComponent image={tailwindcss} />
                        <TechComponent image={nodejs} />
                        <TechComponent image={vite} />
                        <TechComponent image={reactjs} />
                        <TechComponent image={AWS} />
                        <TechComponent text="GSAP" classes="mogra" />
                        <TechComponent text="motion" classes=""/>   

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack