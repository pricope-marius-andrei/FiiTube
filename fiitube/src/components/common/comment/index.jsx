export default function Comment(props) {
    return (
        <div className="flex w-full items-center hover:bg-gray-600 p-5 rounded-xl">
            <img className="flex rounded-full w-14  " src="src\assets\images\avatar.jpg"/>
            <div className="flex flex-col">
                <div className="flex">
                    <h1 className="ml-5">@{props.tag}</h1>
                    <h1 className="ml-5">{props.time}</h1>
                </div>
                <h1 className="ml-5">{props.comment}</h1>
            </div>
        </div>
    )
}