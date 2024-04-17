import { useState } from "react"

export default function Description(props) {

    const [showLessStatus, setShowLessStatus] = useState(true);
    return (
        <div className={`flex w-full p-5 shadow-xl flex-col items-start ` + (showLessStatus == false ? ` h-full` : ` h-36 overflow-hidden`)}>
            <div className="flex w-48 justify-between">
                <h1 className="font-bold">{props.views} views</h1>
                <h1 className="font-bold">{props.date.getDate().toString() + "." + props.date.getDay().toString() + "." + props.date.getFullYear()}</h1>
            </div>
            <p className="overflow-hidden py-5">{props.description}</p>
            <button className="py-2 px-5 mt-2 hover:bg-gray-600 rounded-lg font-semibold" onClick={() => setShowLessStatus(!showLessStatus)}>{showLessStatus ? "Show more" : "Show less"}</button>
        </div>
    )
}