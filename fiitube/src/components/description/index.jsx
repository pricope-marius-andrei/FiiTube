import { useState } from "react"

export default function Description(props) {

    const [showLessStatus, setShowLessStatus] = useState(true);
    return (
        <div className={`flex w-full p-5 shadow-xl flex-col items-start ` + (showLessStatus == false ? ` h-full` : ` h-36 overflow-hidden`)}>
            <div className="flex w-48 justify-between">
                <h1>{props.views} views</h1>
                <h1>{props.date.getDate().toString() + "." + props.date.getDay().toString() + "." + props.date.getFullYear()}</h1>
            </div>
            <p className="overflow-hidden">{props.description}</p>
            <button className="p-2 hover:bg-gray-600 rounded-lg" onClick={() => setShowLessStatus(!showLessStatus)}>{showLessStatus ? "Show more" : "Show less"}</button>
        </div>
    )
}