export default function Button(props) {
    return (
        <button className="flex justify-center items-center rounded-full w-12 h-12 hover:cursor-pointer hover:bg-[#474241] bg-[#2b2726]">
            {
                props.icon &&
                <span>
                    {props.icon}
                </span>
            }
        </button>
    )
}