import html from "../../assets/images/html.png"

function TechComponent(props) {
    return (
        <>
            {props.image &&
                <div className="p-2 border-gray-500 h-[70px] backdrop-blur-xmd rounded bg-white/10 flex items-center justify-center">
                    <img src={props.image}
                        className={`${props.classes} min-w-[50px]`} />
                </div>
            }
            {props.text &&
                <div className="p-2 border-gray-500 h-[70px] backdrop-blur-xmd rounded bg-white/10 flex items-center justify-center">
                    <p
                        className={`${props.classes}`}>{props.text}</p>
                </div>
            }
        </>
    )
}

export default TechComponent