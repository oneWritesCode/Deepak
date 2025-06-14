import html from "../../assets/images/html.png"

function TechComponent(props) {
    return (
        <>
            {props.image &&
                <div className="lg:p-2 p-1 border-gray-500 lg:h-[70px] h-[50px] backdrop-blur-xmd rounded bg-white/10 flex items-center justify-center">
                    <img src={props.image}
                        className={`${props.classes} lg:min-w-[50px] min-w-[20px]`} />
                </div>
            }
            {props.text &&
                <div className="p-2 border-gray-500 lg:h-[70px] h-[20px] backdrop-blur-xmd rounded bg-white/10 flex items-center justify-center">
                    <p
                        className={`${props.classes}`}>{props.text}</p>
                </div>
            }
        </>
    )
}

export default TechComponent